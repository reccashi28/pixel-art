import React from 'react'

import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles( {
    titel: {
        padding: 20
    }
})

function Home() {
    const classes = useStyles()
    return (
        <div>
            <Typography className={classes.titel} variant='h5'>Enter Panel Dimensions</Typography>
        </div>
    )
}

export default Home
