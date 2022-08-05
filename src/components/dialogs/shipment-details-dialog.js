import {Button, Dialog, DialogActions, DialogContent} from "@mui/material";

const ShipmentDetailsDialog = ({open, onClose, shipment}) => {

    return (
        <Dialog open={open} onClose={onClose} >
            <DialogContent>

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} fullWidth={true} variant="text" color="secondary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ShipmentDetailsDialog;
