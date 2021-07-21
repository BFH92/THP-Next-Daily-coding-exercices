function fetchApi(){
  const response = fetch('Access-Control-Allow-Origin: https://www.instagram.com/atelier_e_au_carre/?__a=1')
  .then((response) => response.json())
  .then((response) => console.log(response))
}
fetchApi()