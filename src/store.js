import { createStore, combineReducers, applyMiddleware } from 'redux'
import postsReducer from './reducers/postsReducer'
import commentsReducer from './reducers/commentsReducer'
import thunk from 'redux-thunk'


const reducers = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store