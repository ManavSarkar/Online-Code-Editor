async function executecode() {
  var editor = ace.edit("code_editor");
  var stdin = ace.edit("stdin");
  var prog_lang = document.getElementById("editor_panel").className;
  console.log(JSON.stringify("print('dasdas')"));

  var url = "https://api.jdoodle.com/v1/credit-spent";
  var program = {
    clientId: "a87a4b386a0a989304753a4f85369c8e",
    clientSecret:
      "2a7c69ce979a19c5c99875abb9e869fef97dff3f8cbd3bff767abc8bd6aa7e6b",
  };
  fetch(url, {
    method: "post",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
