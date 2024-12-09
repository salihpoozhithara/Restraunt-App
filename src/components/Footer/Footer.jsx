import React from 'react'
import { Typography } from '@mui/material'
import {styled} from '@mui/material'
import {Box, Container} from '@mui/material'

//icons
import fbIcon from '../../assets/facebook.png'
import twitterIcon from '../../assets/twitter.png'
import instagramIcon from '../../assets/instagram.png'

const Footer = () => {

    const CustomContainer = styled(Container)(({theme})=> ({
        display:'flex',
        justifyContent:'space-around',
        gap: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column',
            textAlign:'center'
        },
    }))

    const FooterLink = styled('span')(({theme})=> ({
        fontSize:'16px',
        color:'#000066',
        fontWeight:'300',
        cursor:'pointer',
        '&:hover': {
            color:'#66b2ff'
        },
    }))

    const IconBox = styled(Box)(({theme})=> ({
        display:'flex',
        alignItems:'center',
        gap:'1rem',
        [theme.breakpoints.down('sm')]: {
            justifyContent:'center'
        }
    }))

  return (
    <Box
        sx={{
            py:10,
            backgroundColor:'#ebe8e7 '
        }}
    >

        <CustomContainer>
            <Box>
                <Typography
                sx={{
                    fontSize:'20px',
                    color:'#1c1c1d',
                    fontWeight:'700',
                    mb: 2
                }}>
                    Featured
                </Typography>
                {/* jus try out using mapping */}
                <FooterLink>Guides</FooterLink> <br />
                <FooterLink>Services</FooterLink> <br />
                <FooterLink>Contact Us</FooterLink> 
            </Box>



            <Box>
                <Typography sx={{
                    fontSize:'20px',
                    color:'#1c1c1d',
                    fontWeight:'700',
                    mb: 2
                }}>
                    Overview
                </Typography>
                <FooterLink>Location</FooterLink> <br />
                <FooterLink>Partnerships</FooterLink> <br />
                <FooterLink>Terms of use & Privacy Policies</FooterLink> 


            </Box>


            <Box>
                <Typography sx={{
                    fontSize:'20px',
                    color:'#1c1c1d',
                    fontWeight:'700',
                    mb: 2
                }}>
                    Get in touch 
                </Typography>

                <Typography sx={{
                    fontSize:'16px',
                    color:'#7a7a7e',
                    fontWeight:'500',
                    mb: 2
                }}>
                    Keep in touch with our social media pages
                </Typography>

                <IconBox>
                    <img 
                    src={fbIcon} 
                    alt="fbIcon" 
                    style={{cursor:"pointer"}} />
                    <img 
                    src={twitterIcon} 
                    alt="twitterIcon" 
                    style={{cursor:"pointer"}} />
                    <img 
                    src={instagramIcon} 
                    alt="instagramIcon" 
                    style={{cursor:"pointer"}} />
                </IconBox>
            </Box>
        </CustomContainer>
      
    </Box>
  )
}

export default Footer
