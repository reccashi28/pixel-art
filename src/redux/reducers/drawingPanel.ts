import { DrawingPanelActions, DrawingPanelState, GET_DIMENSION_VALUE, GET_DRAWING_PANEL_COLOR } from "../../types";

const initState: DrawingPanelState = {
        color: "",
        dimension: 4,

}

const drawingPanel = (state=initState, action: DrawingPanelActions): DrawingPanelState => {
    switch(action.type) {
        
        case GET_DRAWING_PANEL_COLOR: {
            return { ...state, color: action.payload.data}
        }
        case GET_DIMENSION_VALUE: {
            return { ...state, dimension: action.payload.data}
        }
        default: {
            return state
        }
    }
}

export default drawingPanel;