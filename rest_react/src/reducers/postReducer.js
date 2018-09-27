// this is where it is basically going to evaluate any actions that are committed
//any actions such as fetcching a posts, creating a new posts

//for our actions we create what are called types which are basically types
import { FETCH_POSTS, NEW_POST } from '../actions/types';

//create initial state

const initialState = {
    items: [], //representing the posts that are gonna come in 
    item: {} // the single post response we get back when we a post submit to api
}

//this evaluates what type we are dealing with
export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
        return state;
    }

}