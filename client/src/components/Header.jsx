import {AppBar, Toolbar, styled} from '@mui/material';
import {Menu} from '@mui/icons-material';
import menuLogo from '../assets/logo_inshorts.png';

const StyleHeader = styled(AppBar)`
background: #fff;
height:75px;
`;

const Image = styled('img')({
    height:75,
    margin:'auto',
    paddingRight:70
});

const MenuIcon = styled(Menu)`
color: #000
`;

const Header = () => {
    return(
        <StyleHeader position='static'>
            <Toolbar>
                <MenuIcon />
                <Image src={menuLogo} alt='menuLogo' />
            </Toolbar>
        </StyleHeader>
    )
}

export default Header;