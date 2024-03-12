import Blockly, { Block, CodeGenerator, inputTypes } from 'blockly'
import { FUNCTIONS, TOOLBOX_CONFIG } from './consts'
import { Order, luaGenerator } from 'blockly/lua'

luaGenerator.forBlock["create_table"] = function(block: Block, generator: CodeGenerator) {
    let list = ""
    if (block.inputList.length == 0) return ["{}", Order.ATOMIC]
    for (let i = 0; i < block.inputList.length; i++) {
        const input = block.inputList[i]
        if (!input.name.includes("ADD")) continue
        const value = generator.valueToCode(
            block, input.name, Order.ATOMIC)
        if (value == "") continue
        list += value+", "
    }
    list = list.slice(0, -2)
    return ["{"+list+"}", Order.ATOMIC]
}

luaGenerator.forBlock['insert_pair'] = function(block: Block, generator: CodeGenerator) {
    const value = generator.valueToCode(
        block, 'VALUE', Order.ATOMIC)
    const key = generator.valueToCode(
        block, 'KEY', Order.ATOMIC)
    const code = `[${key}] = ${value}`
    return [code, Order.ATOMIC]
}

luaGenerator.forBlock['get'] = function(block: Block, generator: CodeGenerator) {
    const list = generator.valueToCode(
        block, 'LIST', Order.ATOMIC)
    const index = generator.valueToCode(
        block, 'INDEX', Order.ATOMIC)
    return [`${list}[${index}]`, Order.ATOMIC]
}

luaGenerator.forBlock['length'] = function(block: Block, generator: CodeGenerator) {
    const list = generator.valueToCode(
        block, 'LIST', Order.ATOMIC)
    return [`#${list}`, Order.ATOMIC]
}

luaGenerator.forBlock['length_pair'] = function(block: Block, generator: CodeGenerator) {
    const list = generator.valueToCode(
        block, 'LIST', Order.ATOMIC)
    return [`(function() local count = 0 for _ in pairs(${list}) do count = count + 1 end return count end)()`, Order.ATOMIC]
}

luaGenerator.forBlock['for_pairs'] = function(block: Block, generator: CodeGenerator) {
    const list = generator.valueToCode(
        block, 'LIST', Order.ATOMIC)
    const key = generator.getVariableName(block.getFieldValue('KEY'))
    const value = generator.getVariableName(block.getFieldValue('VALUE'))
    const innerCode = generator.statementToCode(block, 'DO')
    const code = `for ${key}, ${value} in pairs(${list}) do\n${innerCode}end\n`
    return code
}

// dynamically add input_values to the create_table block every time a new input is added
const createTableJson = {
    "type": "create_table",
    "message0": "create table %1",
    "args0": [
        {
            "type": "input_value",
            "name": "ADD0"
        }
    ],
    "output": "Array",
    "colour": 230
}

const insertPairJson = {
    "type": "insert_pair",
    "message0": "insert pair",
    "message1": "key:%1 value:%2",
    "args1": [
        {
            "type": "input_value",
            "name": "KEY"
        },
        {
            "type": "input_value",
            "name": "VALUE"
        }
    ],
    "output": "",
    "inputsInline": true,
    "colour": 230
}

const getJson = {
    "type": "get",
    "message0": "get %2 from %1",
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
    "inputsInline": true,
    "output": null,
    "colour": 230
}

const lengthJson = {
    "type": "length",
    "message0": "length %1",
    "args0": [
        {
            "type": "input_value",
            "name": "LIST",
            "check": "Array"
        }
    ],
    "output": "Number",
    "colour": 230
}

const lengthPairJson = {
    "type": "length_pair",
    "message0": "length pair %1",
    "args0": [
        {
            "type": "input_value",
            "name": "LIST",
            "check": "Array"
        }
    ],
    "output": "Number",
    "colour": 230
}

