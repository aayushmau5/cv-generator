import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const Modal = (props) => {
  return (
    <Dialog
      open={props.show}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">State Name</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Something"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="name"
          label="Something"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>
          Cancel
        </Button>
        <Button onClick={props.handleClose}>
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
