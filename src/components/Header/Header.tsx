import React from 'react'

import { Box, Typography } from '@material-ui/core'

function Header() {
    return (
        <Box display='flex' justifyContent='center' flexGrow={1} p={3}>
            <Typography variant='h3' component='h3'>Pixel Art</Typography>
        </Box>
    )
}

export default Header