const forPairsJson = {
    "type": "for_pairs",
    "message0": "for (key: %1, value: %2) in %3",
    "args0": [{
            "type": "field_variable",
            "name": "KEY",
            "variable": "key"
        },
        {
            "type": "field_variable",
            "name": "VALUE",
            "variable": "value"
        },
        {
            "type": "input_value",
            "name": "LIST",
            "check": "Array"
        }
    ],
    // inner blocks
    "message1": "do %1",
    "args1": [{
        "type": "input_statement",
        "name": "DO"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
}

Blockly.Blocks['create_table'] = {
    init: function() {
        this.jsonInit(createTableJson);
    },
    saveExtraState: function() {
        this.itemCount_ = this.inputList.length
        if (this.childBlocks_.length == this.itemCount_) {
            // increase the count of inputs
            this.appendValueInput('ADD'+this.itemCount_)
        } else if (this.childBlocks_.length + 2 == this.itemCount_) {
            // 2 extra inputs means one must be removed
            this.removeInput('ADD'+(this.itemCount_-1))
        }
    },
}

Blockly.Blocks['create_table_container'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Items");
        this.appendStatementInput('STACK')
            .setCheck('create_table_item');
        this.setColour(230);
        this.setTooltip("Add items to the table.");
    }
};

Blockly.Blocks['create_table_item'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Item");
        this.setPreviousStatement(true, 'create_table_item');
        this.setNextStatement(true, 'create_table_item');
        this.setColour(230);
        this.setTooltip("Represents a single item in the table.");
    }
};

Blockly.Blocks['insert_pair'] = {
    init: function() {
        this.jsonInit(insertPairJson)
    }
}

Blockly.Blocks['get'] = {
    init: function() {
        this.jsonInit(getJson)
    }
}

Blockly.Blocks['length'] = {
    init: function() {
        this.jsonInit(lengthJson)
    }
}

Blockly.Blocks['length_pair'] = {
    init: function() {
        this.jsonInit(lengthPairJson)
    }
}

Blockly.Blocks['for_pairs'] = {
    init: function() {
        this.jsonInit(forPairsJson)
    }
}

TOOLBOX_CONFIG.contents.push({
    "kind": "category",
    "name": "Tables",
    "colour": '%{BKY_LISTS_HUE}',
    "contents": [
        {"kind": "block", "type": "create_table"},
        {"kind": "block", "type": "insert_pair"},
        {"kind": "block", "type": "get"},
        {"kind": "block", "type": "length"},
        {"kind": "block", "type": "length_pair"},
        {"kind": "block", "type": "for_pairs"}
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
                },
                saveExtraState: function() {
                    this.multiCount_ = 0
                    this.childCount_ = 0
                    for (const input of this.inputList) {
                        const arg = input.name
                        if (arg.slice(0,3) == "...") {
                            this.multiCount_++
                            if (input.connection.targetConnection) {
                                this.childCount_++
                            }
                            continue
                        }
                        // if block is present
                    }
                    for (const input of this.inputList) {
                        if (input.name == "...") {
                            if (this.childCount_ == this.multiCount_) {
                                // increase the count of inputs
                                this.appendValueInput('...'+this.childCount_)
                            } else if (this.childCount_ + 2 == this.multiCount_) {
                                this.removeInput('...'+(this.childCount_-1))
                            }
                        
                        }
                    }
                },
                onchange: function() {
                    for (const input of this.inputList) {
                        if (input.connection && input.connection.targetConnection) {
                            for (const field of input.fieldRow) {
                                if (field.name) {
                                    if (Blockly.getMainWorkspace().getVariable(field.name, field.variableType)) {
                                        continue
                                    }
                                    Blockly.getMainWorkspace().createVariable(field.name, field.variableType)
                                }
                            }
                        } 
                    }
                },
                onDestroy: function() {
                    for (const input of this.inputList) {
                        for (const field of input.fieldRow) {
                            if (field.name) {
                                Blockly.getMainWorkspace().deleteVariableById(field.id_)
                            }
                        }
                    }
                }
            }
            luaGenerator.forBlock[blockData.tooltip] = function(block: Block, generator: CodeGenerator) {
                const name = blockData.tooltip
                let code = name+"("
                for (let i = 0; i < block.inputList.length; i++) {
                    const input = block.inputList[i]
                    //check if input is input_statement
                    if (input.type == inputTypes.STATEMENT) {
                        // get fields in input
                        let fields = ""
                        for (const field of input.fieldRow) {
                            if (field.name) {
                                fields += field.name + ", "
                            }
                        }
                        fields = fields.slice(0, -2)
                        const value = generator.statementToCode(block, input.name)
                        code += `(function(${fields})\n${value}end), `
                        continue
                    } else if (input.type == inputTypes.DUMMY) {
                        continue
                    }
                    const value = generator.valueToCode(block, input.name, Order.NONE)
                    code += value+", "
                }
                while(code.slice(-2) == ", ") code = code.slice(0, -2)
                code += ")"
                // if blockData contains "$tablize", then we need to wrap the code in a table
                if (blockData["$tablize"]) {
                    return ["{"+code+"}", Order.ATOMIC]
                }
                if (blockData.output) {
                    return [code, Order.ATOMIC]
                }
                return code+"\n"
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