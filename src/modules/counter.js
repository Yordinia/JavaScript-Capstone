const counter = (id, likes) => {
     // like number from DOM
     let likeFromDom = document.getElementById(id).textContent ;
     likeFromDom = parseInt(likeFromDom);
     // like number from Fetch URL
     const likeFromURL = likes;

     const test = likeFromDom == likeFromURL;
     console.log('Like from DOM', likeFromDom,'type is = ',typeof(likeFromDom))
     console.log('Like from URL', likeFromURL ,'type is = ',typeof(likeFromURL))
    return test;
}

export default counter;