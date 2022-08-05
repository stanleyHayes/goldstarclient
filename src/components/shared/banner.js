import {Box, Breadcrumbs, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {ChevronRight} from "@mui/icons-material";

const Banner = ({backgroundImage, title, alt, links}) => {

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: {xs: '80vh', md: '70vh', lg: '60vh'},
                backgroundColor: 'rgba(255, 255, 255, .35)',
            }}
            pt={4}
            pb={4}>
            <Box sx={{
                zIndex: 10,
                position: 'absolute',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <Box>
                    <Typography
                        mb={5}
                        sx={{color: 'white'}}
                        variant="h4"
                        align="center">
                        {title}
                    </Typography>
                    <Grid container={true} justifyContent="center" alignItems="center">
                        <Breadcrumbs
                            separator={
                                <ChevronRight
                                    sx={{
                                        color: "white"
                                    }}
                                />}>
                            {links.map(link => (
                                <Link
                                    key={link.link}
                                    to={link.link}
                                    sx={{textDecoration: 'none'}}>
                                    <Typography
                                        pt={0.5}
                                        pb={0.5}
                                        pl={1}
                                        pr={1}
                                        fontSize={12}
                                        fontWeight="bold"
                                        borderRadius={1}
                                        color="white"
                                        variant="body1"
                                        sx={{fontWeight: 'bold', textTransform: 'uppercase'}}>
                                        {link.label}
                                    </Typography>
                                </Link>
                            ))}
                        </Breadcrumbs>
                    </Grid>
                </Box>
            </Box>
            <img alt={alt} src={backgroundImage} style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                objectPosition: 'center',
                objectFit: 'cover',
                height: '100%',
                width: '100%'
            }}/>
        </Box>
    )
}

export default Banner;
