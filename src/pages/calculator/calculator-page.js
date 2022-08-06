import {
    Box,
    Card,
    CardContent,
    Checkbox,
    CircularProgress,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    InputAdornment, InputLabel,
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
            mode: 'air',
            weight: '',
            height: '',
            width: '',
            length: '',
            value: '',
            quantity: '',
            fragile: false,
            insurance: false
        },
        onSubmit: (values, {resetForm}) => {
        },
        validationSchema: Yup.object().shape({
            mode: Yup.string().required('Transport mode required').oneOf(['air', 'sea']),
            weight: Yup.string().required('Weight of package required'),
            height: Yup.string().required('Height of package required'),
            width: Yup.string().required('Width of package required'),
            length: Yup.string().required('Length of package required'),
            value: Yup.string().required('Value of package required'),
            quantity: Yup.string().required('Quantity of packages required'),
            fragile: Yup.boolean(),
            insurance: Yup.boolean()
        })
    });


    const [authLoading, setAuthLoading] = useState(false);
    const [estimatedShippingCost, setEstimatedShippingCost] = useState(0);

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
                    </Grid>

                    <Divider sx={{my: 4}} light={true} variant="fullWidth"/>

                    <form onSubmit={formik.handleSubmit}>
                        <Grid container={true} spacing={4}>
                            <Grid item={true} xs={12} md={6}>
                                <Card elevation={0}>
                                    <CardContent>
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
                                                    id="weight"
                                                    value={formik.values.weight}
                                                    name="weight"
                                                    error={formik.touched.weight && formik.errors.weight}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    placeholder="Enter weight"
                                                    required={true}
                                                    size="medium"
                                                    label="Weight"
                                                    type="number"
                                                    margin="dense"
                                                />
                                                {formik.touched.weight && formik.errors.weight && (
                                                    <FormHelperText
                                                        error={true}>
                                                        {formik.errors.weight}
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
                                                                id="length"
                                                                value={formik.values.firstName}
                                                                name="length"
                                                                error={formik.touched.length && formik.errors.length}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                placeholder="Enter length"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                                type="number"
                                                                label="Length"
                                                            />
                                                            {formik.touched.length && formik.errors.length && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {formik.errors.length}
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
                                                                id="height"
                                                                value={formik.values.height}
                                                                name="height"
                                                                error={formik.touched.height && formik.errors.height}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                placeholder="Enter height"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                                type="number"
                                                                label="Height"
                                                            />
                                                            {formik.touched.height && formik.errors.height && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {formik.errors.height}
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
                                                                id="width"
                                                                type="number"
                                                                label="Width"
                                                                value={formik.values.width}
                                                                name="width"
                                                                error={formik.touched.width && formik.errors.width}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                placeholder="Enter width"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {formik.touched.width && formik.errors.width && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {formik.errors.width}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>


                                        <Box sx={{mb: 4}}>
                                            <Grid container={true} spacing={2}>
                                                <Grid item={true} xs={12} md={6}>
                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Value of Package (US Dollars)
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="value"
                                                                value={formik.values.value}
                                                                name="value"
                                                                type="number"
                                                                label="Value"
                                                                error={formik.touched.value && formik.errors.value}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                placeholder="Enter value of package"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {formik.touched.value && formik.errors.value && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {formik.errors.value}
                                                                </FormHelperText>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                </Grid>
                                                <Grid item={true} xs={12} md={6}>
                                                    <Box>
                                                        <Typography
                                                            mb={2}
                                                            variant="body2"
                                                            sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                                            Quantity of Packages
                                                        </Typography>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <OutlinedInput
                                                                fullWidth={true}
                                                                id="quantity"
                                                                value={formik.values.quantity}
                                                                name="quantity"
                                                                type="number"
                                                                label="Quantity"
                                                                error={formik.touched.quantity && formik.errors.quantity}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                placeholder="How many packages are you sending"
                                                                required={true}
                                                                size="medium"
                                                                margin="dense"
                                                            />
                                                            {formik.touched.value && formik.errors.value && (
                                                                <FormHelperText
                                                                    error={true}>
                                                                    {formik.errors.value}
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
                                                Additional Information
                                            </Typography>
                                            <Grid container={true} spacing={2}>
                                                <Grid item={true} xs={12} md={6}>
                                                    <Box>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={formik.values.fragile}
                                                                        onChange={formik.handleChange}
                                                                        name="fragile"/>
                                                                }
                                                                label={
                                                                    <Typography
                                                                        mb={1}
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: 'text.secondary',
                                                                            fontWeight: 'bold'
                                                                        }}>
                                                                        Are packages fragile?
                                                                    </Typography>
                                                                }/>
                                                        </FormControl>
                                                    </Box>
                                                </Grid>
                                                <Grid item={true} xs={12} md={6}>
                                                    <Box>
                                                        <FormControl fullWidth={true} variant="outlined">
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={formik.values.insurance}
                                                                        onChange={formik.handleChange}
                                                                        name="insurance"/>
                                                                }
                                                                label={
                                                                    <Typography
                                                                        mb={1}
                                                                        variant="body2"
                                                                        sx={{
                                                                            color: 'text.secondary',
                                                                            fontWeight: 'bold'
                                                                        }}>
                                                                        Are packages insured?
                                                                    </Typography>
                                                                }/>
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
                                                <InputLabel variant="outlined">Mode</InputLabel>
                                                <Select
                                                    variant="outlined"
                                                    fullWidth={true}
                                                    id="mode"
                                                    value={formik.values.mode}
                                                    name="mode"
                                                    error={formik.touched.mode && formik.errors.mode}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    required={true}
                                                    label="Mode"
                                                    size="medium"
                                                    margin="dense">
                                                    <MenuItem value="air">Air</MenuItem>
                                                    <MenuItem value="sea">Sea</MenuItem>
                                                </Select>
                                                {formik.touched.mode && formik.errors.mode && (
                                                    <FormHelperText
                                                        error={true}>
                                                        {formik.errors.mode}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Box>
                                    </CardContent>
                                </Card>
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
