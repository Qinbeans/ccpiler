import Blockly from 'blockly'
import { FUNCTIONS, TOOLBOX_CONFIG } from './consts'
import { Order, luaGenerator } from 'blockly/lua'
import { Category } from './types';

luaGenerator.forBlock["create_list"] = function(block: any, generator: any) {
    const list = generator.statementToCode(block, 'LIST')
    return ["{"+list+"}", Order.ATOMIC]
}

luaGenerator.forBlock['pair'] = function(block: any, generator: any) {
    const value = generator.valueToCode(
        block, 'VALUE', Order.ATOMIC)
    const key = generator.valueToCode(
        block, 'KEY', Order.ATOMIC)
    const code = `[${key}] = ${value}`
    return code
}

luaGenerator.forBlock['get'] = function(block: any, generator: any) {
    const list = generator.valueToCode(
        block, 'LIST', Order.ATOMIC)
    const index = generator.valueToCode(
        block, 'INDEX', Order.ATOMIC)
    return [`${list}[${index}]`, Order.ATOMIC]
}

const createListJson = {
    "type": "create_list",
    "message0": "create list %1",
    "args0": [
        {
            "type": "input_statement",
            "name": "LIST"
        }
    ],
    "output": "Array",
    "colour": 230
}

const pairJson = {
    "type": "pair",
    "message0": "pair %1 %2",
    "args0": [
        {
            "type": "input_value",
            "name": "KEY"
        },
        {
            "type": "input_value",
            "name": "VALUE"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
}

const getJson = {
    "type": "get",
    "message0": "get %1 %2",
    "args0": [
        {
            "type": "input_value",
            "name": "LIST",
            "check": "Array"
        },
        {
            "type": "input_value",
            "name": "INDEX",
            "check": ["String", "Number"]
        }
    ],
    "output": null,
    "colour": 230
}

Blockly.Blocks['create_list'] = {
    init: function() {
        this.jsonInit(createListJson)
    }
}

Blockly.Blocks['pair'] = {
    init: function() {
        this.jsonInit(pairJson)
    }
}

Blockly.Blocks['get'] = {
    init: function() {
        this.jsonInit(getJson)
    }
}

TOOLBOX_CONFIG.contents.push({
    "kind": "category",
    "name": "Lists",
    "colour": '%{BKY_LISTS_HUE}',
    "contents": [
        {"kind": "block", "type": "create_list"},
        {"kind": "block", "type": "pair"},
        {"kind": "block", "type": "get"}
    ]
})

// FUNCTIONS is of type { [key: string]: any }
for (const categoryKey in FUNCTIONS) {
    let lastColor = 0
    const majorCategory = FUNCTIONS[categoryKey]
    const libraries = []
    for (const library in majorCategory) {
        const libraryData = FUNCTIONS[categoryKey][library]
        const blocks = []
        if (libraryData.length == 0) continue
        for (const blockData of libraryData) {
            if (!blockData) continue
            Blockly.Blocks[blockData.tooltip] = {
                init: function() {
                    try {
                        this.jsonInit(blockData)
                    } catch (e) {
                        console.error(e, blockData)
                    }
                }
            }
            luaGenerator.forBlock[blockData.tooltip] = function(block: any, generator: any) {
                const name = blockData.tooltip
                let code = name+"("
                let args = 0
                for (const el in blockData) {
                    if (el.search("arg") == -1) continue
                    const arg = blockData[el][0]
                    if (arg.type == "input_statement") {
                        const value = generator.statementToCode(block, arg.name)
                        // lambda function
                        code += "(function()\n"+value+"end), "
                        continue
                    }
                    const value = generator.valueToCode(block, arg.name, generator.ORDER_NONE)
                    code += value+", "
                    args++
                }
                if (args > 0)
                    code = code.slice(0, -2)
                code += ")"
                // if ouput is Array, then wrap in {}
                if (blockData.output == "Array") {
                    return ["{"+code+"}", Order.ATOMIC]
                }
                if (blockData.output) {
                    return [code, Order.ATOMIC]
                }
                return code
            }
            blocks.push({"kind": "block", "type": blockData.tooltip})
            lastColor = blockData.colour
        }
        libraries.push({
            "kind": "category",
            "name": library,
            "colour": lastColor,
            "contents": blocks
        })
    }
    if (libraries.length == 0) continue
    TOOLBOX_CONFIG.contents.push({
        "kind": "category",
        "name": categoryKey,
        "contents": libraries,
        "colour": lastColor
    })
}