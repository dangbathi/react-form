import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export default function DenseAppBar() {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component="div" xs={{mr:2, display: {xs:'none', md: 'flex'}}} >
                        Logo
                    </Typography>
                    <Box xs={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                    <IconButton 
                        size="large" 
                        aria-label="account of current user" 
                        aria-controls="menu-appbar"
                        // onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}