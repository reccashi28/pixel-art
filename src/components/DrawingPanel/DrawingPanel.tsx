import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../types';


import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
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
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',
  }
})

type colorChangePropType = {
    hex: string
}

function DrawingPanel() {
    const classes = useStyles();
    const { dimension } = useSelector( (state: AppState) => state.drawingPanel)
    const [color, setColor ] = useState<colorChangePropType>({hex: '#000'})
    const [canChangeCollor, setCanChangeCollor] = useState<boolean>(true)
    const [oldColor, setOldColor] = useState<string>('')

    const changeBackgroundColor = (e: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>): void => {
        e.currentTarget.style.backgroundColor = `${color.hex}`
        setCanChangeCollor(false)
    }

    const changeBackgroundColorOnHover = (e: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>):void => {
        setOldColor(e.currentTarget.style.backgroundColor)
        e.currentTarget.style.backgroundColor = `${color.hex}`;
    }

    const resetBackgroundColor = (e: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>):void => {
        if(canChangeCollor) {
            e.currentTarget.style.backgroundColor = `${oldColor}`;
        }
        setCanChangeCollor(true)
    }
     const createColumnDrawingPanel = () => {
        let cell = []
        for(let i = 0; i < dimension; i++) {
            cell.push(<TableCell className={classes.panelCell} key={i}  onMouseEnter={changeBackgroundColorOnHover} onMouseLeave={resetBackgroundColor} onClick={changeBackgroundColor}></TableCell>)
        }

        return cell;
    }

    const createRowDrawingPanel = () => {
        let row = [];
        for(let i = 0; i < dimension; i++) {
        row.push(<TableRow key={i}>{createColumnDrawingPanel()}</TableRow>)
        }
        return row;
    }
    const handleChangeComplete = (color: colorChangePropType): void => {
        setColor({hex: color.hex})
    }
    return (
        <>
            <CompactPicker color={color.hex} onChangeComplete={handleChangeComplete} />
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
