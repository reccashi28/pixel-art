import { combineReducers } from 'redux';

import drawingPanel from './drawingPanel'

const createRootReducer = () => 
    combineReducers( {
        drawingPanel
    })

export default createRootReducer;