import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { AppState } from '../types'
import createRootReducer from './reducers/index'

const middlewares = [thunk]

const initState = {
    drawingPanel: {
        color: '',
        dimension: 4,
    }
}
const store = createStore( createRootReducer(), initState, compose(applyMiddleware(...middlewares)))

export default store;