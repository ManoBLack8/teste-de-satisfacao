
import axios from 'axios';


export default function 
Home({ route, navigation }) {
  const { master } = route.params;

    axios.post('http://teste-de-satisfacao-app.herokuapp.com/respostas/', {
    item: master,
    headers:{"Content-Type" : "application/json"}
  })
    .then(response => {
      console.log(response);
        

    })
    .catch(error => {
        console.error(error.response);
    });

      navigation.navigate ('Processos', {master});
  
  }
;