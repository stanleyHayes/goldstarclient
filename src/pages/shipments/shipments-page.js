import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    LinearProgress,
    MenuItem,
    Paper,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Tooltip,
    Typography
} from "@mui/material";
import Layout from "../../components/layout/layout";
import {useFormik} from "formik";
import * as Yup from "yup";
import Empty from "../../components/shared/empty";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {selectShipment} from "../../redux/features/shipment/shipment-slice";
import moment from "moment";
import currencyFormatter from "currency-formatter";
import Profile from "../../components/shared/profile";
import {EditOutlined, VisibilityOutlined} from "@mui/icons-material";

const ShipmentsPage = () => {

    const {shipments, loading, error} = useSelector(selectShipment);
    const [filteredShipments, setFilteredShipments] = useState(shipments);

    const formik = useFormik({
        initialValues: {
            query: '',
            page: 1,
            size: 20,
            mode: 'all',
            status: 'all'
        },
        validateOnChange: true,
        onSubmit: (values, {resetForm}) => {
            if (values.query !== '') {
                setFilteredShipments(filteredShipments.filter(shipment => shipment.tracking === values.query));
            }
            if (values.mode !== 'all') {
                setFilteredShipments(filteredShipments.filter(shipment => shipment.mode === values.mode));
            }

            if (values.status !== 'all') {
                setFilteredShipments(filteredShipments.filter(shipment => shipment.status === values.status));
            }
            resetForm();
        },
        validationSchema: Yup.object().shape({
            query: Yup.string().required('Search query required')
        })
    });

    return (
        <Layout>
            <Box sx={{py: 4}}>
                {loading && <LinearProgress variant="query" color="secondary"/>}
                <Container>
                    {error && <Alert severity="error">{<AlertTitle>{error}</AlertTitle>}</Alert>}

                    <Grid container={true} spacing={2} justifyContent="space-between">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4" sx={{color: 'secondary.main'}}>
                                Shipments
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md={2}>
                            <Link to="/shipment/new" style={{textDecoration: 'none'}}>
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
                                    variant="contained"
                                    disableElevation={true}>
                                    Create Shipment
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>

                    <Divider sx={{my: 4}} light={true} variant="fullWidth"/>


                    <Grid container={true} spacing={2} justifyContent="space-between">
                        <Grid item={true} xs={12} md={4}>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <FormControl flex={1} fullWidth={true} variant="outlined">
                                    <InputLabel>Status</InputLabel>
                                    <Select
                                        onChange={formik.handleChange}
                                        fullWidth={true}
                                        size="small"
                                        name="status"
                                        label="Status"
                                        color="secondary"
                                        value={formik.values.status}>
                                        <MenuItem value="all">All</MenuItem>
                                        <MenuItem value="success">Success</MenuItem>
                                        <MenuItem value="pending">Pending</MenuItem>
                                        <MenuItem value="failed">Failed</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl flex={1} fullWidth={true} variant="outlined">
                                    <InputLabel>Mode</InputLabel>
                                    <Select
                                        onChange={formik.handleChange}
                                        fullWidth={true}
                                        size="small"
                                        name="mode"
                                        label="Mode"
                                        color="secondary"
                                        value={formik.values.mode}>
                                        <MenuItem value="all">All</MenuItem>
                                        <MenuItem value="standard">Standard</MenuItem>
                                        <MenuItem value="express">Express</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <form onSubmit={formik.handleSubmit}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <TextField
                                        flex={1}
                                        onChange={formik.handleChange}
                                        value={formik.values.query}
                                        variant="outlined"
                                        fullWidth={true}
                                        type="text"
                                        required={true}
                                        color="secondary"
                                        size="small"
                                        helperText={formik.touched.query && formik.errors.query}
                                        error={Boolean(formik.touched.query && formik.errors.query)}
                                        placeholder="Enter search query"
                                        label="Search"
                                    />
                                    <Button
                                        onClick={formik.handleSubmit}
                                        color="secondary"
                                        sx={{
                                            textTransform: 'capitalize',
                                            borderTopRightRadius: 16,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 16,
                                            borderTopLeftRadius: 0,
                                            backgroundColor: 'light.secondary'
                                        }}
                                        variant="outlined"
                                        disableElevation={true}>
                                        Search
                                    </Button>
                                </Stack>
                            </form>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 3}} light={true}/>

                    {filteredShipments && filteredShipments.length === 0 ? (
                        <Box>
                            <TableContainer component={Paper} sx={{mb: 4}} elevation={0}>
                                <Table size="medium">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell>Tracking</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Recipient</TableCell>
                                            <TableCell>Destination</TableCell>
                                            <TableCell>Price</TableCell>
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
                        <TableContainer component={Paper} sx={{mb: 4}}>
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
                                    {filteredShipments && filteredShipments.map((shipment, index) => {
                                        return (
                                            <TableRow key={shipment._id}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{shipment.tracking}</TableCell>
                                                <TableCell>{shipment.status}</TableCell>
                                                <TableCell>
                                                    <Profile recipient={shipment.recipient}/>
                                                </TableCell>
                                                <TableCell>
                                                    {currencyFormatter.format(
                                                        shipment.totalCost.amount,
                                                        {code: shipment.totalCost.currency}
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
                </Container>
            </Box>
        </Layout>
    )
}

export default ShipmentsPage;
