import {Box, Container, Typography} from "@mui/material";
import React from "react";

const Copyright = () => {

    return (
        <Box>
            <Box sx={{padding: 4, backgroundColor: 'background.paper'}}>
                <Container>
                    <Typography
                        gutterBottom={true}
                        variant="body2"
                        align="center"
                        sx={{color: 'text.primary'}}>
                        Gold Star Security and Shipping Company Ltd. Vault storage keeps your investments secure
                        .Providing
                        the
                        most prestigious offerings in Customer Service, Security, Privacy, Gold exchange and Exclusivity
                        to
                        high
                        end clientele.GET IN TOUCH WITH US NOW We are always ready to respond to your enquiries 24/7
                        online.
                        Feel free to write to us when you need us..
                        Secure Your Valuables Today! Get in Touch
                    </Typography>
                    <Typography variant="h6" align="center" sx={{color: 'text.primary'}}>
                        Secure Your Valuables Today! Get in Touch
                    </Typography>
                </Container>
            </Box>
            <Box sx={{padding: 4, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography variant="body2" align="center" sx={{color: 'text.secondary'}}>
                        &copy;Copyright © 2015 Gold Star Security and Shipping Company Limited. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default Copyright;
