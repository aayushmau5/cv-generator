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

  nameChangeHandler = (value) => {
    this.setState({
      name: value,
    });
  };

  aboutChangeHandler = (value) => {
    this.setState({
      about: value,
    });
  };

  contactsChangeHandler = (value) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: "hello",
          website: value.website,
          username: value.username,
        },
      ],
    });
  };

  socialChangeHandler = (value) => {
    this.setState({
      social: [
        ...this.state.social,
        {
          id: "hello",
          website: value.website,
          username: value.username,
        },
      ],
    });
  };

  interestsChangeHandler = (value) => {
    this.setState({
      interests: [...this.state.interests, value],
    });
  };

  skillsChangeHandler = (value) => {
    this.setState({
      skills: [...this.state.skills, value],
    });
  };

  achievementsChangeHandler = (value) => {
    this.setState({
      achievements: [...this.state.achievements, value],
    });
  };

  educationChangeHandler = (value) => {
    this.setState({
      education: [...this.state.education, value],
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
                showEditor={this.state.edit}
                editState={this.nameChangeHandler}
              />
              <Contacts
                value={this.state.contacts}
                showEditor={this.state.edit}
                editState={this.contactsChangeHandler}
              />
              <Social
                value={this.state.social}
                showEditor={this.state.edit}
                editState={this.socialChangeHandler}
              />
              <Interests
                value={this.state.interests}
                showEditor={this.state.edit}
                editState={this.interestsChangeHandler}
              />
            </div>
            <div className={styles.Right_side}>
              <About
                value={this.state.about}
                showEditor={this.state.edit}
                editState={this.aboutChangeHandler}
              />
              <Skills
                value={this.state.skills}
                showEditor={this.state.edit}
                editState={this.skillsChangeHandler}
              />
              <Achievements
                value={this.state.achievements}
                showEditor={this.state.edit}
                editState={this.achievementsChangeHandler}
              />
              <Education
                value={this.state.education}
                showEditor={this.state.edit}
                editState={this.educationChangeHandler}
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
