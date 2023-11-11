import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" backgroundColor='#FFF3F4'>
      <Stack gap="40px" sx={{ alignItems: 'center'}} flexWrap='wrap' pt="24px">
        <img  src={Logo} alt="logo" style={{ width: '200px', height: '40px'}} />
      </Stack>
      <Typography variant='h5' sx={{ fontSize: {lg : "28px", xs: '20px'}}}
        mt='40px' textAlign="center" pb="40px"
      >
      Made with ❤️ by Youssef TITAZAIM
      </Typography>
    </Box>
  )
}

export default Footer