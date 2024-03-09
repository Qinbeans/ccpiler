'use client'

import { BlocklyWorkspace } from "react-blockly"
import { useState } from "react"
import { luaGenerator } from "blockly/lua"
import Blockly from "blockly"
import DarkTheme from "@blockly/theme-dark"
import '../custom_blocks'
import { TOOLBOX_CONFIG } from "../consts"

export default function Workspace() {
    const [xml, setXml] = useState("")
    const [lua, setLua] = useState("")
    
    const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';
    
    const wsChange = (workspace: Blockly.WorkspaceSvg) => {
        const code = luaGenerator.workspaceToCode(workspace)
        setLua(code)
    }
    
    return (
        <div className="h-[98%] mt-3 text-black">
        <BlocklyWorkspace
        className="w-full h-[58%]"
        toolboxConfiguration={TOOLBOX_CONFIG}
        workspaceConfiguration={{
            theme: DarkTheme,
        }}
        initialXml={initialXml}
        onXmlChange={setXml}
        onWorkspaceChange={wsChange}
        />
        <textarea className="w-full h-[40%] mt-3 bg-white/15 text-white p-2 rounded-md resize-none" value={lua} readOnly />
        </div>
        );
    }