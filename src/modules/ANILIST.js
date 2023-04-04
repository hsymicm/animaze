function handleResponse(response) {
  return response.json().then((json) => {
    return response.ok ? json : Promise.reject(json);
  });
}

function handleData(data) {
  return data.data.Page.media;
}

function handleError(error) {
  console.error(error);
}

export default async function ANILIST(query, variables) {
  const url = 'https://graphql.anilist.co';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };

  return window
    .fetch(url, options)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);
}
