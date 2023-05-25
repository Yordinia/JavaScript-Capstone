// const setLikes = ({id, likes}) => {
//     const apiUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
//     const idUrl = "9vUKLfgfPbeVlsgu5dzp"; // I didn't use our id vKZCdN5l6d0ODFZiWaxR so that I don't mess up the values (like I did with this one)
    
//     fetch(`${apiUrl}${idUrl}/likes/`, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({ item_id: id, likes: like })
//     });
// console.log('this is set Likes', id, likes)
// }
const setLikes = ({id, likes}) => {
console.log('this is set likes', id , likes)
}

export default setLikes;