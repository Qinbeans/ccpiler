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
<img src="https://raw.githubusercontent.com/Qinbeans/ccpiler/main/docs/script_run.png" alt="script_run" height="75%" width="75%">


## Credits
Inspired by [ccblockly](https://github.com/Mirka1405/ccblockly)
