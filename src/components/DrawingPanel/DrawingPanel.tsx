import React from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../types';


import { Box, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

const useStyles = makeStyles( {
    drawingPanelRoot: {
    },
     table: {
    minWidth: 650,
  },
})

function DrawingPanel() {
    const classes = useStyles();
    const { dimension } = useSelector( (state: AppState) => state.drawingPanel)

    const createColumnDrawingPanel = () => {
        let cell = []
        for(let i = 0; i < dimension; i++) {
            console.log(i, 'i');
        cell.push(<TableCell key={i}>{i}</TableCell>)
        }

        return cell;
    }

    const createRowDrawingPanel = () => {
        let row = [];
        for(let i = 0; i < dimension; i++) {
            console.log(i, 'i');
        row.push(<TableRow>{createColumnDrawingPanel()}</TableRow>)
        }
        return row;
    }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    {createColumnDrawingPanel()}
                </TableRow>
                </TableHead>
                <TableBody>
                    {createRowDrawingPanel()}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DrawingPanel
