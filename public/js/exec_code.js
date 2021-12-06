var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("wewr", document.getElementById("run_btn").className);

  var prog_lang = document.getElementById("editor_panel").className;

  var editor_text = ace.edit("code_editor").getValue();
  var stdin = ace.edit("stdin").getValue();
  var program = { script: editor_text, stdin: stdin };
  fetch("/code_compiler/exec/" + prog_lang, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(program),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      printOutput(response);
    });
});
function printOutput(res) {
  var output = ace.edit("stdout");
  console.log(res);
  output.setValue(res.output);
}
