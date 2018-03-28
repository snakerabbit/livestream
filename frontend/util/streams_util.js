export const fetchStreams = () => {
  return fetch('http://localhost:3000/streams')
  .then(function(response) {
    return response.json();
  });
};

export const fetchStream = user => {
  return fetch(`http://localhost:3000/streams/${user}`)
  .then(function(response) {
    return response.json();
  });
};

export const deleteStreams = () => {
  return fetch('http://localhost:3000/streams', {method: 'delete'})
  .then(function(response) {
    return response.json();
  });
};
