const getLikes = async ({apiUrl, id}) => {
    // Make a GET request to retrieve the like information
  const response = await fetch(`${apiUrl}${id}/likes`);
  
  if (response.ok) {
    const likeData = await response.text();
    console.log('Like information retrieved:', likeData);
    return likeData;
    // Process the likeData as needed
  } else 
    console.log('Failed to retrieve like information:', response.status);
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
    

export {
    getLikes,
    createApiId,
}