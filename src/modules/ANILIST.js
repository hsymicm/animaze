export default async function (query, variables) {
  var url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    }

  return window
    .fetch(url, options)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError)
}

function handleResponse(response) {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json)
  })
}

function handleData(data) {
  return data.data.Page.media
}

function handleError(error) {
  console.error(error)
}
