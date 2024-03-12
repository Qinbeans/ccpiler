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
        rets = dd.find_all("ol", class_="return-list")

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
                    if "{" in p_type.text and "}" in p_type.text or "| table" in p_type.text:
                        p_type = "dict"
                    elif "| string" in p_type.text:
                        p_type = "string"
                    elif "| number" in p_type.text:
                        p_type = "number"
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
        if len(rets) > 1:
            # place 2 dummy values to indicate that this function returns an array
            returns.append("optional/multiple")
        elif len(rets) > 0:
            lis = rets[0].find_all("li")
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
    with open("tests/test3.html") as f:
        soup = bs4.BeautifulSoup(f, "html.parser")
        extract_functions(soup, "Globals", "turtle")
    with open("tests/test4.html") as f:
        soup = bs4.BeautifulSoup(f, "html.parser")
        extract_functions(soup, "Globals", "peripheral")

def data_to_blockly(pretty: bool = False, output: str = "blockly.json"):
    blockly = {}
    for category in data["categories"]:
        blockly[category] = {}
        for library in data["categories"][category]:
            blockly[category][library] = []
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
                        block[f"message{i+1}"] = f"{parameter['name']}: function("
                        # break the function block
                        fn_split = ":".join(parameter["type"][8:].split(":")[0:-1])
                        fn_params = fn_split[1:-1].split(", ")
                        block[f"args{i+1}"] = []
                        arg_num = 1
                        for fn_param in fn_params:
                            fn_split2 = fn_param.split(": ")
                            fn_name = fn_split2[0]
                            fn_type = fn_split2[1]
                            print(f"[{COLORS['BLUE']}INFO{COLORS['CLEAR']}]: {fn_name} -> {fn_type}")
                            if fn_type == "any":
                                block[f"args{i+1}"].append({"type": "field_variable", "name": fn_name, "variable": fn_name})
                            else:
                                if "number" in fn_type:
                                    fn_type = "Number"
                                elif "string" in fn_type:
                                    fn_type = "String"
                                elif "boolean" in fn_type:
                                    fn_type = "Boolean"
                                elif "table" in fn_type:
                                    fn_type = "Array"
                                block[f"args{i+1}"].append({"type": "field_variable", "name": fn_name, "variable": fn_name, "variableTypes": [fn_type], "defaultType": fn_type})
                            block[f"message{i+1}"] += f"%{arg_num}, "
                            arg_num += 1
                        block[f"message{i+1}"] = block[f"message{i+1}"][0:-2] + f") %{arg_num}"
                        block[f"args{i+1}"].append({"type": "input_statement", "name": parameter["name"]})
                    elif "number" in parameter["type"]:
                        block[f"args{i+1}"] = [{"type": "input_value", "name": parameter["name"], "check": "Number"}]
                    elif "string" in parameter["type"]:
                        block[f"args{i+1}"] = [{"type": "input_value", "name": parameter["name"], "check": "String"}]
                    else:
                        block[f"args{i+1}"] = [{"type": "input_value", "name": parameter["name"]}]
                    i += 1
                if len(data["categories"][category][library]["functions"][function]["returns"]) == 1:
                    if "number" in data["categories"][category][library]["functions"][function]["returns"][0]:
                        block["output"] = "Number"
                    elif "string" in data["categories"][category][library]["functions"][function]["returns"][0]:
                        block["output"] = "String"
                    elif "boolean" in data["categories"][category][library]["functions"][function]["returns"][0]:
                        block["output"] = "Boolean"
                    elif "table" in data["categories"][category][library]["functions"][function]["returns"][0]:
                        block["output"] = "Array"
                    elif data["categories"][category][library]["functions"][function]["returns"][0] == "optional/multiple":
                        block["output"] = "Array"
                        block["$tablize"] = True
                    elif "{" in data["categories"][category][library]["functions"][function]["returns"][0] and "}" in data["categories"][category][library]["functions"][function]["returns"][0]:
                        block["output"] = "Array"
                    else:
                        block["output"] = "Array" # Some unknown object that can be represented as Table
                elif len(data["categories"][category][library]["functions"][function]["returns"]) > 1:
                    block["output"] = "Array"
                    block["$tablize"] = True
                else:
                    block["previousStatement"] = None
                    block["nextStatement"] = None
                blockly[category][library].append(block)
    with open(output, "w") as f:
        if pretty:
            json.dump(blockly, f, indent=4)
        else:
            json.dump(blockly, f)

def test_data_to_blockly(pretty: bool = False, output: str = "blockly.json"):
    data_to_blockly(pretty, output)

def main(categories: list = [], pretty: bool = False, output: str = "blockly.json"):
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
    data_to_blockly(pretty, output)

def parse_args():
    parser = argparse.ArgumentParser(description="Converts the ComputerCraft Tweaked documentation to a JSON file")
    parser.add_argument("-o", "--output", help="The output file", default="blockly.json")
    parser.add_argument("-t", "--test", help="Run the tests", action="store_true")
    # which categories to extract
    parser.add_argument("-c", "--categories", help="The categories to extract", nargs="+", default=[])
    parser.add_argument("-p", "--pretty", help="Pretty print the output", action="store_true")
    return parser.parse_args()

if __name__ == "__main__":
    args = parse_args()
    if args.test:
        test_extract_navbar()
        test_extract_functions()
        test_data_to_blockly(args.pretty, args.output)
    else:
        main(args.categories, args.pretty, args.output)
    
    with open("cc:tweaked.json", "w") as f:
        if args.pretty:
            json.dump(data, f, indent=4)
        else:
            json.dump(data, f)