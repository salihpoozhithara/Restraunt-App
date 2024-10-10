import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import {styled} from '@mui/material'

import logoImg from '../../assets/LinkedIn cover - 1 1.png'
import starsImg from '../../assets/Star.png'

const Partner = () => {

    const CustomContainer = styled(Container)(({theme})=> ({
        display:'flex',
        justifyContent:'space-between',
        [theme.breakpoints.down('md')]: {
            flexDirection:'column',
            alignItems:'cemter',
            textAlign:'center',
            marginBottom: theme.spacing(4)
        }
    }))

    const CustomBox = styled(Box)(({theme})=> ({
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(4)
        }
    }))

  return (
    <Box sx={{mt:10}}>
        <CustomContainer>
            <CustomBox>
                <img src={logoImg} alt="logo" style={{maxWidth: "100%", width:'250px'}} />
                <Typography 
                    variant='body2'
                    sx={{
                        color:'#7d8589',
                        fontSize:'16px',
                        fontWeight:'bold',
                        mt: 2

                    }}>
                    More than 45,000 trust Tamarind
                </Typography>
            </CustomBox>


            <Box>
                <img src={starsImg} alt="stars" style={{maxWidth:'100%'}} />
                <Typography 
                    variant='body2'
                    sx={{
                        color:'#7d8589',
                        fontSize:'16px',
                        fontWeight:'bold',
                        mt: 2
                    }}
                >
                    5-Star Rating (2k+ Reviews)
                </Typography>
            </Box>

        </CustomContainer>


        
      
    </Box>
  )
}

export default Partner
