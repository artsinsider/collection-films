export function fetchReq (callback) {
  const url = 'http://api.freetor.dev.origin-creative-studio.com:3000/movies?lang=ru&limit=75'
  return fetch(url)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return callback(json.data);
    })
    .catch((error, inf) => {
      return console.log('API ERROR', error, inf)
    })
}
