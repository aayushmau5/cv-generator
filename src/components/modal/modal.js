import { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Modal = (props) => {
  let textfield;
  const [state, setState] = useState("");

  switch (props.title.toLowerCase()) {
    case "name":
      textfield = (
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          onChange={(e) => setState(e.target.value)}
          fullWidth
        />
      );
      break;
    case "about":
      textfield = (
        <TextField
          autoFocus
          margin="dense"
          id="about"
          label="About"
          type="text"
          onChange={(e) => setState(e.target.value)}
          fullWidth
          multiline
        />
      );
      break;
    case "achievements":
      textfield = (
        <>
          <TextField
            autoFocus
            margin="dense"
            id="achievements"
            label="Achievemets"
            type="text"
            onChange={(e) => setState(e.target.value)}
            fullWidth
            multiline
          />
        </>
      );
      break;
    case "contacts":
      textfield = (
        <>
          <TextField
            autoFocus
            margin="dense"
            id="website"
            label="Website"
            onChange={(e) => setState({ ...state, website: e.target.value })}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="username"
            label="Username"
            type="text"
            onChange={(e) => setState({ ...state, username: e.target.value })}
            fullWidth
          />
        </>
      );
      break;
    case "socials":
      textfield = (
        <>
          <TextField
            autoFocus
            margin="dense"
            id="website"
            label="Website"
            onChange={(e) => setState({ ...state, website: e.target.value })}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="username"
            label="Username"
            onChange={(e) => setState({ ...state, username: e.target.value })}
            type="text"
            fullWidth
          />
        </>
      );
      break;
    case "interests":
      textfield = (
        <TextField
          autoFocus
          margin="dense"
          id="interests"
          label="Interest"
          onChange={(e) => setState(e.target.value)}
          type="text"
          fullWidth
        />
      );
      break;
    case "skills":
      textfield = (
        <TextField
          autoFocus
          margin="dense"
          id="skills"
          label="Skills"
          onChange={(e) => setState(e.target.value)}
          type="text"
          fullWidth
        />
      );
      break;
    case "education":
      textfield = (
        <TextField
          autoFocus
          margin="dense"
          id="education"
          label="Education"
          onChange={(e) => setState(e.target.value)}
          type="text"
          fullWidth
        />
      );
      break;

    default:
      textfield = (
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Something"
          type="text"
          fullWidth
          multiline
        />
      );
  }

  return (
    <Dialog
      open={props.show}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogContent>{textfield}</DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            props.editState(state);
            props.handleClose();
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
