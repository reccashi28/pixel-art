import { DrawingPanelActions, DrawingPanelState, GET_DRAWING_PANEL_COLOR } from "../../types";

const initState: DrawingPanelState = {
        color: ""
}

const drawingPanel = (state=initState, action: DrawingPanelActions): DrawingPanelState => {
    switch(action.type) {
        
        case GET_DRAWING_PANEL_COLOR: {
            return { ...state, color: action.payload.data}
        }
        default: {
            return state
        }
    }
}

export default drawingPanel;