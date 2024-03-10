import Blocky from 'blockly'
import { FUNCTIONS, TOOLBOX_CONFIG } from './consts'
import { Order, luaGenerator } from 'blockly/lua'

luaGenerator.forBlock['dictionary'] = function(block: any, generator: any) {
    const statementMembers = generator.statementToCode(block, 'ITEMS');
    const code = '{\n' + statementMembers + '\n}';
    return [code, Order.ATOMIC];
}

Blocky.Blocks['dictionary'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Dictionary")
        this.appendStatementInput("ITEMS")
            .setCheck(null)
            .appendField("Items")
        this.setColour(160)
        this.setTooltip("")
        this.setHelpUrl("")
        this.setOutput(true, null)
    }
}

luaGenerator['dictionary_member'] = function(block: any, generator: any) {
    const name = generator.valueToCode(
        block, 'MEMBER_NAME', Order.ATOMIC);
    const value = generator.valueToCode(
        block, 'MEMBER_VALUE', Order.ATOMIC);
    const code = `[${name}] : ${value}`;
    return code;
};

Blocky.Blocks['dictionary_member'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Member")
        this.appendValueInput("MEMBER_NAME")
            .setCheck(null)
            .appendField("Name")
        this.appendValueInput("MEMBER_VALUE")
            .setCheck(null)
            .appendField("Value")
        this.setInputsInline(true)
        this.setPreviousStatement(true, null)
        this.setNextStatement(true, null)
        this.setColour(160)
        this.setTooltip("")
        this.setHelpUrl("")
    }
}

TOOLBOX_CONFIG.contents.push({
    "kind": "category",
    "name": "Dictionary",
    "contents": [
        {"kind": "block", "type": "dictionary"},
        {"kind": "block", "type": "dictionary_member"}
    ],
    "colour": 160
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
            Blocky.Blocks[blockData.tooltip] = {
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