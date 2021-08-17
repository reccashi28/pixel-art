import React, { useState } from 'react'

import { Box, Button, FormControl, InputLabel, makeStyles, MenuItem, Select, Typography } from '@material-ui/core'

const useStyles = makeStyles( {
    titel: {
        padding: 20
    },
    formControl: {
        minWidth: 120,
    }
})

function Home() {
    const classes = useStyles();
    const [age, setAge] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
      };

    return (
        <div>
            <Typography className={classes.titel} variant='h5'>Choose Panel Dimensions</Typography>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Dimension</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    >
                    <MenuItem value={16}>4x4</MenuItem>
                    <MenuItem value={64}>8x8</MenuItem>
                    <MenuItem value={256}>16x16</MenuItem>
                    <MenuItem value={1024}>32x32</MenuItem>
                    </Select>
                </FormControl>
                <Box p={3}>
                    <Button variant='contained' color='primary'>Start Drawing</Button>
                </Box>
            </Box>
        </div>
    )
}

export default Home
