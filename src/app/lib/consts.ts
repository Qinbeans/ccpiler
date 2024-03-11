import { PageInfo, ToolBoxConfig } from './types';
import blockly_json from './blockly.json' assert { type: 'json' };
import { assert } from 'console';

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

export const FUNCTIONS: any = blockly_json