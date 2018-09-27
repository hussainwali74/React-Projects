import {FETCH_POSTS, NEW_POST} from './types';

//each action or action creator is going to be a function that we need to export

export const fetchPosts = () => dispatch =>  {
 //it's like a resolver in a promise
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type:FETCH_POSTS,
        payload:posts
    }) 
    )
    .catch(e => console.error(e));
}

export const createPost = (postData) => dispatch => {
    console.log("action post");
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(postData)
    }).then(res => res.json())
    .then(ek_post => dispatch({
        type: NEW_POST,
        payload:ek_post
    })
    );
}