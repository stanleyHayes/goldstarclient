import {Avatar, Box, Button, Divider, Stack, Typography} from "@mui/material";
import {orange, red} from "@mui/material/colors";
import SidebarLink from "../shared/sidebar-link";
import {
    Calculate,
    CalculateOutlined,
    Dashboard,
    DashboardOutlined,
    DeleteForever,
    ExitToApp,
    Face,
    FaceOutlined,
    KeyboardArrowRight,
    LocalShipping,
    LocalShippingOutlined,
    MonetizationOn,
    MonetizationOnOutlined,
    Notifications,
    NotificationsOutlined,
    Route,
    RouteOutlined,
    Settings,
    SettingsOutlined
} from "@mui/icons-material";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import {UTILS} from "../../utils/utils";

const MobileDrawerContent = () => {

    const {pathname} = useLocation();
    const {authData} = useSelector(selectAuth);

    return (
        <Box sx={{width: {xs: '80vw', sm: '50vw', md: '50vw', lg: '20vw'}}}>
            <Box sx={{height: '100%'}}>
                <Stack
                    sx={{height: '100%', py: 2}}
                    divider={<Divider variant="fullWidth" light={true}/>}
                    direction="column">
                    <Stack sx={{px: 2, mb: 4}} spacing={2} direction="row" alignItems="center">
                        <Link to="/dashboard" style={{textDecoration: 'none'}}>
                            <img
                                src={logo}
                                style={{width: 40, height: 40, objectFit: 'contain', objectPosition: 'center'}}
                                alt="Gold Star Logo"
                            />
                        </Link>
                        <Link to="/dashboard" style={{textDecoration: 'none'}}>
                            <Typography
                                sx={{color: 'text.primary'}}
                                fontFamily="EuclidCircularB"
                                variant="h4">Gold Star</Typography>
                        </Link>
                    </Stack>

                    <Stack direction="column" sx={{mb: 4, mt: 4}} spacing={1}>
                        <SidebarLink
                            icon={
                                pathname === '/dashboard' ?
                                    <Dashboard
                                        sx={{
                                            color: 'secondary.main',
                                            borderRadius: '100%',
                                            borderWidth: 0.1,
                                            borderColor: 'secondary.main',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6
                                        }}/> :
                                    <DashboardOutlined
                                        sx={{
                                            color: 'text.secondary',
                                            borderRadius: '100%',
                                            borderWidth: 0,
                                            borderColor: 'text.secondary',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6,
                                            backgroundColor: 'light.gray'
                                        }}/>
                            }
                            active={pathname === '/'}
                            label="Dashboard"
                            path="/"
                        />

                        <SidebarLink
                            icon={
                                pathname === '/shipments' ?
                                    <LocalShipping
                                        sx={{
                                            color: 'secondary.main',
                                            borderRadius: '100%',
                                            borderWidth: 0.1,
                                            borderColor: 'secondary.main',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6
                                        }}/> :
                                    <LocalShippingOutlined
                                        sx={{
                                            color: 'text.secondary',
                                            borderRadius: '100%',
                                            borderWidth: 0,
                                            borderColor: 'text.secondary',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6,
                                            backgroundColor: 'light.gray'
                                        }}/>
                            }
                            active={pathname === '/shipments'}
                            label="Shipments"
                            path="/shipments"
                        />

                        <SidebarLink
                            icon={
                                pathname === '/calculator' ?
                                    <Calculate
                                        sx={{
                                        color: 'secondary.main',
                                        borderRadius: '100%',
                                        borderWidth: 0.1,
                                        borderColor: 'secondary.main',
                                        borderStyle: 'solid',
                                        fontSize: 18,
                                        padding: 0.6
                                    }}/> :
                                    <CalculateOutlined
                                        sx={{
                                            color: 'text.secondary',
                                            borderRadius: '100%',
                                            borderWidth: 0,
                                            borderColor: 'text.secondary',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6,
                                            backgroundColor: 'light.gray'
                                        }}/>
                            }
                            active={pathname === '/calculator'}
                            label="Calculator"
                            path="/calculator"
                        />

                        <SidebarLink
                            icon={
                                pathname === '/tracking' ?
                                    <Route
                                        sx={{
                                            color: 'secondary.main',
                                            borderRadius: '100%',
                                            borderWidth: 0.1,
                                            borderColor: 'secondary.main',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6
                                        }}/> :
                                    <RouteOutlined
                                        sx={{
                                            color: 'text.secondary',
                                            borderRadius: '100%',
                                            borderWidth: 0,
                                            borderColor: 'text.secondary',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6,
                                            backgroundColor: 'light.gray'
                                        }}/>
                            }
                            active={pathname === '/tracking'}
                            label="Track"
                            path="/tracking"
                        />

                        <SidebarLink
                            icon={
                                pathname === '/billing' ?
                                    <MonetizationOn
                                        sx={{
                                            color: 'secondary.main',
                                            borderRadius: '100%',
                                            borderWidth: 0.1,
                                            borderColor: 'secondary.main',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6
                                        }}/> :
                                    <MonetizationOnOutlined
                                        sx={{
                                            color: 'text.secondary',
                                            borderRadius: '100%',
                                            borderWidth: 0,
                                            borderColor: 'text.secondary',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6,
                                            backgroundColor: 'light.gray'
                                        }}/>
                            }
                            active={pathname === '/billing'}
                            label="Billing"
                            path="/billing"
                        />

                    </Stack>

                    <Stack sx={{mt: 3}} direction="column" spacing={1}>
                        <SidebarLink
                            icon={
                                pathname === '/profile' ?
                                    <Face sx={{
                                        color: 'secondary.main',
                                        borderRadius: '100%',
                                        borderWidth: 0.1,
                                        borderColor: 'secondary.main',
                                        borderStyle: 'solid',
                                        fontSize: 18,
                                        padding: 0.6
                                    }}/> :
                                    <FaceOutlined
                                        sx={{
                                            color: 'text.secondary',
                                            borderRadius: '100%',
                                            borderWidth: 0,
                                            borderColor: 'text.secondary',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6,
                                            backgroundColor: 'light.gray'
                                        }}/>
                            }
                            active={pathname === '/profile'}
                            label="Profile"
                            path="/profile"
                        />

                        <SidebarLink
                            icon={
                                pathname === '/settings' ?
                                    <Settings
                                        sx={{
                                            color: 'secondary.main',
                                            borderRadius: '100%',
                                            borderWidth: 0.1,
                                            borderColor: 'secondary.main',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6
                                        }}/> :
                                    <SettingsOutlined
                                        sx={{
                                            color: 'text.secondary',
                                            borderRadius: '100%',
                                            borderWidth: 0,
                                            borderColor: 'text.secondary',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6,
                                            backgroundColor: 'light.gray'
                                        }}/>
                            }
                            active={pathname === '/settings'}
                            label="Settings"
                            path="/settings"
                        />

                        <SidebarLink
                            icon={
                                pathname === '/notifications' ?
                                    <Notifications
                                        sx={{
                                            color: 'secondary.main',
                                            borderRadius: '100%',
                                            borderWidth: 0.1,
                                            borderColor: 'secondary.main',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6
                                        }}/> :
                                    <NotificationsOutlined
                                        sx={{
                                            color: 'text.secondary',
                                            borderRadius: '100%',
                                            borderWidth: 0,
                                            borderColor: 'text.secondary',
                                            borderStyle: 'solid',
                                            fontSize: 18,
                                            padding: 0.6,
                                            backgroundColor: 'light.gray'
                                        }}/>
                            }
                            active={pathname === '/notifications'}
                            label="Notifications"
                            path="/notifications"
                        />

                        <Stack
                            sx={{justifyContent: 'flex-start', px: 2}}
                            direction="row" spacing={1.5} justifyContent="space-between" alignItems="center">
                            <ExitToApp
                                sx={{
                                    padding: 0.4,
                                    borderTopLeftRadius: 36,
                                    borderTopRightRadius: 36,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 36,
                                    backgroundColor: orange[100],
                                    color: orange[800],
                                    fontSize: 20
                                }}/>
                            <Button
                                fullWidth={true}
                                size="large"
                                variant="text"
                                sx={{
                                    px: 2,
                                    borderRadius: 0,
                                    justifyContent: 'flex-start',
                                    color: orange[800],
                                    textTransform: 'capitalize',
                                }}>
                                Logout
                            </Button>
                        </Stack>

                        <Stack
                            sx={{justifyContent: 'flex-start', px: 2}}
                            direction="row" spacing={1.5} justifyContent="space-between" alignItems="center">
                            <DeleteForever
                                sx={{
                                    padding: 0.4,
                                    borderTopLeftRadius: 36,
                                    borderTopRightRadius: 36,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 36,
                                    color: red[800],
                                    backgroundColor: red[100],
                                    fontSize: 20
                                }}/>
                            <Button
                                fullWidth={true}
                                size="large"
                                variant="text"
                                sx={{
                                    px: 2,
                                    borderRadius: 0,
                                    justifyContent: 'flex-start',
                                    color: red[800],
                                    textTransform: 'capitalize',
                                }}>
                                Delete Account
                            </Button>
                        </Stack>


                        <Stack
                            justifyContent="space-between"
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            sx={{mb: 4, px: 2}}>

                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'secondary.main',
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                        padding: 0.5,
                                        fontSize: 20,
                                        backgroundColor: 'light.secondary'
                                    }}>
                                    <Typography
                                        variant="h6"
                                        sx={{color: 'secondary.main'}}>
                                        {UTILS.getInitials(authData.fullName)}
                                    </Typography>
                                </Avatar>
                                <Box>
                                    <Typography
                                        variant="body2"
                                        sx={{color: 'text.primary'}}>
                                        {authData.fullName}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{color: 'text.secondary'}}>
                                        View Profile
                                    </Typography>
                                </Box>
                            </Stack>

                            <KeyboardArrowRight color="secondary"/>

                        </Stack>
                    </Stack>

                </Stack>
            </Box>
        </Box>
    )
}

export default MobileDrawerContent;
