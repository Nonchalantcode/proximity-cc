import { createStore, combineReducers, applyMiddleware } from 'redux'
import postsReducer from './reducers/postsReducer'
import thunk from 'redux-thunk'


const reducers = combineReducers({
    posts: postsReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store