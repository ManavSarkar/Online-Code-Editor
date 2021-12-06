var prog_lang = document.getElementById("editor_panel").className;
if (prog_lang === "c" || prog_lang === "cpp") {
  prog_lang = "c_cpp";
}
var editor = ace.edit("code_editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/" + prog_lang);
editor.setOptions({
  autoScrollEditorIntoView: true,
  copyWithEmptySelection: true,
  highlightSelectedWord: true,
  highlightActiveLine: true,
  cursorStyle: "slim",
  fontSize: "12pt",
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,

  enableSnippets: true,
});
var stdin = ace.edit("stdin");
stdin.setTheme("ace/theme/monokai");
stdin.setOptions({
  autoScrollEditorIntoView: true,
  copyWithEmptySelection: true,
  highlightSelectedWord: true,
  highlightActiveLine: true,
  cursorStyle: "slim",
  fontSize: "12pt",
});
var stdout = ace.edit("stdout");
stdout.setTheme("ace/theme/monokai");
stdout.setOptions({
  autoScrollEditorIntoView: true,
  copyWithEmptySelection: true,
  highlightSelectedWord: true,
  highlightActiveLine: true,
  cursorStyle: "slim",
  fontSize: "16pt",
  readOnly: true,
});

console.log();
