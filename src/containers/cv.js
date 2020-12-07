import { Component } from "react";
import { Button } from "@material-ui/core";

import Contacts from "../components/contacts";
import Interests from "../components/interests";
import Name from "../components/name";
import Social from "../components/social";
import About from "../components/about";
import Skills from "../components/skills";
import Achievements from "../components/achievements";
import Education from "../components/education";

import styles from "./cv.module.css";

class CV extends Component {
  state = {
    name: "Your Name",
    contacts: [
      {
        id: 0,
        website: "LinkedIn",
        username: "Your LinkedIn",
      },
      {
        id: 1,
        website: "Devpost",
        username: "Your Devpost",
      },
    ],
    social: [
      {
        id: 0,
        website: "Instagram",
        username: "Your Instagram",
      },
      {
        id: 1,
        website: "Facebook",
        username: "Your Facebook",
      },
    ],
    interests: ["Your Interest"],
    about: "Your about",
    skills: ["Your Skills"],
    achievements: ["Your Achievements"],
    education: ["Your Education"],
    edit: false,
  };

  editChangeHandler = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  render() {
    return (
      <>
        <div className={styles.CV}>
          <div className={styles.Container}>
            <div className={styles.Left_side}>
              <Name
                value={this.state.name}
                edit={this.state.edit}
              />
              <Contacts
                value={this.state.contacts}
                edit={this.state.edit}
              />
              <Social
                value={this.state.social}
                edit={this.state.edit}
              />
              <Interests
                value={this.state.interests}
                edit={this.state.edit}
              />
            </div>
            <div className={styles.Right_side}>
              <About
                value={this.state.about}
                edit={this.state.edit}
              />
              <Skills
                value={this.state.skills}
                edit={this.state.edit}
              />
              <Achievements
                value={this.state.achievements}
                edit={this.state.edit}
              />
              <Education
                value={this.state.education}
                edit={this.state.edit}
              />
            </div>
          </div>
        </div>
        <div className={styles.Buttons}>
          {this.state.edit ? (
            <>
              <Button
                style={{ marginRight: "10px" }}
                variant="contained"
                onClick={this.editChangeHandler}
              >
                Discard
              </Button>
              <Button variant="contained" onClick={this.editChangeHandler}>
                Save
              </Button>
            </>
          ) : (
            <Button variant="contained" onClick={this.editChangeHandler}>
              Edit
            </Button>
          )}
        </div>
      </>
    );
  }
}

export default CV;
