const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'vKZCdN5l6d0ODFZiWaxR';

const postComment = async(id, user, com) => {
  console.log(id);
  console.log(user);
  console.log(com);
  await fetch(`${url}${appID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment: com,
    }),
    headers: {
      'Content-type' : 'application/json',
    },
  });
};

export default postComment;