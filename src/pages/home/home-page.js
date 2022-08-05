import {Box, Button, Container, Grid, Typography} from "@mui/material";
import banner from "./../../assets/images/banner.jpg";
import Overlay from "../../components/shared/overlay";
import {Link} from "react-router-dom";

const HomePage = () => {

    return (
        <Box>
            <Overlay
                children={
                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                        <Container>
                            <Grid container={true} spacing={4} alignItems="center">
                                <Grid item={true} xs={12} md={6}>
                                    <Typography variant="h3" sx={{color: 'white', mb: 2}}>
                                        Gold Star Shipping and Security
                                    </Typography>
                                    <Typography variant="body1" sx={{color: 'white', mb: 6, fontWeight: 400}}>
                                        We carry clearness to intricacy, separating basic subtleties from confounded
                                        data to make modern, direct arrangements.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container={true} spacing={2} alignItems="center">
                                <Grid item={true} xs={12} md="auto">
                                    <Link to="/auth/register" style={{textDecoration: 'none'}}>
                                        <Button
                                            sx={{
                                                textTransform: 'capitalize',
                                                borderTopRightRadius: 16,
                                                borderBottomRightRadius: 0,
                                                borderBottomLeftRadius: 16,
                                                borderTopLeftRadius: 0,
                                            }}
                                            variant="contained"
                                            fullWidth={true}
                                            color="secondary"
                                            disableElevation={true}
                                            size="large">
                                            Register
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item={true} xs={12} md="auto">
                                    <Link to="/auth/login" style={{textDecoration: 'none'}}>
                                        <Button
                                            color="secondary"
                                            sx={{
                                                textTransform: 'capitalize',
                                                backgroundColor: 'light.secondary',
                                                borderTopRightRadius: 16,
                                                borderBottomRightRadius: 0,
                                                borderBottomLeftRadius: 16,
                                                borderTopLeftRadius: 0,
                                        }}
                                            variant="outlined"
                                            fullWidth={true}
                                            disableElevation={true}
                                            size="large">
                                            Login
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>}
                image={banner}
                backgroundColor="#000000"/>
        </Box>
    )
}

export default HomePage;
