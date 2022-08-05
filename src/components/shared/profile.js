import {Avatar, Box, Card, Link, Stack, Tooltip, Typography} from "@mui/material";
import {CallOutlined, MailOutline} from "@mui/icons-material";
import {UTILS} from "../../utils/utils";
import React from "react";

const Profile = ({recipient}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                borderTopRightRadius: 16,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 16,
                borderTopLeftRadius: 0,
                py: 1
            }}>
            <Stack
                justifyContent="space-between"
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{px: 2}}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                        sx={{
                            cursor: 'pointer',
                            color: 'secondary.main',
                            borderTopRightRadius: 16,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 16,
                            borderTopLeftRadius: 0,
                            padding: 0.5,
                            fontSize: 20,
                            backgroundColor: 'light.secondary'
                        }}>
                        <Typography
                            variant="h6"
                            sx={{color: 'secondary.main'}}>
                            {UTILS.getInitials(recipient.name)}
                        </Typography>
                    </Avatar>
                    <Box>
                        <Typography
                            variant="body2"
                            sx={{color: 'text.primary'}}>
                            {recipient.name}
                        </Typography>
                    </Box>
                    <Tooltip title={`Email ${recipient.name}`}>
                        <Link href={`tel:${recipient.phone}`} underline="none">
                            <MailOutline
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary',
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 0,
                                }}/>
                        </Link>
                    </Tooltip>
                    <Tooltip title={`Call ${recipient.name}`}>
                        <Link href={`tel:${recipient.phone}`} underline="none">
                            <CallOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary',
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 0,
                                }}/>
                        </Link>
                    </Tooltip>
                </Stack>
            </Stack>
        </Card>
    )
}

export default Profile;
