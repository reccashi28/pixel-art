import { DrawingPanelActions, GET_DIMENSION_VALUE, GET_DRAWING_PANEL_COLOR } from "../../types"


export const getDrawingPanelColor = (data: string): DrawingPanelActions => {
    return {
        type: GET_DRAWING_PANEL_COLOR,
        payload: {
            data
        }
    }
}

export const getDimensionValue = (data: number): DrawingPanelActions => {
    return {
        type: GET_DIMENSION_VALUE,
        payload: {
            data
        }
    }
}