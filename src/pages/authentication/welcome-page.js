import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import BannerSliderItem from "../../components/shared/banner-slider-item";
import {GOLD_STAR_DATA} from "../../utils/data";
import Carousel from "react-material-ui-carousel";

const WelcomePage = () => {
    return (
        <Box
            sx={{
                maxWidth: '100vw',
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: 'background.default',
                overflow: 'hidden',
                flexDirection: {xs: 'column', lg: 'row'}
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flex: 1,
                    py: {xs: 4, lg: 0},
                    minHeight: '100vh',
                }}>
                <Container maxWidth="sm">
                    <Typography mb={3} variant="h6" sx={{color: 'text.secondary'}}>
                        Welcome to
                    </Typography>
                    <Typography mb={3} variant="h4" sx={{color: 'secondary.main'}}>
                        Gold Star
                    </Typography>
                    <Typography mb={4} variant="body1" sx={{color: 'text.secondary', fontWeight: 400}}>
                        Need a book ?
                        With Book Station, we provide you with a short trailer of a book and the link to the book next
                        to it. After you watch a trailer, grab your book with ease.
                    </Typography>
                    <Box>
                        <Grid container={true} spacing={2} alignItems="center">
                            <Grid item={true} xs={12} md="auto">
                                <Link to="/auth/register" style={{textDecoration: 'none'}}>
                                    <Button
                                        fullWidth={true}
                                        sx={{
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            textTransform: 'capitalize'
                                        }}
                                        color="secondary"
                                        variant="contained"
                                        disableElevation={true}>
                                        Sign Up
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item={true} xs={12} md="auto">
                                <Link to="/auth/login" style={{textDecoration: 'none'}}>
                                    <Button
                                        color="secondary"
                                        fullWidth={true}
                                        sx={{
                                            textTransform: 'capitalize',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                        }}
                                        variant="outlined"
                                        disableElevation={true}>
                                        Sign In
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '100vh',
                    overflowY: {xs: 'scroll', lg: 'hidden'},
                    backgroundColor: 'background.paper'
                }}>
                <Container sx={{mb: 4}}>
                    <Carousel
                        autoPlay={true}
                        stopAutoPlayOnHover={true}
                        duration={3000}
                        indicators={false}
                        cycleNavigation={true}>
                        {GOLD_STAR_DATA.FEATURES.map((item, index) => {
                            return (
                                <Box key={index}>
                                    <BannerSliderItem item={item}/>
                                </Box>
                            )
                        })}
                    </Carousel>
                </Container>
            </Box>
        </Box>
    )
}

export default WelcomePage;
