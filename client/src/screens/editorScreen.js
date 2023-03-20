import React, { useState } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-dart'

import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'
import EditorHeader from '../components/editor_header'
const EditorScreen = () => {
  function onChange(newValue) {
    console.log('change', newValue)
  }

  const [programValue, setProgramValue] = useState("print('Hello World')")
  const [outputValue, setOutputValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const fontSizeOptions = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
  const [fontSize, setFontSize] = useState(14)

  const options = ['java', 'python', 'javascript', 'c_cpp', 'dart']
  const [
    selectedProgrammingLanguage,
    setSelectedProgrammingLanguage,
  ] = useState(0)

  const compileCode = () => {
    let program = programValue
    console.log(program.substring(2))
    fetch('/code_compiler/exec/' + options[selectedProgrammingLanguage], {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ script: programValue, stdin: inputValue }),
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
        setOutputValue(response.output)
      })
  }

  return (
    <div id="">
      <EditorHeader
        options={options}
        selectedProgrammingLanguage={selectedProgrammingLanguage}
        setSelectedProgrammingLanguage={setSelectedProgrammingLanguage}
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontSizeOptions={fontSizeOptions}
        compileCode={compileCode}
      />
      <AceEditor
        mode={options[selectedProgrammingLanguage]}
        theme="monokai"
        onChange={(newValue) => setProgramValue(newValue)}
        name="editor"
        value={programValue}
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="60vh"
        fontSize={fontSize.toString() + 'px'}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
      />

      <div
        style={{
          height: '30vh',
          width: '100%',
        }}
      >
        <div
          className=""
          style={{
            height: '5vh',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <span className="title btn">Input</span>
          <span className="title btn">Output</span>
        </div>
        <div id="other">
          <AceEditor
            className="otherCont"
            theme="monokai"
            editorProps={{ $blockScrolling: true }}
            height="25vh"
            width="50%"
            fontSize={fontSize.toString() + 'px'}
            name="input"
            value={inputValue}
            onChange={(newValue) => setInputValue(newValue)}
          />
          <AceEditor
            className="otherCont"
            highlightActiveLine={false}
            showGutter={false}
            theme="monokai"
            editorProps={{ $blockScrolling: true }}
            height="25vh"
            width="50%"
            readOnly={true}
            fontSize={fontSize.toString() + 'px'}
            name="output"
            value={outputValue}
          />
        </div>
      </div>
    </div>
  )
}

export default EditorScreen
