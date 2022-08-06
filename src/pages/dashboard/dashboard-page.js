import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from "@mui/material";

import Layout from "../../components/layout/layout";
import {useSelector} from "react-redux";
import {selectDashboard} from "../../redux/features/dashboard/dashboard-slice";
import React from "react";
import Stat from "../../components/shared/stat";
import {green, grey, red} from "@mui/material/colors";
import {EditOutlined, KeyboardArrowRight, TrendingUp, VisibilityOutlined} from "@mui/icons-material";
import ProgressLabel from "react-progress-label";
import greeting from "greet-by-time";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import Empty from "../../components/shared/empty";
import {Link} from "react-router-dom";
import Profile from "../../components/shared/profile";
import currencyFormatter from "currency-formatter";
import moment from "moment/moment";

const DashboardPage = () => {

    const {dashboard} = useSelector(selectDashboard);
    const {authData} = useSelector(selectAuth);

    const hour = new Date().getHours();

    return (
        <Layout>
            <Box sx={{py: 4}}>
                <Container>
                    <Grid spacing={2} container={true} justifyContent="space-between">
                        <Grid item={true} xs={12} md={6}>
                            <Typography
                                sx={{color: 'secondary.main'}}
                                variant="h4">Dashboard</Typography>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Stack direction="column" spacing={1}>
                                <Typography variant="h5" sx={{color: 'text.primary'}}>
                                    {greeting(authData.firstName, hour)}
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Welcome Back
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                    <Grid spacing={2} container={true}>
                        <Grid item={true} xs={12} md={4}>
                            <Stat
                                value={
                                    <Typography variant="h4" sx={{color: green[600]}}>
                                        {dashboard && dashboard.delivered.count}
                                    </Typography>
                                }
                                title={
                                    <Typography align="center" variant="body2" sx={{color: green[600]}}>
                                        Delivered Shipments
                                    </Typography>
                                }
                                backgroundColor={
                                    green[100]
                                }
                                percentage={
                                    <ProgressLabel
                                        progress={dashboard && dashboard.delivered.percentage}
                                        fillColor="#e8f5e9"
                                        trackColor="#c8e6c9"
                                        progressColor="#43a047"
                                        progressWidth={5}
                                        trackWidth={8}
                                        cornersWidth={5}
                                        size={70}
                                        text={`${dashboard && dashboard.delivered.percentage}%`}
                                        textProps={{
                                            x: '50%',
                                            y: '50%',
                                            dx: 2,
                                            dy: 8,
                                            textAnchor: 'middle',
                                            style: {
                                                fontSize: 16,
                                                fontWeight: '500',
                                                fill: '#2e7d32',
                                                fontFamily: 'EuclidCircularB'
                                            }
                                        }}
                                    />
                                }
                                icon={
                                    <TrendingUp
                                        sx={{
                                            backgroundColor: green[200],
                                            borderTopRightRadius: 16,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 16,
                                            borderTopLeftRadius: 0,
                                            padding: 1,
                                            color: green[600]
                                        }}/>}
                            />
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Stat
                                value={
                                    <Typography variant="h4" sx={{color: grey[600]}}>
                                        {dashboard && dashboard.pending.count}
                                    </Typography>
                                }
                                title={
                                    <Typography align="center" variant="body2" sx={{color: grey[600]}}>
                                        Pending Shipments
                                    </Typography>
                                }
                                backgroundColor={
                                    grey[100]
                                }
                                percentage={
                                    <ProgressLabel
                                        progress={dashboard && dashboard.pending.percentage}
                                        progressColor="#757575"
                                        progressWidth={5}
                                        trackWidth={8}
                                        cornersWidth={5}
                                        size={70}
                                        text={`${dashboard && dashboard.pending.percentage}%`}
                                        textProps={{
                                            x: '50%',
                                            y: '50%',
                                            dx: 2,
                                            dy: 8,
                                            textAnchor: 'middle',
                                            style: {
                                                fontSize: 16,
                                                fontWeight: '500',
                                                fill: '#757575',
                                                fontFamily: 'EuclidCircularB'
                                            }
                                        }}
                                        fillColor="#757575" trackColor="#e0e0e0"/>
                                }
                                icon={
                                    <TrendingUp
                                        sx={{
                                            backgroundColor: grey[300],
                                            borderTopRightRadius: 16,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 16,
                                            borderTopLeftRadius: 0,
                                            padding: 1,
                                            color: grey[600]
                                        }}/>}
                            />
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Stat
                                value={
                                    <Typography variant="h4" sx={{color: red[600]}}>
                                        {dashboard && dashboard.failed.count}
                                    </Typography>
                                }
                                title={
                                    <Typography align="center" variant="body2" sx={{color: red[600]}}>
                                        Failed Shipments
                                    </Typography>
                                }
                                backgroundColor={
                                    red[100]
                                }
                                percentage={
                                    <ProgressLabel
                                        progress={dashboard && dashboard.failed.percentage}
                                        fillColor="#e8f5e9"
                                        trackColor="#c8e6c9"
                                        progressColor="#e53935"
                                        progressWidth={5}
                                        trackWidth={8}
                                        cornersWidth={5}
                                        size={70}
                                        text={`${dashboard && dashboard.failed.percentage}%`}
                                        textProps={{
                                            x: '50%',
                                            y: '50%',
                                            dx: 2,
                                            dy: 8,
                                            textAnchor: 'middle',
                                            style: {
                                                fontSize: 16,
                                                fontWeight: '500',
                                                fill: '#e53935',
                                                fontFamily: 'EuclidCircularB'
                                            }
                                        }}
                                    />
                                }
                                icon={
                                    <TrendingUp
                                        sx={{
                                            backgroundColor: red[200],
                                            borderTopRightRadius: 16,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 16,
                                            borderTopLeftRadius: 0,
                                            padding: 1,
                                            color: red[600]
                                        }}
                                    />}
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{mt: 4}}>

                        <Grid container={true} spacing={2} alignItems="center" justifyContent="space-between">
                            <Grid item={true} xs={12} md="auto">
                                <Typography variant="h4" sx={{color: 'secondary.main'}}>
                                    Latest Shipments
                                </Typography>
                            </Grid>
                            <Grid item={true} xs={12} md={2}>
                                <Link to="/shipments" style={{textDecoration: 'none'}}>
                                    <Button
                                        fullWidth={true}
                                        sx={{
                                            borderTopRightRadius: 16,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 16,
                                            borderTopLeftRadius: 0,
                                            textTransform: 'capitalize'
                                        }}
                                        color="secondary"
                                        variant="text"
                                        endIcon={<KeyboardArrowRight />}
                                        disableElevation={true}>
                                        View Shipments
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>

                        <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                        {dashboard && dashboard.latestShipments.length === 0 ? (
                            <Box>
                                <TableContainer component={Paper} sx={{mb: 4}}>
                                    <Table size="medium">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>#</TableCell>
                                                <TableCell>Tracking</TableCell>
                                                <TableCell>Status</TableCell>
                                                <TableCell>Recipient</TableCell>
                                                = <TableCell>Price</TableCell>
                                                <TableCell>Date</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                    </Table>
                                </TableContainer>
                                <Empty
                                    title={
                                        <Typography variant="h5" align="center" sx={{color: 'text.primary'}}>
                                            No shipments
                                        </Typography>
                                    } message={
                                    <Typography variant="body2" align="center" sx={{color: 'text.secondary'}}>
                                        Create your first shipment
                                    </Typography>
                                } button={
                                    <Stack direction="row" justifyContent="center">
                                        <Link to="/shipment/new"
                                              style={{textDecoration: 'none'}}>
                                            <Button
                                                color="secondary"
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    borderTopRightRadius: 16,
                                                    borderBottomRightRadius: 0,
                                                    borderBottomLeftRadius: 16,
                                                    borderTopLeftRadius: 0,
                                                }}
                                                variant="contained"
                                                disableElevation={true}>
                                                Create Shipment
                                            </Button>
                                        </Link>
                                    </Stack>
                                }/>
                            </Box>
                        ) : (
                            <TableContainer component={Paper} sx={{mb: 4}} elevation={0}>
                                <Table size="medium">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell>Tracking</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Recipient</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {dashboard && dashboard.latestShipments.map((shipment, index) => {
                                            return (
                                                <TableRow key={shipment._id}>
                                                    <TableCell>{index + 1}</TableCell>
                                                    <TableCell>{shipment.tracking}</TableCell>
                                                    <TableCell>{shipment.status}</TableCell>
                                                    <TableCell>
                                                        {shipment.recipient && (
                                                            <Profile recipient={shipment.recipient}/>)}
                                                    </TableCell>
                                                    <TableCell>
                                                        {currencyFormatter.format(
                                                            shipment?.totalCost?.amount,
                                                            {code: shipment?.totalCost?.currency}
                                                        )}
                                                    </TableCell>
                                                    <TableCell>{moment(shipment.createdAt).fromNow()}</TableCell>
                                                    <TableCell>
                                                        <Stack direction="row" spacing={1} alignItems="center">
                                                            <Tooltip title={`View ${shipment.tracking} Details`}>
                                                                <Link to={`/shipments/${shipment._id}`}
                                                                      style={{textDecoration: 'none'}}>
                                                                    <VisibilityOutlined
                                                                        sx={{
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            padding: 1,
                                                                            fontSize: 18,
                                                                            backgroundColor: 'light.secondary',
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomRightRadius: 0,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                        }}/>
                                                                </Link>
                                                            </Tooltip>
                                                            <Tooltip title={`Update ${shipment.tracking}`}>
                                                                <Link to={`/shipments/${shipment._id}/update`}
                                                                      style={{textDecoration: 'none'}}>
                                                                    <EditOutlined
                                                                        sx={{
                                                                            cursor: 'pointer',
                                                                            color: 'secondary.main',
                                                                            padding: 1,
                                                                            fontSize: 18,
                                                                            backgroundColor: 'light.secondary',
                                                                            borderTopRightRadius: 16,
                                                                            borderBottomRightRadius: 0,
                                                                            borderBottomLeftRadius: 16,
                                                                            borderTopLeftRadius: 0,
                                                                        }}/>
                                                                </Link>
                                                            </Tooltip>
                                                        </Stack>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default DashboardPage;
