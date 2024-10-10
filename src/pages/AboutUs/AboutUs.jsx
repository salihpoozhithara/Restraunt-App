import React from 'react'
import { Box,styled,Typography } from '@mui/material'

const AboutUs = () => {

    const CustomBox = styled(Box)(({theme}) =>({
        width:'30%',
        [theme.breakpoints.down('md')]: {
            width:'85%'
        }
    }))

  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'80px',
        mt:'85px',
        mb:'150px'
    }}>

        <div  style={{
            width:"5%",
            height:'5px',
            backgroundColor:'#000339',
            margin:'0 auto'
        }}>

        </div>

        <Typography variant='h3' sx={{
            fontSize:'35px',
            fontWeight:'bold',
            color:'#000339',
            my : 5
        }}>
            About Us
        </Typography>

        <CustomBox>
            <Typography variant='body2' sx={{
                fontSize:'16px',
                fontWeight:'500',
                color:'#5a6473',
                textAlign:'center'
            }}>

            Welcome to our restraunt, where culinary <br /> excellence meets warm hospitality
            </Typography>
        </CustomBox>
      
    </Box>
  )
}

export default AboutUs
