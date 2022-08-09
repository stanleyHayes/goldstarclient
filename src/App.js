import './App.css';
import DashboardPage from "./pages/dashboard/dashboard-page";
import HomePage from "./pages/home/home-page";
import TrackingPage from "./pages/track/tracking-page";
import CalculatorPage from "./pages/calculator/calculator-page";
import NotFoundPage from "./pages/404/not-found-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import LoginPage from "./pages/authentication/login-page";
import VerifyLoginOtpPage from "./pages/authentication/verify-login-otp-page";
import RegisterPage from "./pages/authentication/register-page";
import VerificationAcknowledgmentPage from "./pages/authentication/verification-acknowledgment-page";
import VerifyAccountPage from "./pages/authentication/verify-account-page";
import {Route, Routes} from "react-router";
import {THEMES} from "./utils/themes";
import {ThemeProvider} from "@mui/material";
import {selectUI} from "./redux/features/ui/ui-slice";
import {useSelector} from "react-redux";
import BillingPage from "./pages/billing/billing-page";
import AboutPage from "./pages/about/about-page";
import HelpPage from "./pages/about/help-page";
import TestimonialsPage from "./pages/about/testimonials-page";
import ProfilePage from "./pages/account/profile-page";
import SettingsPage from "./pages/account/settings-page";
import CreateShipmentPage from "./pages/shipments/create-shipment-page";
import ShipmentDetailPage from "./pages/shipments/shipment-detail-page";
import ShipmentsPage from "./pages/shipments/shipments-page";
import ContactPage from "./pages/about/contact-page";
import WelcomePage from "./pages/authentication/welcome-page";
import UpdateProfilePage from "./pages/account/update-profile-page";
import ChangePasswordPage from "./pages/account/change-password-page";

function App() {
  const {themeVariant} = useSelector(selectUI);
  const theme = themeVariant === 'dark' ? THEMES.darkTheme : THEMES.lightTheme;

  return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<HomePage/>} exact={true} path="/"/>
          <Route element={<DashboardPage/>} exact={true} path="/dashboard"/>
          <Route element={<ContactPage/>} exact={true} path="/contact"/>
          <Route element={<TrackingPage/>} exact={true} path="/tracking"/>
          <Route element={<CalculatorPage/>} exact={true} path="/calculator"/>
          <Route element={<BillingPage/>} exact={true} path="/billing"/>
          <Route element={<CreateShipmentPage/>} exact={true} path="/shipment/new"/>
          <Route element={<ShipmentDetailPage/>} exact={true} path="/shipments/:shipmentID"/>
          <Route element={<ShipmentsPage/>} exact={true} path="/shipments"/>
          <Route element={<AboutPage/>} exact={true} path="/about"/>
          <Route element={<HelpPage/>} exact={true} path="/help"/>
          <Route element={<ProfilePage/>} exact={true} path="/profile"/>
          <Route element={<UpdateProfilePage/>} exact={true} path="/update-profile"/>
          <Route element={<ChangePasswordPage/>} exact={true} path="/change-password"/>
          <Route element={<SettingsPage/>} exact={true} path="/settings"/>
          <Route element={<TestimonialsPage/>} exact={true} path="/testimonials"/>
          <Route element={<VerifyAccountPage/>} exact={true} path="/auth/verify/:token"/>
          <Route element={<VerificationAcknowledgmentPage/>} exact={true} path="/account/verify/success"/>
          <Route element={<RegisterPage/>} exact={true} path="/auth/register"/>
          <Route element={<VerifyLoginOtpPage/>} exact={true} path="/auth/otp/:token/verify"/>
          <Route element={<LoginPage/>} exact={true} path="/auth/login"/>
          <Route element={<ResetPasswordPage/>} exact={true} path="/auth/reset-password"/>
          <Route element={<ForgotPasswordPage/>} exact={true} path="/auth/forgot-password"/>
          <Route element={<WelcomePage/>} exact={true} path="/getting-started"/>
          <Route element={<NotFoundPage/>} exact={true} path="*"/>
        </Routes>
      </ThemeProvider>
  );
}

export default App;
