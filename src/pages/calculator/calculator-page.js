import {
    Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    Typography
} from "@mui/material";
import Layout from "../../components/layout/layout";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useState} from "react";
import {PersonOutlined} from "@mui/icons-material";
import currencyFormatter from "currency-formatter";
import {LoadingButton} from "@mui/lab";

const CalculatorPage = () => {

    const formik = useFormik({
        validateOnChange: true,
        initialValues: {
            inputType: 'input',
            productType: '',
            weight: {
                amount: '',
                unit: 'g'
            },
            height: {
                amount: '',
                unit: 'cm'
            },
            width: {
                amount: '',
                unit: 'cm'
            },
            length: {
                amount: '',
                unit: 'cm'
            },
        },
        onSubmit: (values, {resetForm}) => {
        },
        validationSchema: Yup.object().shape({})
    });


    const [inputType, setInputType] = useState('input');
    const [authLoading, setAuthLoading] = useState(false);
    const [estimatedShippingCost, setEstimatedShippingCost] = useState(0);
    const handleInputTypeChange = event => {
        setInputType(event.target.value);
    }

    return (
        <Layout>
            <Box sx={{py: 4}}>
                <Container maxWidth="lg">
                    <Grid container={true} spacing={2} justifyContent="space-between">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h4" sx={{color: 'secondary.main'}}>
                                Calculator
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md={2}>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel variant="outlined">Input Type</InputLabel>
                                <Select
                                    size="medium"
                                    margin="dense"
                                    name="inputType"
                                    fullWidth={true}
                                    label="Input Type"
                                    value={inputType}
                                    color="secondary"
                                    onChange={handleInputTypeChange}
                                    variant="outlined">
                                    <MenuItem value="input">Input</MenuItem>
                                    <MenuItem value="slider">Slider</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Divider sx={{my: 4}} light={true} variant="fullWidth"/>

                    <form onSubmit={formik.handleSubmit}>
                        <Grid container={true} spacing={4}>
                            <Grid item={true} xs={12} md={6}>
                                {inputType === 'input' ? (
                                    <Card elevation={0}>
                                        <CardContent>
                                            <Box sx={{mb: 4}}>
                                                <Typography
                                                    mb={2}
                                                    variant="body2"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    Type of Product
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        id="firstName"
                                                        value={formik.values.firstName}
                                                        name="firstName"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <PersonOutlined
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'text.primary',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.firstName && formik.errors.firstName}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter first name"
                                                        required={true}
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.firstName && formik.errors.firstName && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.firstName}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>
                                            <Box sx={{mb: 4}}>
                                                <Typography
                                                    mb={2}
                                                    variant="body2"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    Weight (KG)
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        id="firstName"
                                                        value={formik.values.firstName}
                                                        name="firstName"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <PersonOutlined
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'text.primary',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.firstName && formik.errors.firstName}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter first name"
                                                        required={true}
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.firstName && formik.errors.firstName && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.firstName}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>
                                            <Box sx={{mb: 4}}>
                                                <Typography
                                                    mb={2}
                                                    variant="body2"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    Package Dimensions
                                                </Typography>

                                                <Grid container={true} spacing={2}>
                                                    <Grid item={true} xs={12} md={4}>
                                                        <Box>
                                                            <Typography
                                                                mb={2}
                                                                variant="body2"
                                                                sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                                Length (CM)
                                                            </Typography>
                                                            <FormControl fullWidth={true} variant="outlined">
                                                                <OutlinedInput
                                                                    fullWidth={true}
                                                                    id="firstName"
                                                                    value={formik.values.firstName}
                                                                    name="firstName"
                                                                    endAdornment={
                                                                        <InputAdornment
                                                                            position="end">
                                                                            <PersonOutlined
                                                                                sx={{
                                                                                    cursor: 'pointer',
                                                                                    color: 'text.primary',
                                                                                    padding: 1,
                                                                                    fontSize: 24,
                                                                                }}
                                                                            />
                                                                        </InputAdornment>
                                                                    }
                                                                    error={formik.touched.firstName && formik.errors.firstName}
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    placeholder="Enter first name"
                                                                    required={true}
                                                                    size="medium"
                                                                    margin="dense"
                                                                />
                                                                {formik.touched.firstName && formik.errors.firstName && (
                                                                    <FormHelperText
                                                                        error={true}>
                                                                        {formik.errors.firstName}
                                                                    </FormHelperText>
                                                                )}
                                                            </FormControl>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item={true} xs={12} md={4}>
                                                        <Box>
                                                            <Typography
                                                                mb={2}
                                                                variant="body2"
                                                                sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                                Height (CM)
                                                            </Typography>
                                                            <FormControl fullWidth={true} variant="outlined">
                                                                <OutlinedInput
                                                                    fullWidth={true}
                                                                    id="firstName"
                                                                    value={formik.values.firstName}
                                                                    name="firstName"
                                                                    endAdornment={
                                                                        <InputAdornment
                                                                            position="end">
                                                                            <PersonOutlined
                                                                                sx={{
                                                                                    cursor: 'pointer',
                                                                                    color: 'text.primary',
                                                                                    padding: 1,
                                                                                    fontSize: 24,
                                                                                }}
                                                                            />
                                                                        </InputAdornment>
                                                                    }
                                                                    error={formik.touched.firstName && formik.errors.firstName}
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    placeholder="Enter first name"
                                                                    required={true}
                                                                    size="medium"
                                                                    margin="dense"
                                                                />
                                                                {formik.touched.firstName && formik.errors.firstName && (
                                                                    <FormHelperText
                                                                        error={true}>
                                                                        {formik.errors.firstName}
                                                                    </FormHelperText>
                                                                )}
                                                            </FormControl>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item={true} xs={12} md={4}>
                                                        <Box>
                                                            <Typography
                                                                mb={2}
                                                                variant="body2"
                                                                sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                                Width (CM)
                                                            </Typography>
                                                            <FormControl fullWidth={true} variant="outlined">
                                                                <OutlinedInput
                                                                    fullWidth={true}
                                                                    id="firstName"
                                                                    value={formik.values.firstName}
                                                                    name="firstName"
                                                                    endAdornment={
                                                                        <InputAdornment
                                                                            position="end">
                                                                            <PersonOutlined
                                                                                sx={{
                                                                                    cursor: 'pointer',
                                                                                    color: 'text.primary',
                                                                                    padding: 1,
                                                                                    fontSize: 24,
                                                                                }}
                                                                            />
                                                                        </InputAdornment>
                                                                    }
                                                                    error={formik.touched.firstName && formik.errors.firstName}
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    placeholder="Enter first name"
                                                                    required={true}
                                                                    size="medium"
                                                                    margin="dense"
                                                                />
                                                                {formik.touched.firstName && formik.errors.firstName && (
                                                                    <FormHelperText
                                                                        error={true}>
                                                                        {formik.errors.firstName}
                                                                    </FormHelperText>
                                                                )}
                                                            </FormControl>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>

                                            <Box sx={{mb: 4}}>
                                                <Typography
                                                    mb={2}
                                                    variant="body2"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    Value of Package (US Dollars)
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        id="firstName"
                                                        value={formik.values.firstName}
                                                        name="firstName"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <PersonOutlined
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'text.primary',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.firstName && formik.errors.firstName}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter first name"
                                                        required={true}
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.firstName && formik.errors.firstName && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.firstName}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Box sx={{mb: 4}}>
                                                <Typography
                                                    mb={2}
                                                    variant="body2"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    Additional Information
                                                </Typography>
                                                <Grid container={true} spacing={2}>
                                                    <Grid item={true} xs={12} md={6}>
                                                        <Box>
                                                            <Typography
                                                                mb={1}
                                                                variant="body2"
                                                                sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                                Fragile
                                                            </Typography>
                                                            <FormControl fullWidth={true} variant="outlined">
                                                                <OutlinedInput
                                                                    fullWidth={true}
                                                                    id="firstName"
                                                                    value={formik.values.firstName}
                                                                    name="firstName"
                                                                    endAdornment={
                                                                        <InputAdornment
                                                                            position="end">
                                                                            <PersonOutlined
                                                                                sx={{
                                                                                    cursor: 'pointer',
                                                                                    color: 'text.primary',
                                                                                    padding: 1,
                                                                                    fontSize: 24,
                                                                                }}
                                                                            />
                                                                        </InputAdornment>
                                                                    }
                                                                    error={formik.touched.firstName && formik.errors.firstName}
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    placeholder="Enter first name"
                                                                    required={true}
                                                                    size="medium"
                                                                    margin="dense"
                                                                />
                                                                {formik.touched.firstName && formik.errors.firstName && (
                                                                    <FormHelperText
                                                                        error={true}>
                                                                        {formik.errors.firstName}
                                                                    </FormHelperText>
                                                                )}
                                                            </FormControl>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item={true} xs={12} md={6}>
                                                        <Box>
                                                            <Typography
                                                                mb={1}
                                                                variant="body2"
                                                                sx={{color: 'text.secondary', fontWeight: 'bold'}}>
                                                                Insurance
                                                            </Typography>
                                                            <FormControl fullWidth={true} variant="outlined">
                                                                <OutlinedInput
                                                                    fullWidth={true}
                                                                    id="firstName"
                                                                    value={formik.values.firstName}
                                                                    name="firstName"
                                                                    endAdornment={
                                                                        <InputAdornment
                                                                            position="end">
                                                                            <PersonOutlined
                                                                                sx={{
                                                                                    cursor: 'pointer',
                                                                                    color: 'text.primary',
                                                                                    padding: 1,
                                                                                    fontSize: 24,
                                                                                }}
                                                                            />
                                                                        </InputAdornment>
                                                                    }
                                                                    error={formik.touched.firstName && formik.errors.firstName}
                                                                    onChange={formik.handleChange}
                                                                    onBlur={formik.handleBlur}
                                                                    placeholder="Enter first name"
                                                                    required={true}
                                                                    size="medium"
                                                                    margin="dense"
                                                                />
                                                                {formik.touched.firstName && formik.errors.firstName && (
                                                                    <FormHelperText
                                                                        error={true}>
                                                                        {formik.errors.firstName}
                                                                    </FormHelperText>
                                                                )}
                                                            </FormControl>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>

                                            <Box sx={{mb: 4}}>
                                                <Typography
                                                    mb={2}
                                                    variant="body2"
                                                    sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                    Mode of Transport
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        id="firstName"
                                                        value={formik.values.firstName}
                                                        name="firstName"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <PersonOutlined
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'text.primary',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.firstName && formik.errors.firstName}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter first name"
                                                        required={true}
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.firstName && formik.errors.firstName && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.firstName}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    <Card elevation={0}>
                                        <CardContent>

                                        </CardContent>
                                    </Card>
                                )}
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Card elevation={0}>
                                    <CardContent>
                                        <Stack direction="column" spacing={2}>
                                            <Typography variant="h5" sx={{color: 'text.primary'}} align="center">
                                                Estimated Shipping Cost
                                            </Typography>
                                            <Typography variant="h3" sx={{color: 'secondary.main'}} align="center">
                                                {currencyFormatter.format(estimatedShippingCost, {code: 'USD'})}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{color: 'text.primary', fontWeight: 'bold'}}
                                                align="center">
                                                What this means:
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{color: 'text.secondary'}}
                                                align="center">
                                                This price represents a non-guaranteed estimate of your
                                                international shipping cost based on the factors you have input.
                                            </Typography>

                                            <LoadingButton
                                                onClick={formik.handleSubmit}
                                                type="submit"
                                                size="large"
                                                color="secondary"
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    py: 1.2,
                                                    borderTopRightRadius: 32,
                                                    borderBottomRightRadius: 0,
                                                    borderBottomLeftRadius: 32,
                                                    borderTopLeftRadius: 32,
                                                }}
                                                fullWidth={false}
                                                loadingPosition="start"
                                                startIcon={authLoading ?
                                                    <CircularProgress color="secondary"/> : null}
                                                loadingIndicator={authLoading ?
                                                    <CircularProgress color="secondary"/> : null}
                                                loading={authLoading}
                                                variant="contained"
                                                disableElevation={true}>
                                                {authLoading ? 'Estimating Shipping...' : 'Estimate Shipping'}
                                            </LoadingButton>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Box>
        </Layout>
    )
}

export default CalculatorPage;
