const getLikes = async () => {
  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const idUrl = '9vUKLfgfPbeVlsgu5dzp';

  const response = await fetch(`${apiUrl}${idUrl}/likes/`);
  let data;
  const isJson = (response.headers.get('Content-type') === 'application/json');
  if (isJson) {
    data = await response.json();
  } else {
    data = JSON.parse(await response.text());
  }
  return data;
};

export default getLikes;