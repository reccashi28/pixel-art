import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import { CompactPicker } from 'react-color'
import { useHistory } from 'react-router-dom';

import { Box, Button, createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme } from '@material-ui/core'

import { AppState } from '../../types';
import Buttons from '../Buttons/Buttons';


const useStyles = makeStyles( (theme: Theme) => 
createStyles({
    drawingPanelRoot: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem'
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
        margin: '2rem',
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
    const drawingPanelRef: React.RefObject<HTMLElement> = useRef(null);
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

    const printDrawingPanel = (event: React.MouseEvent<HTMLElement>): void => {
        let printType: string = event.currentTarget.innerText;
        const PNG: string = "EXPORT AS PNG";
        // console.log(typeof("Export as PNG"))
        console.log(printType, PNG)
        if(printType === "EXPORT AS PNG") {
            exportComponentAsPNG(drawingPanelRef)
            console.log('png')
        } else if( printType === "EXPORT AS PDF") {
            exportComponentAsPDF(drawingPanelRef)
            console.log('pdf')

        } else if(printType === "EXPORT AS JPEG"){
            exportComponentAsJPEG(drawingPanelRef)
            console.log('jpeg')

        }
    }

    return (
        <>
            <Box className={classes.colorPicker}>
                <CompactPicker color={color.hex} onChangeComplete={handleChangeComplete} />
            </Box>
            <TableContainer component={Paper} className={classes.drawingPanelRoot} ref={drawingPanelRef}>
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
            <Box>
                <Button variant="contained" color='primary' className={classes.btnReset} onClick={selectDimension}>Reset</Button>
                <Buttons printDrawingPanel={printDrawingPanel} />
            </Box>
        </>
    )

}

export default DrawingPanel
