import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import Layout from "../../components/layout/layout";
import Empty from "../../components/shared/empty";

const BillingPage = () => {

    return (
        <Layout>
            <Box sx={{py: 4}}>
                <Container>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            <Typography variant="h4" sx={{color: 'text.primary'}}>
                                Billings
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>

                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 3}} light={true}/>

                    <Empty
                        title={
                            <Typography variant="h5" align="center" sx={{color: 'text.primary'}}>
                                No billings
                            </Typography>
                        } message={
                        <Typography variant="body2" align="center" sx={{color: 'text.secondary'}}>
                            Create your first shipment
                        </Typography>
                    } button={null}/>
                </Container>
            </Box>
        </Layout>
    )
}

export default BillingPage;
