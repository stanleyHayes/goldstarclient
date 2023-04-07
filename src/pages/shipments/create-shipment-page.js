import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import Layout from "../../components/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {selectShipment, SHIPMENT_ACTION_CREATORS} from "../../redux/features/shipment/shipment-slice";
import {useFormik} from "formik";
import * as Yup from "yup";
import "yup-phone";
import React from "react";
import {KeyboardArrowRight} from "@mui/icons-material";

const CreateShipmentPage = () => {

    // step 1 --->

    // terms and conditions
    // privacy policy

    // recipient information
    // name, phone, email

    //shipping information
    // mode
    //address

    //step
    // packages

    // summary

    const {step, recipientDetails, shippingDetails, paymentDetails} = useSelector(selectShipment);

    const dispatch = useDispatch();

    const recipientDetailFormik = useFormik({
        validateOnChange: true,
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Recipient name required'),
            email: Yup.string().required('Recipient email required').email('Invalid email'),
            phone: Yup.string().required('Recipient phone required'),
        }),
        initialValues: {
            name: recipientDetails.name,
            email: recipientDetails.email,
            phone: recipientDetails.phone
        },
        onSubmit: (values) => {
            dispatch(SHIPMENT_ACTION_CREATORS.saveRecipientDetails(values));
            dispatch(SHIPMENT_ACTION_CREATORS.next());
        }
    });

    const paymentDetailFormik = useFormik({
        validateOnChange: true,
        validationSchema: Yup.object().shape({
            cardholderName: Yup.string().required('Card holder name required'),
            cardNumber: Yup.string().required('Card number required'),
            cvv: Yup.string().required('CVV required').length(3, 'CVV must have a length of 3'),
            expiryMonth: Yup.string().required('Expiry month required'),
            expiryYear: Yup.string().required('Expiry year required'),
        }),
        initialValues: {
            cardholderName: paymentDetails.cardholderName,
            cardNumber: paymentDetails.cardNumber,
            cvv: paymentDetails.cvv,
            expiryMonth: paymentDetails.expiryMonth,
            expiryYear: paymentDetails.expiryYear,
        },
        onSubmit: (values) => {
            dispatch(SHIPMENT_ACTION_CREATORS.savePaymentDetails(values));
            dispatch(SHIPMENT_ACTION_CREATORS.next());
        }
    });


    const shipmentDetailFormik = useFormik({
        validateOnChange: true,
        validationSchema: Yup.object().shape({
            origin: {
                country: Yup.string().required('Origin country required'),
                stateOrRegionOrProvince: Yup.string().required('Origin state or region or province required'),
                city: Yup.string().required('Origin city required'),
                postalCode: Yup.string().required('Origin postal code required'),
                addressLine1: Yup.string().required('Origin address line 1 required'),
                addressLine2: Yup.string(),
            },
            destination: {
                country: Yup.string().required('Destination country required'),
                stateOrRegionOrProvince: Yup.string().required('Destination state or region or province required'),
                city: Yup.string().required('Destination city required'),
                postalCode: Yup.string().required('Destination postal code required'),
                addressLine1: Yup.string().required('Destination address line 1 required'),
                addressLine2: Yup.string(),
            },
            packages: Yup.array().min(1, 'You should add at least one package'),
            mode: Yup.string().required('Shipping mode required').oneOf(['sea', 'air'], 'Mode should be either sea or air'),
        }),
        initialValues: {
            origin: shippingDetails.origin,
            destination: shippingDetails.destination,
            packages: shippingDetails.packages,
            mode: shippingDetails.mode
        },
        onSubmit: (values) => {
            dispatch(SHIPMENT_ACTION_CREATORS.saveShippingDetails(values));
            dispatch(SHIPMENT_ACTION_CREATORS.next());
        }
    });

    return (
        <Layout>
            <Box sx={{py: 4}}>
                <Container>
                    <Grid container={true} spacing={4} alignItems="center" justifyContent="center">
                        <Grid item={true} xs={12} md="auto">
                            <Typography sx={{color: 'secondary.main'}} variant="h4">
                                Create New Shipment
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">

                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" light={true} sx={{my: 4}}/>

                    <Grid container={true} spacing={4} alignItems="center" justifyContent="space-between">
                        <Grid item={true} xs={12} md="auto">
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar
                                    onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(1))}
                                    sx={{backgroundColor: 'light.secondary', cursor: 'pointer'}} variant="circular">
                                    <Typography
                                        onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(1))}
                                        variant="h6"
                                        sx={{
                                            color: step === 1 ? 'secondary.main' : 'text.disabledSecondary',
                                            cursor: 'pointer'
                                        }}>
                                        01
                                    </Typography>
                                </Avatar>
                                <Typography
                                    onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(1))}
                                    variant="h6"
                                    sx={{
                                        color: step === 1 ? 'secondary.main' : 'text.disabledSecondary',
                                        cursor: 'pointer'
                                    }}>
                                    Recipient
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar
                                    onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(2))}
                                    sx={{backgroundColor: 'light.secondary', cursor: 'pointer'}} variant="circular">
                                    <Typography
                                        onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(2))}
                                        variant="h6"
                                        sx={{
                                            color: step === 2 ? 'secondary.main' : 'text.disabledSecondary',
                                            cursor: 'pointer'
                                        }}>
                                        02
                                    </Typography>
                                </Avatar>
                                <Typography
                                    onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(2))}
                                    variant="h6"
                                    sx={{
                                        color: step === 2 ? 'secondary.main' : 'text.disabledSecondary',
                                        cursor: 'pointer'
                                    }}>
                                    Shipping
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item={true} xs={12} md="auto">
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar
                                    onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(3))}
                                    sx={{backgroundColor: 'light.secondary', cursor: 'pointer'}} variant="circular">
                                    <Typography
                                        onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(3))}
                                        variant="h6"
                                        sx={{
                                            color: step === 3 ? 'secondary.main' : 'text.disabledSecondary',
                                            cursor: 'pointer'
                                        }}>
                                        03
                                    </Typography>
                                </Avatar>
                                <Typography
                                    onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(3))}
                                    variant="h6"
                                    sx={{
                                        color: step === 3 ? 'secondary.main' : 'text.disabledSecondary',
                                        cursor: 'pointer'
                                    }}>
                                    Packages
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item={true} xs={12} md="auto">
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar
                                    onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(4))}
                                    sx={{backgroundColor: 'light.secondary', cursor: 'pointer'}} variant="circular">
                                    <Typography
                                        onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(4))}
                                        variant="h6"
                                        sx={{
                                            color: step === 3 ? 'secondary.main' : 'text.disabledSecondary',
                                            cursor: 'pointer'
                                        }}>
                                        04
                                    </Typography>
                                </Avatar>
                                <Typography
                                    onClick={() => dispatch(SHIPMENT_ACTION_CREATORS.goTo(4))}
                                    variant="h6"
                                    sx={{
                                        color: step === 3 ? 'secondary.main' : 'text.disabledSecondary',
                                        cursor: 'pointer'
                                    }}>
                                    Payment
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar sx={{backgroundColor: 'light.secondary'}} variant="circular">
                                    <Typography
                                        variant="h6"
                                        sx={{color: step === 5 ? 'secondary.main' : 'text.disabledSecondary'}}>
                                        05
                                    </Typography>
                                </Avatar>
                                <Typography
                                    variant="h6"
                                    sx={{color: step === 5 ? 'secondary.main' : 'text.disabledSecondary'}}>
                                    Summary
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" light={true} sx={{my: 4}}/>

                    {step === 1 ? (
                        <Box>
                            <form onSubmit={recipientDetailFormik.handleSubmit}>
                                <Grid container={true}>
                                    <Grid item={true} xs={12} md={6} lg={4}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Stack direction="column" spacing={2}>
                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Name
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="name"
                                                                value={recipientDetailFormik.values.name}
                                                                name="name"
                                                                type="text"
                                                                color="secondary"
                                                                error={recipientDetailFormik.touched.name && recipientDetailFormik.errors.name}
                                                                onChange={recipientDetailFormik.handleChange}
                                                                onBlur={recipientDetailFormik.handleBlur}
                                                                placeholder="Enter recipient name"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {recipientDetailFormik.touched.name && recipientDetailFormik.errors.name && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {recipientDetailFormik.errors.name}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Email
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="name"
                                                                color="secondary"
                                                                value={recipientDetailFormik.values.email}
                                                                name="email"
                                                                type="email"
                                                                error={recipientDetailFormik.touched.email && recipientDetailFormik.errors.email}
                                                                onChange={recipientDetailFormik.handleChange}
                                                                onBlur={recipientDetailFormik.handleBlur}
                                                                placeholder="Enter recipient email"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {recipientDetailFormik.touched.email && recipientDetailFormik.errors.email && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {recipientDetailFormik.errors.email}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Phone
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="phone"
                                                                value={recipientDetailFormik.values.phone}
                                                                name="phone"
                                                                color="secondary"
                                                                type="tel"
                                                                error={recipientDetailFormik.touched.phone && recipientDetailFormik.errors.phone}
                                                                onChange={recipientDetailFormik.handleChange}
                                                                onBlur={recipientDetailFormik.handleBlur}
                                                                placeholder="Enter recipient phone"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {recipientDetailFormik.touched.phone && recipientDetailFormik.errors.phone && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {recipientDetailFormik.errors.phone}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Button
                                                        onClick={recipientDetailFormik.handleSubmit}
                                                        fullWidth={true}
                                                        sx={{
                                                            borderTopRightRadius: 16,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                            textTransform: 'capitalize',
                                                            paddingY: 1.5
                                                        }}
                                                        endIcon={<KeyboardArrowRight/>}
                                                        color="secondary"
                                                        variant="outlined"
                                                        disableElevation={true}>
                                                        Next
                                                    </Button>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    ) : step === 2 ? (
                        <Box>
                            <form onSubmit={shipmentDetailFormik.handleSubmit}>
                                <Grid container={true} spacing={4}>
                                    <Grid item={true} xs={12} md={4}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Stack direction="column" spacing={2}>
                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Country
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="name"
                                                                value={shipmentDetailFormik.values.name}
                                                                name="name"
                                                                type="text"
                                                                color="secondary"
                                                                error={shipmentDetailFormik.touched.name && shipmentDetailFormik.errors.name}
                                                                onChange={shipmentDetailFormik.handleChange}
                                                                onBlur={shipmentDetailFormik.handleBlur}
                                                                placeholder="Enter origin country"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {recipientDetailFormik.touched.name && recipientDetailFormik.errors.name && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {recipientDetailFormik.errors.name}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Email
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="name"
                                                                color="secondary"
                                                                value={shipmentDetailFormik.values.email}
                                                                name="email"
                                                                type="email"
                                                                error={shipmentDetailFormik.touched.email && shipmentDetailFormik.errors.email}
                                                                onChange={shipmentDetailFormik.handleChange}
                                                                onBlur={shipmentDetailFormik.handleBlur}
                                                                placeholder="Enter recipient email"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {shipmentDetailFormik.touched.email && shipmentDetailFormik.errors.email && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {shipmentDetailFormik.errors.email}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Phone
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="phone"
                                                                value={shipmentDetailFormik.values.phone}
                                                                name="phone"
                                                                color="secondary"
                                                                type="tel"
                                                                error={shipmentDetailFormik.touched.phone && shipmentDetailFormik.errors.phone}
                                                                onChange={shipmentDetailFormik.handleChange}
                                                                onBlur={shipmentDetailFormik.handleBlur}
                                                                placeholder="Enter recipient phone"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {shipmentDetailFormik.touched.phone && shipmentDetailFormik.errors.phone && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {shipmentDetailFormik.errors.phone}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Button
                                                        onClick={shipmentDetailFormik.handleSubmit}
                                                        fullWidth={true}
                                                        sx={{
                                                            borderTopRightRadius: 16,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                            textTransform: 'capitalize',
                                                            paddingY: 1.5
                                                        }}
                                                        endIcon={<KeyboardArrowRight/>}
                                                        color="secondary"
                                                        variant="outlined"
                                                        disableElevation={true}>
                                                        Next
                                                    </Button>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item={true} xs={12} md={4}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Stack direction="column" spacing={2}>
                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Name
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="name"
                                                                value={shipmentDetailFormik.values.name}
                                                                name="name"
                                                                type="text"
                                                                color="secondary"
                                                                error={shipmentDetailFormik.touched.name && shipmentDetailFormik.errors.name}
                                                                onChange={shipmentDetailFormik.handleChange}
                                                                onBlur={shipmentDetailFormik.handleBlur}
                                                                placeholder="Enter recipient name"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {shipmentDetailFormik.touched.name && shipmentDetailFormik.errors.name && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {shipmentDetailFormik.errors.name}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Email
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="name"
                                                                color="secondary"
                                                                value={shipmentDetailFormik.values.email}
                                                                name="email"
                                                                type="email"
                                                                error={shipmentDetailFormik.touched.email && shipmentDetailFormik.errors.email}
                                                                onChange={shipmentDetailFormik.handleChange}
                                                                onBlur={shipmentDetailFormik.handleBlur}
                                                                placeholder="Enter recipient email"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {shipmentDetailFormik.touched.email && shipmentDetailFormik.errors.email && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {shipmentDetailFormik.errors.email}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Phone
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="phone"
                                                                value={shipmentDetailFormik.values.phone}
                                                                name="phone"
                                                                color="secondary"
                                                                type="tel"
                                                                error={recipientDetailFormik.touched.phone && shipmentDetailFormik.errors.phone}
                                                                onChange={shipmentDetailFormik.handleChange}
                                                                onBlur={shipmentDetailFormik.handleBlur}
                                                                placeholder="Enter recipient phone"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {shipmentDetailFormik.touched.phone && shipmentDetailFormik.errors.phone && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {shipmentDetailFormik.errors.phone}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Button
                                                        onClick={shipmentDetailFormik.handleSubmit}
                                                        fullWidth={true}
                                                        sx={{
                                                            borderTopRightRadius: 16,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                            textTransform: 'capitalize',
                                                            paddingY: 1.5
                                                        }}
                                                        endIcon={<KeyboardArrowRight/>}
                                                        color="secondary"
                                                        variant="outlined"
                                                        disableElevation={true}>
                                                        Next
                                                    </Button>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item={true} xs={12} md={4}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Stack direction="column" spacing={2}>
                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Name
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="name"
                                                                value={shipmentDetailFormik.values.name}
                                                                name="name"
                                                                type="text"
                                                                color="secondary"
                                                                error={shipmentDetailFormik.touched.name && shipmentDetailFormik.errors.name}
                                                                onChange={shipmentDetailFormik.handleChange}
                                                                onBlur={shipmentDetailFormik.handleBlur}
                                                                placeholder="Enter recipient name"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {shipmentDetailFormik.touched.name && shipmentDetailFormik.errors.name && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {shipmentDetailFormik.errors.name}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Email
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="name"
                                                                color="secondary"
                                                                value={shipmentDetailFormik.values.email}
                                                                name="email"
                                                                type="email"
                                                                error={shipmentDetailFormik.touched.email && shipmentDetailFormik.errors.email}
                                                                onChange={shipmentDetailFormik.handleChange}
                                                                onBlur={shipmentDetailFormik.handleBlur}
                                                                placeholder="Enter recipient email"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {shipmentDetailFormik.touched.email && shipmentDetailFormik.errors.email && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {shipmentDetailFormik.errors.email}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Phone
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="phone"
                                                                value={shipmentDetailFormik.values.phone}
                                                                name="phone"
                                                                color="secondary"
                                                                type="tel"
                                                                error={shipmentDetailFormik.touched.phone && shipmentDetailFormik.errors.phone}
                                                                onChange={shipmentDetailFormik.handleChange}
                                                                onBlur={shipmentDetailFormik.handleBlur}
                                                                placeholder="Enter recipient phone"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {shipmentDetailFormik.touched.phone && shipmentDetailFormik.errors.phone && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {shipmentDetailFormik.errors.phone}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Button
                                                        onClick={shipmentDetailFormik.handleSubmit}
                                                        fullWidth={true}
                                                        sx={{
                                                            borderTopRightRadius: 16,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                            textTransform: 'capitalize',
                                                            paddingY: 1.5
                                                        }}
                                                        endIcon={<KeyboardArrowRight/>}
                                                        color="secondary"
                                                        variant="outlined"
                                                        disableElevation={true}>
                                                        Next
                                                    </Button>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    ) : step === 3 ? (
                        <Box>
                            <form onSubmit={paymentDetailFormik.handleSubmit}>
                                <Grid container={true}>
                                    <Grid item={true} xs={12} md={6} lg={4}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Stack direction="column" spacing={2}>
                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Name
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="name"
                                                                value={recipientDetailFormik.values.name}
                                                                name="name"
                                                                type="text"
                                                                color="secondary"
                                                                error={recipientDetailFormik.touched.name && recipientDetailFormik.errors.name}
                                                                onChange={recipientDetailFormik.handleChange}
                                                                onBlur={recipientDetailFormik.handleBlur}
                                                                placeholder="Enter recipient name"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {recipientDetailFormik.touched.name && recipientDetailFormik.errors.name && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {recipientDetailFormik.errors.name}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Email
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="name"
                                                                color="secondary"
                                                                value={recipientDetailFormik.values.email}
                                                                name="email"
                                                                type="email"
                                                                error={recipientDetailFormik.touched.email && recipientDetailFormik.errors.email}
                                                                onChange={recipientDetailFormik.handleChange}
                                                                onBlur={recipientDetailFormik.handleBlur}
                                                                placeholder="Enter recipient email"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {recipientDetailFormik.touched.email && recipientDetailFormik.errors.email && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {recipientDetailFormik.errors.email}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Phone
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="phone"
                                                                value={recipientDetailFormik.values.phone}
                                                                name="phone"
                                                                color="secondary"
                                                                type="tel"
                                                                error={recipientDetailFormik.touched.phone && recipientDetailFormik.errors.phone}
                                                                onChange={recipientDetailFormik.handleChange}
                                                                onBlur={recipientDetailFormik.handleBlur}
                                                                placeholder="Enter recipient phone"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {recipientDetailFormik.touched.phone && recipientDetailFormik.errors.phone && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {recipientDetailFormik.errors.phone}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Button
                                                        onClick={recipientDetailFormik.handleSubmit}
                                                        fullWidth={true}
                                                        sx={{
                                                            borderTopRightRadius: 16,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                            textTransform: 'capitalize',
                                                            paddingY: 1.5
                                                        }}
                                                        endIcon={<KeyboardArrowRight/>}
                                                        color="secondary"
                                                        variant="outlined"
                                                        disableElevation={true}>
                                                        Next
                                                    </Button>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    ) : step === 4 ? (
                        <Box>
                            <Grid container={true}>
                                <Grid item={true} xs={12} md={6} lg={4}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Stack direction="column" spacing={2}>
                                                <Box>
                                                    <Typography
                                                        mb={2}
                                                        variant="body2"
                                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                        Name
                                                    </Typography>
                                                    <FormControl fullWidth={true} variant="outlined">
                                                        <OutlinedInput
                                                            fullWidth={true}
                                                            id="name"
                                                            value={recipientDetailFormik.values.name}
                                                            name="name"
                                                            type="text"
                                                            color="secondary"
                                                            error={recipientDetailFormik.touched.name && recipientDetailFormik.errors.name}
                                                            onChange={recipientDetailFormik.handleChange}
                                                            onBlur={recipientDetailFormik.handleBlur}
                                                            placeholder="Enter recipient name"
                                                            required={true}
                                                            size="medium"
                                                            margin="dense"
                                                        />
                                                        {recipientDetailFormik.touched.name && recipientDetailFormik.errors.name && (
                                                            <FormHelperText
                                                                error={true}>
                                                                {recipientDetailFormik.errors.name}
                                                            </FormHelperText>
                                                        )}
                                                    </FormControl>
                                                </Box>

                                                <Box>
                                                    <Typography
                                                        mb={2}
                                                        variant="body2"
                                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                        Email
                                                    </Typography>
                                                    <FormControl fullWidth={true} variant="outlined">
                                                        <OutlinedInput
                                                            fullWidth={true}
                                                            id="name"
                                                            color="secondary"
                                                            value={recipientDetailFormik.values.email}
                                                            name="email"
                                                            type="email"
                                                            error={recipientDetailFormik.touched.email && recipientDetailFormik.errors.email}
                                                            onChange={recipientDetailFormik.handleChange}
                                                            onBlur={recipientDetailFormik.handleBlur}
                                                            placeholder="Enter recipient email"
                                                            required={true}
                                                            size="medium"
                                                            margin="dense"
                                                        />
                                                        {recipientDetailFormik.touched.email && recipientDetailFormik.errors.email && (
                                                            <FormHelperText
                                                                error={true}>
                                                                {recipientDetailFormik.errors.email}
                                                            </FormHelperText>
                                                        )}
                                                    </FormControl>
                                                </Box>

                                                <Box>
                                                    <Typography
                                                        mb={2}
                                                        variant="body2"
                                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                        Phone
                                                    </Typography>
                                                    <FormControl fullWidth={true} variant="outlined">
                                                        <OutlinedInput
                                                            fullWidth={true}
                                                            id="phone"
                                                            value={recipientDetailFormik.values.phone}
                                                            name="phone"
                                                            color="secondary"
                                                            type="tel"
                                                            error={recipientDetailFormik.touched.phone && recipientDetailFormik.errors.phone}
                                                            onChange={recipientDetailFormik.handleChange}
                                                            onBlur={recipientDetailFormik.handleBlur}
                                                            placeholder="Enter recipient phone"
                                                            required={true}
                                                            size="medium"
                                                            margin="dense"
                                                        />
                                                        {recipientDetailFormik.touched.phone && recipientDetailFormik.errors.phone && (
                                                            <FormHelperText
                                                                error={true}>
                                                                {recipientDetailFormik.errors.phone}
                                                            </FormHelperText>
                                                        )}
                                                    </FormControl>
                                                </Box>

                                                <Button
                                                    onClick={recipientDetailFormik.handleSubmit}
                                                    fullWidth={true}
                                                    sx={{
                                                        borderTopRightRadius: 16,
                                                        borderBottomRightRadius: 0,
                                                        borderBottomLeftRadius: 16,
                                                        borderTopLeftRadius: 0,
                                                        textTransform: 'capitalize',
                                                        paddingY: 1.5
                                                    }}
                                                    endIcon={<KeyboardArrowRight/>}
                                                    color="secondary"
                                                    variant="outlined"
                                                    disableElevation={true}>
                                                    Next
                                                </Button>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : step === 5 ? (
                        <Box>

                        </Box>
                    ): null}
                </Container>
            </Box>
        </Layout>
    )
}

export default CreateShipmentPage;
