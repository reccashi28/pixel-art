export const GET_DRAWING_PANEL_COLOR = 'GET_DRAWING_PANEL_COLOR'
export const GET_DIMENSION_VALUE = 'GET_DIMENSION_VALUE'

export type getDrawingPanelColor = {
    type: typeof GET_DRAWING_PANEL_COLOR,
    payload: {
        data: string
    }
}

export type getDimensionValue = {
    type: typeof GET_DIMENSION_VALUE,
    payload: {
        data: number
    }
}
export type DrawingPanelActions = getDrawingPanelColor | getDimensionValue

export type DrawingPanelState = {
    color: string,
    dimension: number,
}

export type AppState = {
    drawingPanel: DrawingPanelState
}