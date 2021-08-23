import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../types';


import { Button, createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme } from '@material-ui/core'
import { CompactPicker } from 'react-color'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles( (theme: Theme) => 
createStyles({
    drawingPanelRoot: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
    },
    table: {
        // width: '100%'
    },
    panelCell: {
        // width: '1.5rem',
        height: '1.5rem',
        borderBottom: "none",
        // [theme.breakpoints.up('xs')]: {
        //     heigh,
        // }
    },
    colorPicker: {
        margin: '1rem',
    },
    btnReset: {
        marginTop: '1.5rem'
    }
}),
);

type colorChangePropType = {
    hex: string
}

function DrawingPanel() {
    const classes = useStyles();
    const { dimension } = useSelector( (state: AppState) => state.drawingPanel)
    const [color, setColor ] = useState<colorChangePropType>({hex: '#000'})
    const [canChangeCollor, setCanChangeCollor] = useState<boolean>(true)
    const [oldColor, setOldColor] = useState<string>('')
    const history = useHistory();
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
            cell.push(<TableCell style={{ width: '1.5rem' }} className={classes.panelCell} key={i}  onMouseEnter={changeBackgroundColorOnHover} onMouseLeave={resetBackgroundColor} onClick={changeBackgroundColor}></TableCell>)
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

    const selectDimension = () => {
        history.push('/')
    }

    return (
        <>
            <CompactPicker color={color.hex} onChangeComplete={handleChangeComplete} className={classes.colorPicker} />
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
            <Button variant="contained" color='primary' className={classes.btnReset} onClick={selectDimension}>Reset</Button>

        </>
    )

}

export default DrawingPanel
