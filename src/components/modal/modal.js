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
            id="started"
            label="Year Started"
            type="number"
            onChange={(e) => {
              setState({ ...state, yearStarted: e.target.value });
            }}
            fullWidth
          />
          <TextField
            margin="dense"
            id="ended"
            label="Till"
            type="number"
            onChange={(e) => setState({ ...state, yearEnded: e.target.value })}
            fullWidth
          />
          <TextField
            margin="dense"
            id="company"
            label="Company"
            type="text"
            onChange={(e) => setState({ ...state, company: e.target.value })}
            fullWidth
          />
          <TextField
            margin="dense"
            id="postion"
            label="Position"
            type="text"
            onChange={(e) => setState({ ...state, position: e.target.value })}
            fullWidth
          />
          <TextField
            margin="dense"
            id="summary"
            label="Summary"
            type="text"
            onChange={(e) => setState({ ...state, summary: e.target.value })}
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
            id="place"
            label="Contact Place"
            onChange={(e) => setState({ ...state, place: e.target.value })}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="value"
            label="Value"
            type="text"
            onChange={(e) => setState({ ...state, value: e.target.value })}
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
          onChange={(e) => setState({ interest: e.target.value })}
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
          onChange={(e) => setState({ skill: e.target.value })}
          type="text"
          fullWidth
        />
      );
      break;
    case "education":
      textfield = (
        <>
          <TextField
            autoFocus
            margin="dense"
            id="started"
            label="Year Started"
            onChange={(e) =>
              setState({ ...state, yearStarted: e.target.value })
            }
            type="number"
            fullWidth
          />
          <TextField
            margin="dense"
            id="ended"
            label="Till"
            onChange={(e) => setState({ ...state, yearEnded: e.target.value })}
            type="number"
            fullWidth
          />
          <TextField
            margin="dense"
            id="place"
            label="Place"
            onChange={(e) => setState({ ...state, place: e.target.value })}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="title"
            label="Title"
            onChange={(e) => setState({ ...state, title: e.target.value })}
            type="text"
            fullWidth
          />
        </>
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
