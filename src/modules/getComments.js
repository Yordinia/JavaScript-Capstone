const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'vKZCdN5l6d0ODFZiWaxR';

const getComments = async (itemID) => {
  let data = await fetch(`${url}${appID}/comments?item_id=${itemID}`);
  data = await data.json();
  return data;
};

export default getComments;