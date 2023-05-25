/* Task 12 requirements

When the page loads, the webapp the Involvement API to show the item
likes and combines them with the data from the base API.

Remember that your page should make only 2 requests:

- one to the base API
- and one to the Involvement API.

This task does not include displaying the likes button (heart icon on the
  wireframe) for each item.
 */

const getLikes = async () => {
  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const idUrl = '9vUKLfgfPbeVlsgu5dzp';

  const response = await fetch(`${apiUrl}${idUrl}/likes/`).catch((error) => console.log('Fetch Error', error));
  let data;
  const isJson = (response.headers.get('Content-type') === 'application/json');
  if (isJson) {
    data = await response.json();
    console.log('content-type==json? ', isJson, 'get response-', response, 'data- ', data);
  } else {
    data = JSON.parse(await response.text());
    // console.log('content-type==json? ', isJson ,data, 'url', `${apiUrl}${idUrl}/likes/`);
  }
  return data;
};

export default getLikes;