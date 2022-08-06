import {Avatar, Badge, Button, Container, Divider, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import {UTILS} from "../../utils/utils";
import {
    ContactMailOutlined,
    DarkMode,
    DetailsOutlined,
    ExitToAppOutlined,
    FaceOutlined,
    FeaturedPlayList,
    HelpCenterOutlined,
    KeyboardArrowDown,
    LightMode,
    Notifications,
    Settings
} from "@mui/icons-material";
import {selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";

const DesktopHeader = () => {


    const {themeVariant} = useSelector(selectUI);
    const dispatch = useDispatch();

    const [openMenu, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = event => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }

    const {authData} = useSelector(selectAuth);

    return (
        <Toolbar variant="regular">
            <Container maxWidth="xl">
                <Stack
                    divider={<Divider variant="fullWidth" light={true}/>}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">

                    <Stack sx={{px: 2}} spacing={2} direction="row" alignItems="center">
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Typography
                                sx={{color: 'secondary.main'}}
                                variant="h4">Gold Star</Typography>
                        </Link>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar
                                onClick={handleMenuOpen}
                                sx={{
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 0,
                                    backgroundColor: 'light.secondary',
                                    cursor: 'pointer'
                                }}>
                                <Typography
                                    sx={{
                                        color: 'secondary.main',
                                        cursor: 'pointer'
                                    }}
                                    variant="h6">
                                    {UTILS.getInitials(authData?.fullName)}
                                </Typography>
                            </Avatar>
                            <Typography
                                onClick={handleMenuOpen}
                                sx={{
                                    color: 'secondary.main',
                                    cursor: 'pointer'
                                }}
                                variant="body2">
                                {authData?.fullName}
                            </Typography>
                            <KeyboardArrowDown
                                onClick={handleMenuOpen}
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary',
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 0,
                                }}/>
                        </Stack>
                        <Badge color="secondary" max={100} badgeContent={999} variant="dot">
                            <Notifications
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary',
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 0,
                                }}/>
                        </Badge>

                        <Link to="/settings" style={{textDecoration: 'none'}}>
                            <Settings
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary',
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 0,
                                }}/>
                        </Link>
                        <Menu
                            open={openMenu}
                            onClose={handleMenuClose}
                            elevation={2}
                            anchorEl={anchorEl}>
                            <MenuItem>
                                <Link to="/profile" style={{textDecoration: 'none'}}>
                                    <Button
                                        size="large"
                                        sx={{
                                            justifyContent: 'flex-start',
                                            color: 'text.primary',
                                            textTransform: 'capitalize'
                                        }}
                                        fullWidth={true}
                                        variant="text"
                                        startIcon={
                                            <FaceOutlined
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    padding: 1,
                                                    fontSize: 18
                                                }}/>}>
                                        Profile
                                    </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/about" style={{textDecoration: 'none'}}>
                                    <Button
                                        size="large"
                                        sx={{
                                            justifyContent: 'flex-start',
                                            color: 'text.primary',
                                            textTransform: 'capitalize'
                                        }}
                                        fullWidth={true}
                                        variant="text"
                                        startIcon={
                                            <DetailsOutlined
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    padding: 1,
                                                    fontSize: 18
                                                }}/>}>
                                        About Us
                                    </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/contact" style={{textDecoration: 'none'}}>
                                    <Button
                                        size="large"
                                        sx={{
                                            justifyContent: 'flex-start',
                                            color: 'text.primary',
                                            textTransform: 'capitalize'
                                        }}
                                        fullWidth={true}
                                        variant="text"
                                        startIcon={
                                            <ContactMailOutlined
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    padding: 1,
                                                    fontSize: 18
                                                }}/>}>
                                        Contact Us
                                    </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/testimonials" style={{textDecoration: 'none'}}>
                                    <Button
                                        size="large"
                                        sx={{
                                            justifyContent: 'flex-start',
                                            color: 'text.primary',
                                            textTransform: 'capitalize'
                                        }}
                                        fullWidth={true}
                                        variant="text"
                                        startIcon={
                                            <FeaturedPlayList
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    padding: 1,
                                                    borderRadius: '25%',
                                                    fontSize: 18,
                                                }}/>}>
                                        Testimonials
                                    </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/help" style={{textDecoration: 'none'}}>
                                    <Button
                                        size="large"
                                        sx={{
                                            justifyContent: 'flex-start',
                                            color: 'text.primary',
                                            textTransform: 'capitalize'
                                        }}
                                        fullWidth={true}
                                        variant="text"
                                        startIcon={
                                            <HelpCenterOutlined
                                                sx={{
                                                    cursor: 'pointer',
                                                    color: 'secondary.main',
                                                    padding: 1,
                                                    borderRadius: '25%',
                                                    fontSize: 18,
                                                }}/>}>
                                        Help
                                    </Button>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Button
                                    size="large"
                                    sx={{
                                        justifyContent: 'flex-start',
                                        color: 'text.primary',
                                        textTransform: 'capitalize'
                                    }}
                                    fullWidth={true}
                                    variant="text"
                                    startIcon={
                                        <ExitToAppOutlined
                                            sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18,
                                            }}/>}>
                                    Logout
                                </Button>
                            </MenuItem>
                        </Menu>

                        {themeVariant === 'light' ? (
                            <DarkMode
                                onClick={() => dispatch(toggleTheme())}
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    padding: 1,
                                    fontSize: 18,
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 0,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <LightMode
                                onClick={() => dispatch(toggleTheme())}
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    padding: 1,
                                    fontSize: 18,
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 0,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        )}
                    </Stack>
                </Stack>
            </Container>
        </Toolbar>
    )
}


export default DesktopHeader;
