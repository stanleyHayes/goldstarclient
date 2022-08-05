import {Card, Stack} from "@mui/material";
import emptyBox from "../../assets/images/not-found.png";

const Empty = ({title, message, button}) => {

    return (
        <Card variant="outlined" sx={{borderWidth: 2, borderStyle: 'dashed', pb: 5, backgroundColor: 'background.default'}}>
            <Stack direction="column" spacing={2} justifyContent="center">
                <Stack direction="row" justifyContent="center">
                    <img
                        alt="Not found logo"
                        src={emptyBox}
                        style={{objectFit: 'cover', objectPosition: 'center', width: 200, height: 'auto'}}
                    />
                </Stack>
                {title}
                {message}
                {button}
            </Stack>
        </Card>
    )
}

export default Empty;
