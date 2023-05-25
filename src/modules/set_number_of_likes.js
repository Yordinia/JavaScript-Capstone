const setLikes = async (id) => {
  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const idUrl = '9vUKLfgfPbeVlsgu5dzp'; // I didn't use our id vKZCdN5l6d0ODFZiWaxR so that I don't mess up the values (like I did with this one)
  const response = await fetch(`${apiUrl}${idUrl}/likes/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return response.text();
};

export default setLikes;