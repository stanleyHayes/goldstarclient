import {Box, Button, Container, Divider, Grid, Link as MUILink, Stack, Typography} from "@mui/material";
import {OpenInNew} from "@mui/icons-material";
import {Link} from "react-router-dom";

const DesktopFooter = () => {
    return (
        <Box sx={{backgroundColor: 'background.paper', py: 2}}>
            <Container>
                <Grid container={true} spacing={4}>
                    <Grid xs={3} item={true}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                            Quick Links
                        </Typography>
                        <Divider variant="fullWidth" sx={{my: 2}}/>
                        <Stack direction="column" spacing={1}>
                            <MUILink href="https://passport.mfa.gov.gh/" target="_blank" underline="none">
                                <Button endIcon={<OpenInNew/>} size="small"
                                        sx={{
                                            color: 'text.secondary',
                                            textTransform: 'capitalize',
                                            justifyContent: 'flex-start'
                                        }}>
                                    Online Passport Application
                                </Button>
                            </MUILink>
                            <MUILink href="https://www.bog.gov.gh/" target="_blank" underline="none">
                                <Button endIcon={<OpenInNew/>} size="small"
                                        sx={{
                                            color: 'text.secondary',
                                            textTransform: 'capitalize',
                                            justifyContent: 'flex-start'
                                        }}>
                                    Bank of Ghana
                                </Button>
                            </MUILink>
                            <MUILink href="http://www.ghana.travel/" target="_blank" underline="none">
                                <Button endIcon={<OpenInNew/>} size="small"
                                        sx={{
                                            color: 'text.secondary',
                                            textTransform: 'capitalize',
                                            justifyContent: 'flex-start'
                                        }}>
                                    GTA
                                </Button>
                            </MUILink>
                            <MUILink href="http://www.gfzb.com.gh/" target="_blank" underline="none">
                                <Button endIcon={<OpenInNew/>} size="small"
                                        sx={{
                                            color: 'text.secondary',
                                            textTransform: 'capitalize',
                                            justifyContent: 'flex-start'
                                        }}>
                                    GFZB
                                </Button>
                            </MUILink>
                            <MUILink
                                href="https://www.thisnation.com/politics/economy/ghana-investment-promotion-centre-gipc/"
                                target="_blank" underline="none">
                                <Button endIcon={<OpenInNew/>} size="small"
                                        sx={{
                                            color: 'text.secondary',
                                            textTransform: 'capitalize',
                                            justifyContent: 'flex-start'
                                        }}>
                                    GIPC
                                </Button>
                            </MUILink>
                        </Stack>
                    </Grid>
                    <Grid xs={3} item={true}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                            Public
                        </Typography>
                        <Divider variant="fullWidth" sx={{my: 2}}/>
                        <Stack direction="column" spacing={1}>
                            <Link to="/press-release" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Press Release
                                </Button>
                            </Link>
                            <Link to="/announcements" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Announcement
                                </Button>
                            </Link>
                            <Link to="/events" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Events
                                </Button>
                            </Link>
                            <Link to="/news" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    News
                                </Button>
                            </Link>
                            <Link to="/vacancies" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Vacancies
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid xs={3} item={true}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                            Media
                        </Typography>
                        <Divider variant="fullWidth" sx={{my: 2}}/>
                        <Stack direction="column" spacing={1}>
                            <Link to="/media/videos" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Videos
                                </Button>
                            </Link>
                            <Link to="/media/photos" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Photos
                                </Button>
                            </Link>
                            <Link to="/media/publications" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Publications
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid xs={3} item={true}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                            About Ghana
                        </Typography>
                        <Divider variant="fullWidth" sx={{my: 2}}/>
                        <Stack direction="column" spacing={1}>
                            <Link to="/about-ghana" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Profile
                                </Button>
                            </Link>
                            <Link to="/about-ghana/economy" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Economy
                                </Button>
                            </Link>
                            <Link to="/about-ghana/regions" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Regions
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default DesktopFooter;
