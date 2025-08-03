export const fetchBreeds = () => {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => data.message);
};

fetchBreeds()