import { Box, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles( {
    drawingPanelRoot: {
    }
})

function DrawingPanel() {
    const classes = useStyles();
    return (
        <Box className={classes.drawingPanelRoot}>
            Drawing Panel
        </Box>
    )
}

export default DrawingPanel
