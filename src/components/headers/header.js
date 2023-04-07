import {AppBar, Box} from "@mui/material";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = () => {
    return (
        <AppBar
            square={true}
            position="sticky"
            variant="elevation"
            elevation={0}
            sx={{
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: 'divider',
                backgroundColor: "background.transparent",
                backdropFilter: "blur(5.5px)"
            }}>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DesktopHeader/>
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <MobileHeader/>
            </Box>
        </AppBar>
    )
}

export default Header;
