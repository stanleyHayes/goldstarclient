import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";

const Service = ({service}) => {
    return (
        <Card sx={{height: '100%'}} elevation={0}>
            <CardMedia
                src={service.image} component="img"
                sx={{height: 200, objectFit: 'cover', objectPosition: 'center'}}
            />
            <CardContent>
                <Stack direction="column" spacing={1}>
                    <Typography variant="body1" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                        {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {service.description}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Service;
