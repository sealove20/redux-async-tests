const url = "https://jsonplaceholder.typicode.com";

export const getPhotos = () =>
  fetch(`${url}/photos?_limit=10`)
    .then(res => res.json())
    .catch(error => console.warn("ERROR : ", error));

export const getUsers = () =>
  fetch(`${url}/users`)
    .then(res => res.json())
    .catch(error => console.warn("ERROR : ", error));
