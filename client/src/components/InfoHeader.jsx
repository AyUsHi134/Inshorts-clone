import {Box, Typography,styled} from '@mui/material';

import appStore from '../assets/appstore.png';
import playStore from '../assets/playstore.png';

const Container = styled(Box)`
background:#f44336;
color:#FFFFFF;
display:flex;
align-items:center;
height: 48px;
`;

const Image = styled('img')({
    height: 34,
    '&:last-child': {
        margin: '0 50px 0 20px'
    }
})

const Text = styled(Typography)`
font-size: 14px;
font-weight: 300;
margin-left: 50px; `;  

const Infoheader =() => {
    return(
        <Container>
            <Text>
                For the best experience use the inshorts app on your smartphone.
            </Text>
            <Box style={{display:'flex', marginLeft: 'auto'}}>
                <Image src={appStore} alt='appStore'/>
                <Image src={playStore} alt='playStore'/> {/*applying margin-right as it is the last child in Image*/}
            </Box>
        </Container>

    )
}

export default Infoheader;
