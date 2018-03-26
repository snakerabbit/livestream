export const fetchStreams = () => {
  return fetch('http://localhost:3000/streams')  
  .then(function(response) {
    return response.json();
  });
};
