import React from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../types';


import { Box, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { CompactPicker } from 'react-color'

const useStyles = makeStyles( {
    drawingPanelRoot: {
        display: 'flex',
        justifyContent: 'center',
    },
     table: {
    minWidth: 300,
  },
  panelCell: {
      width: 20,
      height: 20,
      '&:hover':{
          backgroundColor: 'gray',
          curso: 'default'
      },
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',
  }
})

function DrawingPanel() {
    const classes = useStyles();
    const { dimension } = useSelector( (state: AppState) => state.drawingPanel)

    const createColumnDrawingPanel = () => {
        let cell = []
        for(let i = 0; i < dimension; i++) {
            console.log(i, 'i');
        cell.push(<TableCell className={classes.panelCell} key={i}></TableCell>)
        }

        return cell;
    }

    const createRowDrawingPanel = () => {
        let row = [];
        for(let i = 0; i < dimension; i++) {
        row.push(<TableRow>{createColumnDrawingPanel()}</TableRow>)
        }
        return row;
    }
    return (
        <>
            <CompactPicker />
            <TableContainer component={Paper} className={classes.drawingPanelRoot}>
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
        </>
    )
}

export default DrawingPanel
