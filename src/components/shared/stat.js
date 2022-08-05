import {Card, CardContent, Stack} from "@mui/material";

const Stat = ({icon, title, value, backgroundColor, percentage}) => {
    return (
        <Card
            elevation={0}
            sx={{
                backgroundColor,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 16,
                borderTopLeftRadius: 0,
            }}>
            <CardContent>
                <Stack sx={{mb: 1}} direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="column" spacing={1}>
                        {icon}{value}
                    </Stack>
                    {percentage}
                </Stack>
                {title}
            </CardContent>
        </Card>
    )
}

export default Stat;
