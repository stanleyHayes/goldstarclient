import {Avatar, Box, Stack, Typography} from "@mui/material";
import DesktopSidebarLink from "../shared/desktop-sidebar-link";
import {
    AcUnit,
    AcUnitOutlined, Calculate, CalculateOutlined,
    Dashboard,
    DashboardOutlined,
    Groups,
    GroupsOutlined,
    KeyboardArrowRight, LocalShipping, LocalShippingOutlined,
    MonetizationOn,
    MonetizationOnOutlined, Route, RouteOutlined,
    Shop,
    ShopOutlined
} from "@mui/icons-material";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const DesktopSidebar = () => {

    const {pathname} = useLocation();

    return (
        <Box sx={{height: '100%', backgroundColor: 'background.drawer'}}>
            <Stack
                justifyContent="space-between"
                sx={{height: '100%'}}
                direction="column">
                <Box>
                    <Box
                        sx={{
                            backgroundColor: 'background.paper',
                            py: 1,
                            borderBottomStyle: 'solid',
                            borderBottomWidth: 1,
                            borderBottomColor: 'divider',
                            borderRightStyle: 'solid',
                            borderRightWidth: 1,
                            borderRightColor: 'divider'
                        }}>
                        <Link to="/profile" style={{textDecoration: 'none'}}>
                            <Stack
                                justifyContent="space-between"
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                sx={{px: 2}}>
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
                                            SH
                                        </Typography>
                                    </Avatar>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{color: 'text.primary'}}>
                                            Stanley Hayford
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
                        </Link>
                    </Box>
                    <Stack direction="column" spacing={1}>
                        <DesktopSidebarLink
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
                            active={pathname === '/dashboard'}
                            label="Dashboard"
                            path="/dashboard"
                        />

                        <DesktopSidebarLink
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

                        <DesktopSidebarLink
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

                        <DesktopSidebarLink
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

                        <DesktopSidebarLink
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
                </Box>
            </Stack>
        </Box>
    )
}

export default DesktopSidebar;
