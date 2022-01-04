// eventlisteners voor buttons
document.getElementById("tiddler-creatie").addEventListener("click", maakOutput);
document.getElementById("maak-leeg").addEventListener("click", clearForms);

function maakOutput () {

  let url = document.getElementById('input-url').value;
  let inputSource = document.getElementById('input-source').value;
  let inputDate = document.getElementById('input-date').value;
  let inputParent = document.getElementById('input-parent').value;

  var data = {key: '502bba4c0126ae7dbc567d7530acc9a2', q: url}
   console.log(data);

  fetch('https://api.linkpreview.net', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(response => {
  document.getElementById("tiddler-title").innerHTML = response.title;
  document.getElementById("tiddler-description").innerHTML = response.description;
  document.getElementById("tiddler-image").innerHTML = response.image;
  document.getElementById("tiddler-url").innerHTML = response.url;
  document.getElementById("tiddler-source").innerHTML = inputSource;
  document.getElementById("tiddler-date").innerHTML = inputDate;
  document.getElementById("tiddler-parent").innerHTML = inputParent;
  })

}

function clearForms(e) {
  e.preventDefault();
  // Maak grijze box leeg
  document.getElementById("tiddler-title").innerHTML = "";
  document.getElementById("tiddler-description").innerHTML = "";
  document.getElementById("tiddler-image").innerHTML = "";
  document.getElementById("tiddler-url").innerHTML = "";
  document.getElementById("tiddler-source").innerHTML = "";
  document.getElementById("tiddler-date").innerHTML = "";
  document.getElementById("tiddler-parent").innerHTML = "";

  // maak input form leeg
  document.getElementById('input-url').value = "";
  document.getElementById('input-source').value = "";
  document.getElementById('input-date').value = "";
  document.getElementById('input-parent').value = "";

}