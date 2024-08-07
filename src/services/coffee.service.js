import axios from 'axios';

export const getAllCoffee = (callback) => {
  axios
    .get('https://fake-coffee-api.vercel.app/api')
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
