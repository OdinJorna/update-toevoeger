var data = {key: '502bba4c0126ae7dbc567d7530acc9a2 ', q: 'https://nos.nl/artikel/2409879-opnieuw-versoepelde-eindexamenregels-vanwege-corona'}

fetch('https://api.linkpreview.net', {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify(data),
}).then(res => {
  if (res.status != 200) {
    console.log(res.status)
    throw new Error('something went wrong');
  }
  return res.json()
}).then(response => {
/*  console.log(response) */
}).catch(error => {
  console.log(error)
})
