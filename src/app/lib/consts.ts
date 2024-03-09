import { PageInfo, ToolBoxConfig } from './types';

export const pages: PageInfo[] = [
    {
        name:'home',
        url:'/'
    },
    {
        name:'editor',
        url:'/editor'
    },
    {
        name:'about',
        url:'/about'
    },
    {
        name:'contact',
        url:'/contact'
    }
]

export const TOOLBOX_CONFIG: ToolBoxConfig = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Logic",
            "colour": '%{BKY_LOGIC_HUE}',
            "contents": [
                {"kind": "block", "type": "controls_if"},
                {"kind": "block", "type": "logic_compare"},
                {"kind": "block", "type": "logic_operation"},
                {"kind": "block", "type": "logic_negate"},
                {"kind": "block", "type": "logic_boolean"}
            ]
        },
        {
            "kind": "category",
            "name": "Loops",
            "colour": '%{BKY_LOOPS_HUE}',
            "contents": [
                {"kind": "block", "type": "controls_repeat_ext"},
                {"kind": "block", "type": "controls_whileUntil"},
                {"kind": "block", "type": "controls_for"},
                {"kind": "block", "type": "controls_forEach"},
                {"kind": "block", "type": "controls_flow_statements"}
            ]
        },
        {
            "kind": "category",
            "name": "Math",
            "colour": '%{BKY_MATH_HUE}',
            "contents": [
                {"kind": "block", "type": "math_number"},
                {"kind": "block", "type": "math_arithmetic"},
                {"kind": "block", "type": "math_single"},
                {"kind": "block", "type": "math_trig"},
                {"kind": "block", "type": "math_constant"},
                {"kind": "block", "type": "math_number_property"},
                {"kind": "block", "type": "math_round"},
                {"kind": "block", "type": "math_on_list"},
                {"kind": "block", "type": "math_modulo"},
                {"kind": "block", "type": "math_constrain"},
                {"kind": "block", "type": "math_random_int"},
                {"kind": "block", "type": "math_random_float"}
            ]
        },
        {
            "kind": "category",
            "name": "Text",
            "colour": '%{BKY_TEXTS_HUE}',
            "contents": [
                {"kind": "block", "type": "text"},
                {"kind": "block", "type": "text_join"},
                {"kind": "block", "type": "text_append"},
                {"kind": "block", "type": "text_length"},
                {"kind": "block", "type": "text_isEmpty"},
                {"kind": "block", "type": "text_indexOf"},
                {"kind": "block", "type": "text_charAt"},
                {"kind": "block", "type": "text_getSubstring"},
                {"kind": "block", "type": "text_changeCase"},
                {"kind": "block", "type": "text_trim"},
                {"kind": "block", "type": "text_print"},
                {"kind": "block", "type": "text_prompt_ext"}
            ]
        },
        {
            "kind": "category",
            "name": "Lists",
            "colour": '%{BKY_LISTS_HUE}',
            "contents": [
                {"kind": "block", "type": "lists_create_with"}
            ]
        },
        {
            "kind": "category",
            "name": "Colour",
            "colour": '%{BKY_COLOUR_HUE}',
            "contents": [
                {"kind": "block", "type": "colour_picker"},
                {"kind": "block", "type": "colour_random"},
            ]
        },
        {
            "kind": "category",
            "name": "Variables",
            "custom": "VARIABLE",
            "colour": '%{BKY_VARIABLES_HUE}',
        },
        {
            "kind": "category",
            "name": "Functions",
            "custom": "PROCEDURE",
            "colour": '%{BKY_PROCEDURES_HUE}',
        },
    ]
}

