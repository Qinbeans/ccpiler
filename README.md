# A Next.js tool for writing CC:Tweaked code *visually*

It turns Blockly code into Lua meant for CC:Tweaked.

<img src="https://raw.githubusercontent.com/Qinbeans/ccpiler/main/docs/void_dumby.png" alt="void_dumby" height="50%" width="50%">

Goal: To connect a CC:Tweaked computer or turtle to this website via websockets to edit code live.

## Scrape CC:Tweaked

The first thing that needs to be done is scraping CC:Tweaked to get up to date code.

```bash
python ./scripts/cctweaked2json.py
```

You can test whether the script works or not via this command:

```bash
python ./scripts/cctweaked2json.py -t
```

Run `python ./scripts/cctweaked2json.py -c Globals -o src/app/lib/blockly.json` to generate and update the Blockly blocks.

<img src="https://raw.githubusercontent.com/Qinbeans/ccpiler/main/docs/script_run.png" alt="script_run" height="35%" width="35%">

## Quirks

CC:Tweaked has a few quirks that need to be worked around, but it's no problem of Lua or CC:Tweaked, it's just the way Blockly works. Lua allows for multiple return values, but Blockly only allows for one. So to get around this, this assumes you want to use all values and puts them into a table.

<img src="https://raw.githubusercontent.com/Qinbeans/ccpiler/main/docs/multiple_returns.png" alt="script_run" height="45%" width="45%">

As you can see `turtle.craft` creates `{turtle.craft()}`.

<img src="https://raw.githubusercontent.com/Qinbeans/ccpiler/main/docs/void_dumby.png" alt="void_dumby" height="50%" width="50%">

Here's a quirk that was introduced by no fault but my own. I find it more precise and easier to code with since it expects that you need to use the return values of each variable. You can create a dummy variable to get around this.

This does make the Lua harder to read to a degree, but the hope is that the Blockly code is easier to read and understand.

## Credits
Inspired by [ccblockly](https://github.com/Mirka1405/ccblockly)
