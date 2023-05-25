const getLikes = async (id) => {
  const apiUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/"
  const idUrl= "9vUKLfgfPbeVlsgu5dzp"

  console.log('creating card for',meal.id,meal.strMeal)
  const response = await fetch(`${apiUrl}${id}/likes`);
  let data;
  if(response.headers.get('Content-type')=== 'application/json'){
    data = await response.json();
    console.log('get response-',response,'data- ' ,data);
  }
  else {
    data = await response.text();
    console.log('get response-',response,'data- ' ,data);
  }
  return data;
};

export default getLikes;