export const FUNCTIONS: any = {
    "Globals": [
        {
            "message0": "_G.sleep",
            "colour": 210,
            "tooltip": "_G.sleep",
            "helpUrl": "https://tweaked.cc/module/_G.html",
            "message1": "time: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "time",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "_G.write",
            "colour": 210,
            "tooltip": "_G.write",
            "helpUrl": "https://tweaked.cc/module/_G.html",
            "message1": "text: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "text",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "_G.print",
            "colour": 210,
            "tooltip": "_G.print",
            "helpUrl": "https://tweaked.cc/module/_G.html",
            "message1": "...: any, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "..."
                }
            ],
            "output": "Number"
        },
        {
            "message0": "_G.printError",
            "colour": 210,
            "tooltip": "_G.printError",
            "helpUrl": "https://tweaked.cc/module/_G.html",
            "message1": "...: any, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "..."
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "_G.read",
            "colour": 210,
            "tooltip": "_G.read",
            "helpUrl": "https://tweaked.cc/module/_G.html",
            "message1": "replaceChar: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "replaceChar",
                    "check": "String"
                }
            ],
            "message2": "history: table, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "history"
                }
            ],
            "message3": "completeFn: dict, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "completeFn"
                }
            ],
            "message4": "default: string, %1",
            "args4": [
                {
                    "type": "input_value",
                    "name": "default",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "colors.combine",
            "colour": 210,
            "tooltip": "colors.combine",
            "helpUrl": "https://tweaked.cc/module/colors.html",
            "message1": "...: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "...",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "colors.subtract",
            "colour": 210,
            "tooltip": "colors.subtract",
            "helpUrl": "https://tweaked.cc/module/colors.html",
            "message1": "colors: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "colors",
                    "check": "Number"
                }
            ],
            "message2": "...: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "...",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "colors.test",
            "colour": 210,
            "tooltip": "colors.test",
            "helpUrl": "https://tweaked.cc/module/colors.html",
            "message1": "colors: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "colors",
                    "check": "Number"
                }
            ],
            "message2": "color: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "color",
                    "check": "Number"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "colors.packRGB",
            "colour": 210,
            "tooltip": "colors.packRGB",
            "helpUrl": "https://tweaked.cc/module/colors.html",
            "message1": "r: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "r",
                    "check": "Number"
                }
            ],
            "message2": "g: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "g",
                    "check": "Number"
                }
            ],
            "message3": "b: number, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "b",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "colors.unpackRGB",
            "colour": 210,
            "tooltip": "colors.unpackRGB",
            "helpUrl": "https://tweaked.cc/module/colors.html",
            "message1": "rgb: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "rgb",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "colors.rgb8",
            "colour": 210,
            "tooltip": "colors.rgb8",
            "helpUrl": "https://tweaked.cc/module/colors.html",
            "message1": "r: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "r",
                    "check": "Number"
                }
            ],
            "message2": "g: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "g",
                    "check": "Number"
                }
            ],
            "message3": "b: number, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "b",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "colors.toBlit",
            "colour": 210,
            "tooltip": "colors.toBlit",
            "helpUrl": "https://tweaked.cc/module/colors.html",
            "message1": "color: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "color",
                    "check": "Number"
                }
            ],
            "output": "String"
        },
        {
            "message0": "colors.fromBlit",
            "colour": 210,
            "tooltip": "colors.fromBlit",
            "helpUrl": "https://tweaked.cc/module/colors.html",
            "message1": "hex: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "hex",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "commands.exec",
            "colour": 210,
            "tooltip": "commands.exec",
            "helpUrl": "https://tweaked.cc/module/commands.html",
            "message1": "command: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "command",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "commands.execAsync",
            "colour": 210,
            "tooltip": "commands.execAsync",
            "helpUrl": "https://tweaked.cc/module/commands.html",
            "message1": "command: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "command",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "commands.list",
            "colour": 210,
            "tooltip": "commands.list",
            "helpUrl": "https://tweaked.cc/module/commands.html",
            "message1": "...: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "...",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "commands.getBlockPosition",
            "colour": 210,
            "tooltip": "commands.getBlockPosition",
            "helpUrl": "https://tweaked.cc/module/commands.html",
            "output": "Number"
        },
        {
            "message0": "commands.getBlockInfos",
            "colour": 210,
            "tooltip": "commands.getBlockInfos",
            "helpUrl": "https://tweaked.cc/module/commands.html",
            "message1": "minX: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "minX",
                    "check": "Number"
                }
            ],
            "message2": "minY: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "minY",
                    "check": "Number"
                }
            ],
            "message3": "minZ: number, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "minZ",
                    "check": "Number"
                }
            ],
            "message4": "maxX: number, %1",
            "args4": [
                {
                    "type": "input_value",
                    "name": "maxX",
                    "check": "Number"
                }
            ],
            "message5": "maxY: number, %1",
            "args5": [
                {
                    "type": "input_value",
                    "name": "maxY",
                    "check": "Number"
                }
            ],
            "message6": "maxZ: number, %1",
            "args6": [
                {
                    "type": "input_value",
                    "name": "maxZ",
                    "check": "Number"
                }
            ],
            "message7": "dimension: string, %1",
            "args7": [
                {
                    "type": "input_value",
                    "name": "dimension",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "commands.getBlockInfo",
            "colour": 210,
            "tooltip": "commands.getBlockInfo",
            "helpUrl": "https://tweaked.cc/module/commands.html",
            "message1": "x: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "x",
                    "check": "Number"
                }
            ],
            "message2": "y: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "y",
                    "check": "Number"
                }
            ],
            "message3": "z: number, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "z",
                    "check": "Number"
                }
            ],
            "message4": "dimension: string, %1",
            "args4": [
                {
                    "type": "input_value",
                    "name": "dimension",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "disk.isPresent",
            "colour": 210,
            "tooltip": "disk.isPresent",
            "helpUrl": "https://tweaked.cc/module/disk.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "disk.getLabel",
            "colour": 210,
            "tooltip": "disk.getLabel",
            "helpUrl": "https://tweaked.cc/module/disk.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "disk.setLabel",
            "colour": 210,
            "tooltip": "disk.setLabel",
            "helpUrl": "https://tweaked.cc/module/disk.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "message2": "label: string | nil, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "label",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "disk.hasData",
            "colour": 210,
            "tooltip": "disk.hasData",
            "helpUrl": "https://tweaked.cc/module/disk.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "disk.getMountPath",
            "colour": 210,
            "tooltip": "disk.getMountPath",
            "helpUrl": "https://tweaked.cc/module/disk.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "disk.hasAudio",
            "colour": 210,
            "tooltip": "disk.hasAudio",
            "helpUrl": "https://tweaked.cc/module/disk.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "disk.getAudioTitle",
            "colour": 210,
            "tooltip": "disk.getAudioTitle",
            "helpUrl": "https://tweaked.cc/module/disk.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "disk.playAudio",
            "colour": 210,
            "tooltip": "disk.playAudio",
            "helpUrl": "https://tweaked.cc/module/disk.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "disk.stopAudio",
            "colour": 210,
            "tooltip": "disk.stopAudio",
            "helpUrl": "https://tweaked.cc/module/disk.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "disk.eject",
            "colour": 210,
            "tooltip": "disk.eject",
            "helpUrl": "https://tweaked.cc/module/disk.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "disk.getID",
            "colour": 210,
            "tooltip": "disk.getID",
            "helpUrl": "https://tweaked.cc/module/disk.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "fs.complete",
            "colour": 210,
            "tooltip": "fs.complete",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "message2": "location: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "location",
                    "check": "String"
                }
            ],
            "message3": "include_files: boolean, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "include_files"
                }
            ],
            "message4": "include_dirs: boolean, %1",
            "args4": [
                {
                    "type": "input_value",
                    "name": "include_dirs"
                }
            ],
            "output": "String"
        },
        {
            "message0": "fs.find",
            "colour": 210,
            "tooltip": "fs.find",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "fs.isDriveRoot",
            "colour": 210,
            "tooltip": "fs.isDriveRoot",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "fs.list",
            "colour": 210,
            "tooltip": "fs.list",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "fs.combine",
            "colour": 210,
            "tooltip": "fs.combine",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "message2": "...: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "...",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "fs.getName",
            "colour": 210,
            "tooltip": "fs.getName",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "fs.getDir",
            "colour": 210,
            "tooltip": "fs.getDir",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "fs.getSize",
            "colour": 210,
            "tooltip": "fs.getSize",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "fs.exists",
            "colour": 210,
            "tooltip": "fs.exists",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "fs.isDir",
            "colour": 210,
            "tooltip": "fs.isDir",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "fs.isReadOnly",
            "colour": 210,
            "tooltip": "fs.isReadOnly",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "fs.makeDir",
            "colour": 210,
            "tooltip": "fs.makeDir",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "fs.move",
            "colour": 210,
            "tooltip": "fs.move",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "message2": "dest: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "dest",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "fs.copy",
            "colour": 210,
            "tooltip": "fs.copy",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "message2": "dest: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "dest",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "fs.delete",
            "colour": 210,
            "tooltip": "fs.delete",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "fs.open",
            "colour": 210,
            "tooltip": "fs.open",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "message2": "mode: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "mode",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "fs.getDrive",
            "colour": 210,
            "tooltip": "fs.getDrive",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "fs.getFreeSpace",
            "colour": 210,
            "tooltip": "fs.getFreeSpace",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "fs.getCapacity",
            "colour": 210,
            "tooltip": "fs.getCapacity",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "fs.attributes",
            "colour": 210,
            "tooltip": "fs.attributes",
            "helpUrl": "https://tweaked.cc/module/fs.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "gps.locate",
            "colour": 210,
            "tooltip": "gps.locate",
            "helpUrl": "https://tweaked.cc/module/gps.html",
            "message1": "timeout: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "timeout",
                    "check": "Number"
                }
            ],
            "message2": "debug: boolean, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "debug"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "help.path",
            "colour": 210,
            "tooltip": "help.path",
            "helpUrl": "https://tweaked.cc/module/help.html",
            "output": "String"
        },
        {
            "message0": "help.setPath",
            "colour": 210,
            "tooltip": "help.setPath",
            "helpUrl": "https://tweaked.cc/module/help.html",
            "message1": "newPath: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "newPath",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "help.lookup",
            "colour": 210,
            "tooltip": "help.lookup",
            "helpUrl": "https://tweaked.cc/module/help.html",
            "message1": "topic: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "topic",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "help.topics",
            "colour": 210,
            "tooltip": "help.topics",
            "helpUrl": "https://tweaked.cc/module/help.html",
            "output": "Any"
        },
        {
            "message0": "help.completeTopic",
            "colour": 210,
            "tooltip": "help.completeTopic",
            "helpUrl": "https://tweaked.cc/module/help.html",
            "message1": "prefix: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "prefix",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "http.get",
            "colour": 210,
            "tooltip": "http.get",
            "helpUrl": "https://tweaked.cc/module/http.html",
            "message1": "url: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "url",
                    "check": "String"
                }
            ],
            "message2": "headers: dict, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "headers"
                }
            ],
            "message3": "binary: boolean, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "binary"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "http.post",
            "colour": 210,
            "tooltip": "http.post",
            "helpUrl": "https://tweaked.cc/module/http.html",
            "message1": "url: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "url",
                    "check": "String"
                }
            ],
            "message2": "body: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "body",
                    "check": "String"
                }
            ],
            "message3": "headers: dict, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "headers"
                }
            ],
            "message4": "binary: boolean, %1",
            "args4": [
                {
                    "type": "input_value",
                    "name": "binary"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "http.request",
            "colour": 210,
            "tooltip": "http.request",
            "helpUrl": "https://tweaked.cc/module/http.html",
            "message1": "url: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "url",
                    "check": "String"
                }
            ],
            "message2": "body: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "body",
                    "check": "String"
                }
            ],
            "message3": "headers: dict, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "headers"
                }
            ],
            "message4": "binary: boolean, %1",
            "args4": [
                {
                    "type": "input_value",
                    "name": "binary"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "http.checkURLAsync",
            "colour": 210,
            "tooltip": "http.checkURLAsync",
            "helpUrl": "https://tweaked.cc/module/http.html",
            "message1": "url: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "url",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "http.checkURL",
            "colour": 210,
            "tooltip": "http.checkURL",
            "helpUrl": "https://tweaked.cc/module/http.html",
            "message1": "url: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "url",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "http.websocketAsync",
            "colour": 210,
            "tooltip": "http.websocketAsync",
            "helpUrl": "https://tweaked.cc/module/http.html",
            "message1": "url: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "url",
                    "check": "String"
                }
            ],
            "message2": "headers: dict, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "headers"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "http.websocket",
            "colour": 210,
            "tooltip": "http.websocket",
            "helpUrl": "https://tweaked.cc/module/http.html",
            "message1": "url: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "url",
                    "check": "String"
                }
            ],
            "message2": "headers: dict, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "headers"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "io.close",
            "colour": 210,
            "tooltip": "io.close",
            "helpUrl": "https://tweaked.cc/module/io.html",
            "message1": "file: Handle, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "file"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "io.input",
            "colour": 210,
            "tooltip": "io.input",
            "helpUrl": "https://tweaked.cc/module/io.html",
            "message1": "file: Handle | string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "file",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "io.lines",
            "colour": 210,
            "tooltip": "io.lines",
            "helpUrl": "https://tweaked.cc/module/io.html",
            "message1": "filename: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "filename",
                    "check": "String"
                }
            ],
            "message2": "...: any, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "..."
                }
            ],
            "output": "String"
        },
        {
            "message0": "io.open",
            "colour": 210,
            "tooltip": "io.open",
            "helpUrl": "https://tweaked.cc/module/io.html",
            "message1": "filename: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "filename",
                    "check": "String"
                }
            ],
            "message2": "mode: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "mode",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "io.output",
            "colour": 210,
            "tooltip": "io.output",
            "helpUrl": "https://tweaked.cc/module/io.html",
            "message1": "file: Handle | string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "file",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "io.read",
            "colour": 210,
            "tooltip": "io.read",
            "helpUrl": "https://tweaked.cc/module/io.html",
            "message1": "...: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "...",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "io.type",
            "colour": 210,
            "tooltip": "io.type",
            "helpUrl": "https://tweaked.cc/module/io.html",
            "message1": "obj: any, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "obj"
                }
            ],
            "output": "String"
        },
        {
            "message0": "io.write",
            "colour": 210,
            "tooltip": "io.write",
            "helpUrl": "https://tweaked.cc/module/io.html",
            "message1": "...: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "...",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "keys.getName",
            "colour": 210,
            "tooltip": "keys.getName",
            "helpUrl": "https://tweaked.cc/module/keys.html",
            "message1": "code: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "code",
                    "check": "Number"
                }
            ],
            "output": "String"
        },
        {
            "message0": "multishell.getFocus",
            "colour": 210,
            "tooltip": "multishell.getFocus",
            "helpUrl": "https://tweaked.cc/module/multishell.html",
            "output": "Number"
        },
        {
            "message0": "multishell.setFocus",
            "colour": 210,
            "tooltip": "multishell.setFocus",
            "helpUrl": "https://tweaked.cc/module/multishell.html",
            "message1": "n: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "n",
                    "check": "Number"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "multishell.getTitle",
            "colour": 210,
            "tooltip": "multishell.getTitle",
            "helpUrl": "https://tweaked.cc/module/multishell.html",
            "message1": "n: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "n",
                    "check": "Number"
                }
            ],
            "output": "String"
        },
        {
            "message0": "multishell.setTitle",
            "colour": 210,
            "tooltip": "multishell.setTitle",
            "helpUrl": "https://tweaked.cc/module/multishell.html",
            "message1": "n: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "n",
                    "check": "Number"
                }
            ],
            "message2": "title: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "title",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "multishell.getCurrent",
            "colour": 210,
            "tooltip": "multishell.getCurrent",
            "helpUrl": "https://tweaked.cc/module/multishell.html",
            "output": "Number"
        },
        {
            "message0": "multishell.launch",
            "colour": 210,
            "tooltip": "multishell.launch",
            "helpUrl": "https://tweaked.cc/module/multishell.html",
            "message1": "tProgramEnv: table, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "tProgramEnv"
                }
            ],
            "message2": "sProgramPath: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "sProgramPath",
                    "check": "String"
                }
            ],
            "message3": "...: any, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "..."
                }
            ],
            "output": "Number"
        },
        {
            "message0": "multishell.getCount",
            "colour": 210,
            "tooltip": "multishell.getCount",
            "helpUrl": "https://tweaked.cc/module/multishell.html",
            "output": "Number"
        },
        {
            "message0": "os.loadAPI",
            "colour": 210,
            "tooltip": "os.loadAPI",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "os.unloadAPI",
            "colour": 210,
            "tooltip": "os.unloadAPI",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "os.pullEvent",
            "colour": 210,
            "tooltip": "os.pullEvent",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "filter: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "filter",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "os.pullEventRaw",
            "colour": 210,
            "tooltip": "os.pullEventRaw",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "filter: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "filter",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "os.sleep",
            "colour": 210,
            "tooltip": "os.sleep",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "time: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "time",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "os.version",
            "colour": 210,
            "tooltip": "os.version",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "output": "String"
        },
        {
            "message0": "os.run",
            "colour": 210,
            "tooltip": "os.run",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "env: table, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "env"
                }
            ],
            "message2": "path: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "message3": "...: any, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "..."
                }
            ],
            "output": "Any"
        },
        {
            "message0": "os.queueEvent",
            "colour": 210,
            "tooltip": "os.queueEvent",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "message2": "...: any, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "..."
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "os.startTimer",
            "colour": 210,
            "tooltip": "os.startTimer",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "timer: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "timer",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "os.cancelTimer",
            "colour": 210,
            "tooltip": "os.cancelTimer",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "token: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "token",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "os.setAlarm",
            "colour": 210,
            "tooltip": "os.setAlarm",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "time: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "time",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "os.cancelAlarm",
            "colour": 210,
            "tooltip": "os.cancelAlarm",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "token: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "token",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "os.getComputerID",
            "colour": 210,
            "tooltip": "os.getComputerID",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "output": "Number"
        },
        {
            "message0": "os.computerID",
            "colour": 210,
            "tooltip": "os.computerID",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "output": "Number"
        },
        {
            "message0": "os.getComputerLabel",
            "colour": 210,
            "tooltip": "os.getComputerLabel",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "output": "String"
        },
        {
            "message0": "os.computerLabel",
            "colour": 210,
            "tooltip": "os.computerLabel",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "output": "String"
        },
        {
            "message0": "os.setComputerLabel",
            "colour": 210,
            "tooltip": "os.setComputerLabel",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "label: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "label",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "os.clock",
            "colour": 210,
            "tooltip": "os.clock",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "output": "Number"
        },
        {
            "message0": "os.time",
            "colour": 210,
            "tooltip": "os.time",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "locale: string | table, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "locale",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "os.day",
            "colour": 210,
            "tooltip": "os.day",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "args: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "args",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "os.epoch",
            "colour": 210,
            "tooltip": "os.epoch",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "args: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "args",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "os.date",
            "colour": 210,
            "tooltip": "os.date",
            "helpUrl": "https://tweaked.cc/module/os.html",
            "message1": "format: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "format",
                    "check": "String"
                }
            ],
            "message2": "time: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "time",
                    "check": "Number"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "paintutils.parseImage",
            "colour": 210,
            "tooltip": "paintutils.parseImage",
            "helpUrl": "https://tweaked.cc/module/paintutils.html",
            "message1": "image: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "image",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "paintutils.loadImage",
            "colour": 210,
            "tooltip": "paintutils.loadImage",
            "helpUrl": "https://tweaked.cc/module/paintutils.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "paintutils.drawPixel",
            "colour": 210,
            "tooltip": "paintutils.drawPixel",
            "helpUrl": "https://tweaked.cc/module/paintutils.html",
            "message1": "xPos: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "xPos",
                    "check": "Number"
                }
            ],
            "message2": "yPos: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "yPos",
                    "check": "Number"
                }
            ],
            "message3": "colour: number, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "paintutils.drawLine",
            "colour": 210,
            "tooltip": "paintutils.drawLine",
            "helpUrl": "https://tweaked.cc/module/paintutils.html",
            "message1": "startX: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "startX",
                    "check": "Number"
                }
            ],
            "message2": "startY: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "startY",
                    "check": "Number"
                }
            ],
            "message3": "endX: number, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "endX",
                    "check": "Number"
                }
            ],
            "message4": "endY: number, %1",
            "args4": [
                {
                    "type": "input_value",
                    "name": "endY",
                    "check": "Number"
                }
            ],
            "message5": "colour: number, %1",
            "args5": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "paintutils.drawBox",
            "colour": 210,
            "tooltip": "paintutils.drawBox",
            "helpUrl": "https://tweaked.cc/module/paintutils.html",
            "message1": "startX: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "startX",
                    "check": "Number"
                }
            ],
            "message2": "startY: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "startY",
                    "check": "Number"
                }
            ],
            "message3": "endX: number, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "endX",
                    "check": "Number"
                }
            ],
            "message4": "endY: number, %1",
            "args4": [
                {
                    "type": "input_value",
                    "name": "endY",
                    "check": "Number"
                }
            ],
            "message5": "colour: number, %1",
            "args5": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "paintutils.drawFilledBox",
            "colour": 210,
            "tooltip": "paintutils.drawFilledBox",
            "helpUrl": "https://tweaked.cc/module/paintutils.html",
            "message1": "startX: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "startX",
                    "check": "Number"
                }
            ],
            "message2": "startY: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "startY",
                    "check": "Number"
                }
            ],
            "message3": "endX: number, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "endX",
                    "check": "Number"
                }
            ],
            "message4": "endY: number, %1",
            "args4": [
                {
                    "type": "input_value",
                    "name": "endY",
                    "check": "Number"
                }
            ],
            "message5": "colour: number, %1",
            "args5": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "paintutils.drawImage",
            "colour": 210,
            "tooltip": "paintutils.drawImage",
            "helpUrl": "https://tweaked.cc/module/paintutils.html",
            "message1": "image: table, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "image"
                }
            ],
            "message2": "xPos: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "xPos",
                    "check": "Number"
                }
            ],
            "message3": "yPos: number, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "yPos",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "parallel.waitForAny",
            "colour": 210,
            "tooltip": "parallel.waitForAny",
            "helpUrl": "https://tweaked.cc/module/parallel.html",
            "message1": "...: function, %1",
            "args1": [
                {
                    "type": "input_statement",
                    "name": "..."
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "parallel.waitForAll",
            "colour": 210,
            "tooltip": "parallel.waitForAll",
            "helpUrl": "https://tweaked.cc/module/parallel.html",
            "message1": "...: function, %1",
            "args1": [
                {
                    "type": "input_statement",
                    "name": "..."
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "peripheral.getNames",
            "colour": 210,
            "tooltip": "peripheral.getNames",
            "helpUrl": "https://tweaked.cc/module/peripheral.html",
            "output": "String"
        },
        {
            "message0": "peripheral.isPresent",
            "colour": 210,
            "tooltip": "peripheral.isPresent",
            "helpUrl": "https://tweaked.cc/module/peripheral.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "peripheral.getType",
            "colour": 210,
            "tooltip": "peripheral.getType",
            "helpUrl": "https://tweaked.cc/module/peripheral.html",
            "message1": "peripheral: string | table, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "peripheral",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "peripheral.hasType",
            "colour": 210,
            "tooltip": "peripheral.hasType",
            "helpUrl": "https://tweaked.cc/module/peripheral.html",
            "message1": "peripheral: string | table, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "peripheral",
                    "check": "String"
                }
            ],
            "message2": "peripheral_type: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "peripheral_type",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "peripheral.getMethods",
            "colour": 210,
            "tooltip": "peripheral.getMethods",
            "helpUrl": "https://tweaked.cc/module/peripheral.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "peripheral.getName",
            "colour": 210,
            "tooltip": "peripheral.getName",
            "helpUrl": "https://tweaked.cc/module/peripheral.html",
            "message1": "peripheral: table, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "peripheral"
                }
            ],
            "output": "String"
        },
        {
            "message0": "peripheral.call",
            "colour": 210,
            "tooltip": "peripheral.call",
            "helpUrl": "https://tweaked.cc/module/peripheral.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "message2": "method: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "method",
                    "check": "String"
                }
            ],
            "message3": "...: any, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "..."
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "peripheral.wrap",
            "colour": 210,
            "tooltip": "peripheral.wrap",
            "helpUrl": "https://tweaked.cc/module/peripheral.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "peripheral.find",
            "colour": 210,
            "tooltip": "peripheral.find",
            "helpUrl": "https://tweaked.cc/module/peripheral.html",
            "message1": "ty: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "ty",
                    "check": "String"
                }
            ],
            "message2": "filter: function(name: string, wrapped: table):boolean, %1",
            "args2": [
                {
                    "type": "input_statement",
                    "name": "filter"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "pocket.equipBack",
            "colour": 210,
            "tooltip": "pocket.equipBack",
            "helpUrl": "https://tweaked.cc/module/pocket.html",
            "output": "String"
        },
        {
            "message0": "pocket.unequipBack",
            "colour": 210,
            "tooltip": "pocket.unequipBack",
            "helpUrl": "https://tweaked.cc/module/pocket.html",
            "output": "String"
        },
        {
            "message0": "rednet.open",
            "colour": 210,
            "tooltip": "rednet.open",
            "helpUrl": "https://tweaked.cc/module/rednet.html",
            "message1": "modem: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "modem",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "rednet.close",
            "colour": 210,
            "tooltip": "rednet.close",
            "helpUrl": "https://tweaked.cc/module/rednet.html",
            "message1": "modem: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "modem",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "rednet.isOpen",
            "colour": 210,
            "tooltip": "rednet.isOpen",
            "helpUrl": "https://tweaked.cc/module/rednet.html",
            "message1": "modem: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "modem",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "rednet.send",
            "colour": 210,
            "tooltip": "rednet.send",
            "helpUrl": "https://tweaked.cc/module/rednet.html",
            "message1": "recipient: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "recipient",
                    "check": "Number"
                }
            ],
            "message2": "message: any, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "message"
                }
            ],
            "message3": "protocol: string, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "protocol",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "rednet.broadcast",
            "colour": 210,
            "tooltip": "rednet.broadcast",
            "helpUrl": "https://tweaked.cc/module/rednet.html",
            "message1": "message: any, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "message"
                }
            ],
            "message2": "protocol: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "protocol",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "rednet.receive",
            "colour": 210,
            "tooltip": "rednet.receive",
            "helpUrl": "https://tweaked.cc/module/rednet.html",
            "message1": "protocol_filter: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "protocol_filter",
                    "check": "String"
                }
            ],
            "message2": "timeout: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "timeout",
                    "check": "Number"
                }
            ],
            "output": "String"
        },
        {
            "message0": "rednet.host",
            "colour": 210,
            "tooltip": "rednet.host",
            "helpUrl": "https://tweaked.cc/module/rednet.html",
            "message1": "protocol: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "protocol",
                    "check": "String"
                }
            ],
            "message2": "hostname: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "hostname",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "rednet.unhost",
            "colour": 210,
            "tooltip": "rednet.unhost",
            "helpUrl": "https://tweaked.cc/module/rednet.html",
            "message1": "protocol: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "protocol",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "rednet.lookup",
            "colour": 210,
            "tooltip": "rednet.lookup",
            "helpUrl": "https://tweaked.cc/module/rednet.html",
            "message1": "protocol: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "protocol",
                    "check": "String"
                }
            ],
            "message2": "hostname: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "hostname",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "redstone.getSides",
            "colour": 210,
            "tooltip": "redstone.getSides",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "output": "String"
        },
        {
            "message0": "redstone.setOutput",
            "colour": 210,
            "tooltip": "redstone.setOutput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "message2": "on: boolean, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "on"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "redstone.getOutput",
            "colour": 210,
            "tooltip": "redstone.getOutput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "redstone.getInput",
            "colour": 210,
            "tooltip": "redstone.getInput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "redstone.setAnalogOutput",
            "colour": 210,
            "tooltip": "redstone.setAnalogOutput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "message2": "value: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "value",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "redstone.setAnalogueOutput",
            "colour": 210,
            "tooltip": "redstone.setAnalogueOutput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "message2": "value: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "value",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "redstone.getAnalogOutput",
            "colour": 210,
            "tooltip": "redstone.getAnalogOutput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "redstone.getAnalogueOutput",
            "colour": 210,
            "tooltip": "redstone.getAnalogueOutput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "redstone.getAnalogInput",
            "colour": 210,
            "tooltip": "redstone.getAnalogInput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "redstone.getAnalogueInput",
            "colour": 210,
            "tooltip": "redstone.getAnalogueInput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "redstone.setBundledOutput",
            "colour": 210,
            "tooltip": "redstone.setBundledOutput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "message2": "output: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "output",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "redstone.getBundledOutput",
            "colour": 210,
            "tooltip": "redstone.getBundledOutput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "redstone.getBundledInput",
            "colour": 210,
            "tooltip": "redstone.getBundledInput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "redstone.testBundledInput",
            "colour": 210,
            "tooltip": "redstone.testBundledInput",
            "helpUrl": "https://tweaked.cc/module/redstone.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "message2": "mask: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "mask",
                    "check": "Number"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "settings.define",
            "colour": 210,
            "tooltip": "settings.define",
            "helpUrl": "https://tweaked.cc/module/settings.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "message2": "options: dict, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "options"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "settings.undefine",
            "colour": 210,
            "tooltip": "settings.undefine",
            "helpUrl": "https://tweaked.cc/module/settings.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "settings.set",
            "colour": 210,
            "tooltip": "settings.set",
            "helpUrl": "https://tweaked.cc/module/settings.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "message2": "value: any, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "value"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "settings.get",
            "colour": 210,
            "tooltip": "settings.get",
            "helpUrl": "https://tweaked.cc/module/settings.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "message2": "default: any, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "default"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "settings.getDetails",
            "colour": 210,
            "tooltip": "settings.getDetails",
            "helpUrl": "https://tweaked.cc/module/settings.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "settings.unset",
            "colour": 210,
            "tooltip": "settings.unset",
            "helpUrl": "https://tweaked.cc/module/settings.html",
            "message1": "name: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "settings.getNames",
            "colour": 210,
            "tooltip": "settings.getNames",
            "helpUrl": "https://tweaked.cc/module/settings.html",
            "output": "String"
        },
        {
            "message0": "settings.load",
            "colour": 210,
            "tooltip": "settings.load",
            "helpUrl": "https://tweaked.cc/module/settings.html",
            "message1": "sPath: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "sPath",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "settings.save",
            "colour": 210,
            "tooltip": "settings.save",
            "helpUrl": "https://tweaked.cc/module/settings.html",
            "message1": "sPath: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "sPath",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "shell.execute",
            "colour": 210,
            "tooltip": "shell.execute",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "command: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "command",
                    "check": "String"
                }
            ],
            "message2": "...: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "...",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "shell.run",
            "colour": 210,
            "tooltip": "shell.run",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "...: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "...",
                    "check": "String"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "shell.dir",
            "colour": 210,
            "tooltip": "shell.dir",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "output": "String"
        },
        {
            "message0": "shell.setDir",
            "colour": 210,
            "tooltip": "shell.setDir",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "dir: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "dir",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "shell.path",
            "colour": 210,
            "tooltip": "shell.path",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "output": "String"
        },
        {
            "message0": "shell.setPath",
            "colour": 210,
            "tooltip": "shell.setPath",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "shell.resolve",
            "colour": 210,
            "tooltip": "shell.resolve",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "path: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "path",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "shell.resolveProgram",
            "colour": 210,
            "tooltip": "shell.resolveProgram",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "command: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "command",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "shell.programs",
            "colour": 210,
            "tooltip": "shell.programs",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "include_hidden: boolean, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "include_hidden"
                }
            ],
            "output": "String"
        },
        {
            "message0": "shell.complete",
            "colour": 210,
            "tooltip": "shell.complete",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "sLine: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "sLine",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "shell.completeProgram",
            "colour": 210,
            "tooltip": "shell.completeProgram",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "program: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "program",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "shell.setCompletionFunction",
            "colour": 210,
            "tooltip": "shell.setCompletionFunction",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "program: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "program",
                    "check": "String"
                }
            ],
            "message2": "complete: dict, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "complete"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "shell.getCompletionInfo",
            "colour": 210,
            "tooltip": "shell.getCompletionInfo",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "output": "String"
        },
        {
            "message0": "shell.getRunningProgram",
            "colour": 210,
            "tooltip": "shell.getRunningProgram",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "output": "String"
        },
        {
            "message0": "shell.setAlias",
            "colour": 210,
            "tooltip": "shell.setAlias",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "command: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "command",
                    "check": "String"
                }
            ],
            "message2": "program: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "program",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "shell.clearAlias",
            "colour": 210,
            "tooltip": "shell.clearAlias",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "command: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "command",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "shell.aliases",
            "colour": 210,
            "tooltip": "shell.aliases",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "output": "String"
        },
        {
            "message0": "shell.openTab",
            "colour": 210,
            "tooltip": "shell.openTab",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "...: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "...",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "shell.switchTab",
            "colour": 210,
            "tooltip": "shell.switchTab",
            "helpUrl": "https://tweaked.cc/module/shell.html",
            "message1": "id: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "id",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.nativePaletteColour",
            "colour": 210,
            "tooltip": "term.nativePaletteColour",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "colour: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "term.nativePaletteColor",
            "colour": 210,
            "tooltip": "term.nativePaletteColor",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "colour: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "term.write",
            "colour": 210,
            "tooltip": "term.write",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "text: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "text",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.scroll",
            "colour": 210,
            "tooltip": "term.scroll",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "y: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "y",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.getCursorPos",
            "colour": 210,
            "tooltip": "term.getCursorPos",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "output": "Number"
        },
        {
            "message0": "term.setCursorPos",
            "colour": 210,
            "tooltip": "term.setCursorPos",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "x: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "x",
                    "check": "Number"
                }
            ],
            "message2": "y: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "y",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.getCursorBlink",
            "colour": 210,
            "tooltip": "term.getCursorBlink",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "output": "Any"
        },
        {
            "message0": "term.setCursorBlink",
            "colour": 210,
            "tooltip": "term.setCursorBlink",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "blink: boolean, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "blink"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.getSize",
            "colour": 210,
            "tooltip": "term.getSize",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "output": "Number"
        },
        {
            "message0": "term.getTextColour",
            "colour": 210,
            "tooltip": "term.getTextColour",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "output": "Number"
        },
        {
            "message0": "term.getTextColor",
            "colour": 210,
            "tooltip": "term.getTextColor",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "output": "Number"
        },
        {
            "message0": "term.setTextColour",
            "colour": 210,
            "tooltip": "term.setTextColour",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "colour: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.setTextColor",
            "colour": 210,
            "tooltip": "term.setTextColor",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "colour: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.getBackgroundColour",
            "colour": 210,
            "tooltip": "term.getBackgroundColour",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "output": "Number"
        },
        {
            "message0": "term.getBackgroundColor",
            "colour": 210,
            "tooltip": "term.getBackgroundColor",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "output": "Number"
        },
        {
            "message0": "term.setBackgroundColour",
            "colour": 210,
            "tooltip": "term.setBackgroundColour",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "colour: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.setBackgroundColor",
            "colour": 210,
            "tooltip": "term.setBackgroundColor",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "colour: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.isColour",
            "colour": 210,
            "tooltip": "term.isColour",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "output": "Any"
        },
        {
            "message0": "term.isColor",
            "colour": 210,
            "tooltip": "term.isColor",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "output": "Any"
        },
        {
            "message0": "term.blit",
            "colour": 210,
            "tooltip": "term.blit",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "text: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "text",
                    "check": "String"
                }
            ],
            "message2": "textColour: string, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "textColour",
                    "check": "String"
                }
            ],
            "message3": "backgroundColour: string, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "backgroundColour",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.setPaletteColour",
            "colour": 210,
            "tooltip": "term.setPaletteColour",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "index: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "index",
                    "check": "Number"
                }
            ],
            "message2": "colour: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.setPaletteColor",
            "colour": 210,
            "tooltip": "term.setPaletteColor",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "index: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "index",
                    "check": "Number"
                }
            ],
            "message2": "colour: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "term.getPaletteColour",
            "colour": 210,
            "tooltip": "term.getPaletteColour",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "colour: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "term.getPaletteColor",
            "colour": 210,
            "tooltip": "term.getPaletteColor",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "colour: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "colour",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "term.redirect",
            "colour": 210,
            "tooltip": "term.redirect",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "message1": "target: Redirect, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "target"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "term.current",
            "colour": 210,
            "tooltip": "term.current",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "output": "Any"
        },
        {
            "message0": "term.native",
            "colour": 210,
            "tooltip": "term.native",
            "helpUrl": "https://tweaked.cc/module/term.html",
            "output": "Any"
        },
        {
            "message0": "textutils.slowWrite",
            "colour": 210,
            "tooltip": "textutils.slowWrite",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "text: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "text",
                    "check": "String"
                }
            ],
            "message2": "rate: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "rate",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "textutils.slowPrint",
            "colour": 210,
            "tooltip": "textutils.slowPrint",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "sText: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "sText",
                    "check": "String"
                }
            ],
            "message2": "nRate: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "nRate",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "textutils.formatTime",
            "colour": 210,
            "tooltip": "textutils.formatTime",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "nTime: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "nTime",
                    "check": "Number"
                }
            ],
            "message2": "bTwentyFourHour: boolean, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "bTwentyFourHour"
                }
            ],
            "output": "String"
        },
        {
            "message0": "textutils.pagedPrint",
            "colour": 210,
            "tooltip": "textutils.pagedPrint",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "text: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "text",
                    "check": "String"
                }
            ],
            "message2": "free_lines: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "free_lines",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "textutils.tabulate",
            "colour": 210,
            "tooltip": "textutils.tabulate",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "...: dict, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "..."
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "textutils.pagedTabulate",
            "colour": 210,
            "tooltip": "textutils.pagedTabulate",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "...: dict, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "..."
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "textutils.serialize",
            "colour": 210,
            "tooltip": "textutils.serialize",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "t: any, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "t"
                }
            ],
            "message2": "opt: dict, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "opt"
                }
            ],
            "output": "String"
        },
        {
            "message0": "textutils.serialise",
            "colour": 210,
            "tooltip": "textutils.serialise",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "t: any, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "t"
                }
            ],
            "message2": "opt: dict, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "opt"
                }
            ],
            "output": "String"
        },
        {
            "message0": "textutils.unserialize",
            "colour": 210,
            "tooltip": "textutils.unserialize",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "s: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "s",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "textutils.unserialise",
            "colour": 210,
            "tooltip": "textutils.unserialise",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "s: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "s",
                    "check": "String"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "textutils.serializeJSON",
            "colour": 210,
            "tooltip": "textutils.serializeJSON",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "t: any, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "t"
                }
            ],
            "message2": "options: dict, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "options"
                }
            ],
            "output": "String"
        },
        {
            "message0": "textutils.serialiseJSON",
            "colour": 210,
            "tooltip": "textutils.serialiseJSON",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "t: any, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "t"
                }
            ],
            "message2": "options: dict, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "options"
                }
            ],
            "output": "String"
        },
        {
            "message0": "textutils.unserializeJSON",
            "colour": 210,
            "tooltip": "textutils.unserializeJSON",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "s: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "s",
                    "check": "String"
                }
            ],
            "message2": "options: dict, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "options"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "textutils.unserialiseJSON",
            "colour": 210,
            "tooltip": "textutils.unserialiseJSON",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "s: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "s",
                    "check": "String"
                }
            ],
            "message2": "options: dict, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "options"
                }
            ],
            "previousStatement": null,
            "nextStatement": null
        },
        {
            "message0": "textutils.urlEncode",
            "colour": 210,
            "tooltip": "textutils.urlEncode",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "str: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "str",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "textutils.complete",
            "colour": 210,
            "tooltip": "textutils.complete",
            "helpUrl": "https://tweaked.cc/module/textutils.html",
            "message1": "sSearchText: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "sSearchText",
                    "check": "String"
                }
            ],
            "message2": "tSearchTable: table, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "tSearchTable"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.craft",
            "colour": 210,
            "tooltip": "turtle.craft",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "limit: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "limit",
                    "check": "Number"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "turtle.forward",
            "colour": 210,
            "tooltip": "turtle.forward",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "String"
        },
        {
            "message0": "turtle.back",
            "colour": 210,
            "tooltip": "turtle.back",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "String"
        },
        {
            "message0": "turtle.up",
            "colour": 210,
            "tooltip": "turtle.up",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "String"
        },
        {
            "message0": "turtle.down",
            "colour": 210,
            "tooltip": "turtle.down",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "String"
        },
        {
            "message0": "turtle.turnLeft",
            "colour": 210,
            "tooltip": "turtle.turnLeft",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "String"
        },
        {
            "message0": "turtle.turnRight",
            "colour": 210,
            "tooltip": "turtle.turnRight",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "String"
        },
        {
            "message0": "turtle.dig",
            "colour": 210,
            "tooltip": "turtle.dig",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.digUp",
            "colour": 210,
            "tooltip": "turtle.digUp",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.digDown",
            "colour": 210,
            "tooltip": "turtle.digDown",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.place",
            "colour": 210,
            "tooltip": "turtle.place",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "text: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "text",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.placeUp",
            "colour": 210,
            "tooltip": "turtle.placeUp",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "text: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "text",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.placeDown",
            "colour": 210,
            "tooltip": "turtle.placeDown",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "text: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "text",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.drop",
            "colour": 210,
            "tooltip": "turtle.drop",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "count: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "count",
                    "check": "Number"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.dropUp",
            "colour": 210,
            "tooltip": "turtle.dropUp",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "count: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "count",
                    "check": "Number"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.dropDown",
            "colour": 210,
            "tooltip": "turtle.dropDown",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "count: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "count",
                    "check": "Number"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.select",
            "colour": 210,
            "tooltip": "turtle.select",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "slot: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "slot",
                    "check": "Number"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "turtle.getItemCount",
            "colour": 210,
            "tooltip": "turtle.getItemCount",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "slot: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "slot",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "turtle.getItemSpace",
            "colour": 210,
            "tooltip": "turtle.getItemSpace",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "slot: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "slot",
                    "check": "Number"
                }
            ],
            "output": "Number"
        },
        {
            "message0": "turtle.detect",
            "colour": 210,
            "tooltip": "turtle.detect",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "Any"
        },
        {
            "message0": "turtle.detectUp",
            "colour": 210,
            "tooltip": "turtle.detectUp",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "Any"
        },
        {
            "message0": "turtle.detectDown",
            "colour": 210,
            "tooltip": "turtle.detectDown",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "Any"
        },
        {
            "message0": "turtle.compare",
            "colour": 210,
            "tooltip": "turtle.compare",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "Any"
        },
        {
            "message0": "turtle.compareUp",
            "colour": 210,
            "tooltip": "turtle.compareUp",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "Any"
        },
        {
            "message0": "turtle.compareDown",
            "colour": 210,
            "tooltip": "turtle.compareDown",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "Any"
        },
        {
            "message0": "turtle.attack",
            "colour": 210,
            "tooltip": "turtle.attack",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.attackUp",
            "colour": 210,
            "tooltip": "turtle.attackUp",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.attackDown",
            "colour": 210,
            "tooltip": "turtle.attackDown",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "side: string, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "side",
                    "check": "String"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.suck",
            "colour": 210,
            "tooltip": "turtle.suck",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "count: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "count",
                    "check": "Number"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.suckUp",
            "colour": 210,
            "tooltip": "turtle.suckUp",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "count: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "count",
                    "check": "Number"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.suckDown",
            "colour": 210,
            "tooltip": "turtle.suckDown",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "count: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "count",
                    "check": "Number"
                }
            ],
            "output": "String"
        },
        {
            "message0": "turtle.getFuelLevel",
            "colour": 210,
            "tooltip": "turtle.getFuelLevel",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "Number"
        },
        {
            "message0": "turtle.refuel",
            "colour": 210,
            "tooltip": "turtle.refuel",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "count: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "count",
                    "check": "Number"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "turtle.compareTo",
            "colour": 210,
            "tooltip": "turtle.compareTo",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "slot: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "slot",
                    "check": "Number"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "turtle.transferTo",
            "colour": 210,
            "tooltip": "turtle.transferTo",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "slot: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "slot",
                    "check": "Number"
                }
            ],
            "message2": "count: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "count",
                    "check": "Number"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "turtle.getSelectedSlot",
            "colour": 210,
            "tooltip": "turtle.getSelectedSlot",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "Number"
        },
        {
            "message0": "turtle.getFuelLimit",
            "colour": 210,
            "tooltip": "turtle.getFuelLimit",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "Number"
        },
        {
            "message0": "turtle.equipLeft",
            "colour": 210,
            "tooltip": "turtle.equipLeft",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "Any"
        },
        {
            "message0": "turtle.equipRight",
            "colour": 210,
            "tooltip": "turtle.equipRight",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "Any"
        },
        {
            "message0": "turtle.inspect",
            "colour": 210,
            "tooltip": "turtle.inspect",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "String"
        },
        {
            "message0": "turtle.inspectUp",
            "colour": 210,
            "tooltip": "turtle.inspectUp",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "String"
        },
        {
            "message0": "turtle.inspectDown",
            "colour": 210,
            "tooltip": "turtle.inspectDown",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "output": "String"
        },
        {
            "message0": "turtle.getItemDetail",
            "colour": 210,
            "tooltip": "turtle.getItemDetail",
            "helpUrl": "https://tweaked.cc/module/turtle.html",
            "message1": "slot: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "slot",
                    "check": "Number"
                }
            ],
            "message2": "detailed: boolean, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "detailed"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "vector.new",
            "colour": 210,
            "tooltip": "vector.new",
            "helpUrl": "https://tweaked.cc/module/vector.html",
            "message1": "x: number, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "x",
                    "check": "Number"
                }
            ],
            "message2": "y: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "y",
                    "check": "Number"
                }
            ],
            "message3": "z: number, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "z",
                    "check": "Number"
                }
            ],
            "output": "Any"
        },
        {
            "message0": "window.create",
            "colour": 210,
            "tooltip": "window.create",
            "helpUrl": "https://tweaked.cc/module/window.html",
            "message1": "parent: term.Redirect, %1",
            "args1": [
                {
                    "type": "input_value",
                    "name": "parent"
                }
            ],
            "message2": "nX: number, %1",
            "args2": [
                {
                    "type": "input_value",
                    "name": "nX",
                    "check": "Number"
                }
            ],
            "message3": "nY: number, %1",
            "args3": [
                {
                    "type": "input_value",
                    "name": "nY",
                    "check": "Number"
                }
            ],
            "message4": "nWidth: number, %1",
            "args4": [
                {
                    "type": "input_value",
                    "name": "nWidth",
                    "check": "Number"
                }
            ],
            "message5": "nHeight: number, %1",
            "args5": [
                {
                    "type": "input_value",
                    "name": "nHeight",
                    "check": "Number"
                }
            ],
            "message6": "bStartVisible: boolean, %1",
            "args6": [
                {
                    "type": "input_value",
                    "name": "bStartVisible"
                }
            ],
            "output": "Any"
        }
    ],
    "Modules": [],
    "Peripherals": [],
    "Generic Peripherals": [],
    "Events": [],
    "Guides": [],
    "Reference": []
}