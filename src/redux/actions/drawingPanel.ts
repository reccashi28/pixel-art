import { DrawingPanelActions, GET_DRAWING_PANEL_COLOR } from "../../types"


export const getDrawingPanelColor = (data: string): DrawingPanelActions => {
    return {
        type: GET_DRAWING_PANEL_COLOR,
        payload: {
            data
        }
    }
}