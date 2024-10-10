import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system'; 
import Container from '@mui/material/Container'; 
import CustomButton from '../../components/CustomButton/CustomButton';
import welcome from '../../assets/Curry Rice Hd Transparent, Indian Food Talley Curry With Rice, India, Food, Thali PNG Image For Free Download 1.png';

const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(3), // 
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    fontSize:'64px',
    color:'#514e4e',
    fontWeight:'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
        fontSize:'40px'
    },

}));

const Welcome = () => {
    return (
        <Box sx={{ backgroundColor: '#F6F193', minHeight: '80vh' }}>
            <Container>
                <CustomBox>
                    <Box sx={{ flex: '1' }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '18px',
                                color: '#687690',
                                fontWeight: '500',
                                mt: '10',
                                mb: '4',
                            }}
                        >
                            Welcome to TAMARIND FOOD CORNER
                        </Typography>
                        <Title variant="h1">
                        Experience flavors you'll fall in love with.
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '18px',
                                color: '#5a6473',
                                my: 4,
                            }}
                        >
                            Delight in a flavorful journey with every bite, as our meals are paired with refreshing drinks and crafted to perfection.
                        </Typography>

                        <CustomButton
                            backgroundColor="#0f1b4c"
                            color="#fff"
                            buttonText="More About Us"
                            welcomeBtn={true}
                        />
                    </Box>
                    <Box sx={{ flex: '1.25' }}>
                        <img
                            src={welcome}
                            alt="welcome"
                            style={{ maxWidth: '100%', marginBottom: '2rem', width:'650px' }}
                        />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );
};

export default Welcome;
