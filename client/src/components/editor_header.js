import React from 'react'

const EditorHeader = ({
  options,
  selectedProgrammingLanguage,
  setSelectedProgrammingLanguage,
  fontSize,
  setFontSize,
  fontSizeOptions,
  compileCode,
}) => {
  return (
    <div class="header">
      <span className="title">Code Editor</span>
      {/* dropdown to select programming language */}
      <select
        className="btn dropdown"
        value={selectedProgrammingLanguage}
        onChange={(e) => setSelectedProgrammingLanguage(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={index}>
            {option}
          </option>
        ))}
      </select>

      {/* dropdown to select font size */}
      <select
        className="btn dropdown"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      >
        {fontSizeOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button id="runBtn" onClick={compileCode}>
        Run
      </button>
    </div>
  )
}

export default EditorHeader
