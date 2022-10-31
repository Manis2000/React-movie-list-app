import axios from 'axios';



export const fetchData = (str) => {
    const apiEp = `http://www.omdbapi.com/?t=${str}&apikey=50c61d14`;
    try{

      return  axios.get(apiEp);


    } catch (error) {
        console.log(error);
    }
}