export const GET_DRAWING_PANEL_COLOR = 'GET_DRAWING_PANEL_COLOR'


export type getDrawingPanelColor = {
    type: typeof GET_DRAWING_PANEL_COLOR,
    payload: {
        data: string
    }
}
export type DrawingPanelActions = getDrawingPanelColor

export type DrawingPanelState = {
    color: string
}

export type AppState = {
    drawingPanel: DrawingPanelState
}