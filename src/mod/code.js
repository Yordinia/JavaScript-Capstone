const getLikes = async ({apiUrl, id}) => {
    // Make a GET request to retrieve the like information
  const response = await fetch(`${apiUrl}${id}/likes`);
  console.log(response)
  if (response.ok) {
    const type = response.headers.get('Content-type');
    if (type==='text/html') console.log('type=== text/html is ', type==='text/html','type is', type)
    else console.log('type=== text/html is ', type==='text/html', 'type is', type)
    const readVal = type==='text/html'? await response.text():  await response.json();
    const data = readVal[0];
    console.log('this is readVal ', data)
    const likeData = readVal.length;
    // console.log('Like information retrieved:', likeData);
    return likeData;
    // Process the likeData as needed
  } else {
    console.log('Failed to retrieve like information:', response.status);
    return null;
  }
}


const createApiId = async (apiUrl) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (response.ok) {
      const id = await response.text();
      console.log('Successfully created ID:', id);
      return id;
    } else {
      console.log('Error:', response.status);
    }
}

// Make a POST request to store the like information
const setLikes = async ({apiUrl, id}, data) => {

const response = await fetch(`${apiUrl}${id}/likes`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

if (response.ok) {
  console.log('Like information POST successfully', await response.text(),JSON.stringify(data));
} else {
  console.log('Failed to store like information:', response.status);
}
}

export {
    getLikes,
    createApiId,
    setLikes,
}