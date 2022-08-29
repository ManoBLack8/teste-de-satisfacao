import axios from 'axios';
const baseUrl = 'https://apimanoblack.000webhostapp.com/cental-optica-api/';

// Passing configuration object to axios
axios({
  method: 'get',
  url: `${baseUrl}`,
}).then((response) => {
  console.log(response.data);
});


// Invoking get method to perform a GET request


function getPerguntas() {
    axios.get(`${baseUrl}`).then((response) => {
        console.log(response.data);
      });
}
export default getPerguntas;