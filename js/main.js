import generateTable from "./tableGenerator.js";

const apiUrl = 'https://jsonplaceholder.typicode.com/users/';

const handleData = (error, data) => {
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    generateTable(data);
  };
};

const fetchData = (url, callback) => {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      };
      return response.json();
    })
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
};

let users = fetchData(apiUrl, handleData);