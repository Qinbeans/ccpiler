import bs4
import requests
import json
import argparse
import os

CCTWEAK_URL = "https://tweaked.cc/"

# used for printing to stdout
COLORS = {
    "RED": "\033[91m",
    "GREEN": "\033[92m",
    "BLUE": "\033[94m",
    "YELLOW": "\033[93m",
    "CYAN": "\033[96m",
    "MAGENTA": "\033[95m",
    "CLEAR": "\033[0m"
}

CAT_COLORS = {
    "Globals": 210,
    "Modules": 120,
    "Peripherals": 330,
    "Generic Peripherals": 270,
    "Events": 60,
    "Guides": 180,
    "Reference": 240
}

data = {"version": "^1.0.0","categories": {}}

def extract_navbar(soup: bs4.BeautifulSoup):
    navbar = soup.find("div", class_="nav-links")
    if navbar is None:
        return data
    h2data  = navbar.find_all("h2")
    uldata = navbar.find_all("ul")
    # enumerate through the h2 and ul data
    for i, h2 in enumerate(h2data):
        category = h2.text
        data["categories"][category] = {}
        # get the list of links
        links = uldata[i].find_all("a")
        for link in links:
            name = link.text
            href = link["href"]
            data["categories"][category][name] = {"link": href, "functions": {}, "constants": []}

def test_extract_navbar():
    with open("tests/test.html") as f:
        soup = bs4.BeautifulSoup(f, "html.parser")
        data = extract_navbar(soup)

def extract_functions(soup: bs4.BeautifulSoup, category: str, library: str):
    definition = soup.find("dl", class_="definition")
    dtdata = definition.find_all("dt")
    dddata = definition.find_all("dd")
    for i, dt in enumerate(dtdata):
        dd = dddata[i]
        raw_name = dt.find("span", class_="definition-name").text
        # looks like "write(text)"
        split_name = ""
        if raw_name[-1] == ")":
            split_name = raw_name[0:-1].split("(")
        else:
            split_name = raw_name.split("(")
        name = split_name[0]
        parameters = []
        returns = []

        param = dd.find("ol", class_="parameter-list")
        ret = dd.find("ol", class_="return-list")

        if param:
            lis = param.find_all("li")
            for li in lis:
                param_name = li.find("span", class_="parameter")
                p_name = ""
                if param_name:
                    p_name = param_name.text
                optional = li.find("span", class_="optional")
                p_type = li.find("span", class_="type")
                if p_type:
                    if "{" in p_type.text and "}" in p_type.text:
                        p_type = "dict"
                    else:
                        p_type = p_type.text
                else:
                    p_type = "any"
                if p_name == "" and p_type == "any":
                    continue
                if optional is not None:
                    parameters.append({"name": p_name[0:-1], "type": p_type, "optional": True})
                else:
                    parameters.append({"name": p_name, "type": p_type})
        if ret:
            lis = ret.find_all("li")
            for li in lis:
                _type = li.find("span", class_="type")
                if _type:
                    returns.append(_type.text)
        if len(parameters) == 0 and len(returns) == 0:
            data["categories"][category][library]["constants"].append(name)
        else:
            data["categories"][category][library]["functions"][name] = {"parameters": parameters, "returns": returns}

def test_extract_functions():
    with open("tests/test2.html") as f:
        soup = bs4.BeautifulSoup(f, "html.parser")
        extract_functions(soup, "Globals", "textutils")

def data_to_blockly():
    blockly = {}
    for category in data["categories"]:
        blockly[category] = []
        for library in data["categories"][category]:
            for function in data["categories"][category][library]["functions"]:
                tooltip = f"{library}.{function}"
                block = {
                    "message0": tooltip,
                    "colour": CAT_COLORS[category],
                    "tooltip": tooltip,
                    "helpUrl": f"https://tweaked.cc/{data['categories'][category][library]['link']}"
                }
                for i, parameter in enumerate(data["categories"][category][library]["functions"][function]["parameters"]):
                    block[f"message{i+1}"] = f"{parameter['name']}: {parameter['type']}, %1"
                    if "function" in parameter["type"]:
                        block[f"args{i+1}"] = [{"type": "input_statement", "name": parameter["name"]}]
                    elif "number" in parameter["type"]:
                        block[f"args{i+1}"] = [{"type": "input_value", "name": parameter["name"], "check": "Number"}]
                    elif "string" in parameter["type"]:
                        block[f"args{i+1}"] = [{"type": "input_value", "name": parameter["name"], "check": "String"}]
                    else:
                        block[f"args{i+1}"] = [{"type": "input_value", "name": parameter["name"]}]
                for i, ret in enumerate(data["categories"][category][library]["functions"][function]["returns"]):
                    if "number" in ret:
                        block["output"] = "Number"
                    elif "string" in ret:
                        block["output"] = "String"
                    else:
                        block["output"] = "Any"
                if len(data["categories"][category][library]["functions"][function]["returns"]) == 0:
                    block["previousStatement"] = None
                    block["nextStatement"] = None
                blockly[category].append(block)

    with open("blockly.json", "w") as f:
        json.dump(blockly, f, indent=4)

def test_data_to_blockly():
    data_to_blockly()

def main(categories: list = []):
    request = requests.get(CCTWEAK_URL)
    soup = bs4.BeautifulSoup(request.text, "html.parser")
    extract_navbar(soup)
    for category in data["categories"]:
        if category not in categories and len(categories) > 0:
            print(f"[{COLORS['YELLOW']}SKIP{COLORS['CLEAR']}] Skipping {category}")
            continue
        print(f"[{COLORS['BLUE']}INFO{COLORS['CLEAR']}] Extracting {category}:")
        for library in data["categories"][category]:
            print(f"[{COLORS['BLUE']}INFO{COLORS['CLEAR']}]\t{library}...")
            link = data["categories"][category][library]["link"]
            try:
                request = requests.get(CCTWEAK_URL + link, timeout=5) # 5 second timeout
            except requests.exceptions.RequestException as e:
                print(f"\t[{COLORS['RED']}Error{COLORS['CLEAR']}] {e}")
                continue
            soup = bs4.BeautifulSoup(request.text, "html.parser")
            extract_functions(soup, category, library)
            print(f"\t[{COLORS['GREEN']}Done{COLORS['CLEAR']}]")
        print(f"[{COLORS['GREEN']}Done{COLORS['CLEAR']}]")
    data_to_blockly()

def parse_args():
    parser = argparse.ArgumentParser(description="Converts the ComputerCraft Tweaked documentation to a JSON file")
    parser.add_argument("-o", "--output", help="The output file", default="cctweaked.json")
    parser.add_argument("-t", "--test", help="Run the tests", action="store_true")
    # which categories to extract
    parser.add_argument("-c", "--categories", help="The categories to extract", nargs="+", default=[])
    return parser.parse_args()

if __name__ == "__main__":
    args = parse_args()
    if args.test:
        test_extract_navbar()
        test_extract_functions()
        test_data_to_blockly()
    else:
        main(args.categories)
    with open(args.output, "w") as f:
        json.dump(data, f, indent=4)