$(document).ready(function() {
    $(document).on('submit', '#prog_lang', function() {
      // do your things
      return false;
     });
});


var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
    highlightSelectedWord: true,
    highlightActiveLine: true,
    cursorStyle: "slim",
    fontSize: '16pt',
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
});
var stdin = ace.edit("stdin");
stdin.setTheme("ace/theme/monokai");
stdin.setOptions({
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
    highlightSelectedWord: true,
    highlightActiveLine: true,
    cursorStyle: "slim",
    fontSize: '12pt',
});
var stdout = ace.edit("stdout");
stdout.setTheme("ace/theme/monokai");
stdout.setOptions({
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
    highlightSelectedWord: true,
    highlightActiveLine: true,
    cursorStyle: "slim",
    fontSize: '12pt',

});
function reloadEditor(){
    var prog_lang  = document.getElementById("prog_lang").lang.value;
    editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/"+prog_lang);
editor.setOptions({
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
    highlightSelectedWord: true,
    highlightActiveLine: true,
    cursorStyle: "slim",
    fontSize: '16pt',
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
});
}