import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import postsReducer from './reducers/postsReducer'
import thunk from 'redux-thunk'


const reducers = combineReducers({
    posts: postsReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store