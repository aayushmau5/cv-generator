import { Component } from "react";
import { Button } from "@material-ui/core";
import { nanoid } from "nanoid";

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
        place: "LinkedIn",
        value: "Your LinkedIn",
      },
      {
        id: 1,
        place: "email",
        value: "Your email",
      },
      {
        id: 2,
        place: "Phone",
        value: "Your Phone",
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
    interests: [
      {
        id: 0,
        interest: "First Interest",
      },
      {
        id: 1,
        interest: "Second Interest",
      },
    ],
    about: "Your about",
    skills: [
      {
        id: 0,
        skill: "Javascript",
      },
      {
        id: 1,
        skill: "Nodejs",
      },
    ],
    achievements: [
      {
        id: 0,
        year: "2020-2023",
        company: "Company",
        position: "Position 1",
        summary: "Did this and that in my job there",
      },
      {
        id: 1,
        year: "2021-2024",
        company: "Company 2",
        position: "Position 3",
        summary: "Did this and that in my job there",
      },
    ],
    education: [
      {
        id: 0,
        year: "2015-2016",
        place: "School",
        title: "Did study there",
      },
      {
        id: 1,
        year: "2015-2016",
        place: "College",
        title: "Bachelor of engineering",
      },
    ],
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
          id: nanoid(10),
          place: value.place,
          value: value.value,
        },
      ],
    });
  };

  socialChangeHandler = (value) => {
    this.setState({
      social: [
        ...this.state.social,
        {
          id: nanoid(10),
          website: value.website,
          username: value.username,
        },
      ],
    });
  };

  interestsChangeHandler = (value) => {
    this.setState({
      interests: [
        ...this.state.interests,
        {
          id: nanoid(10),
          interest: value.interest,
        },
      ],
    });
  };

  skillsChangeHandler = (value) => {
    this.setState({
      skills: [
        ...this.state.skills,
        {
          id: nanoid(10),
          skill: value.skill,
        },
      ],
    });
  };

  achievementsChangeHandler = (value) => {
    this.setState({
      achievements: [
        ...this.state.achievements,
        {
          id: nanoid(10),
          year: `${value.yearStarted} - ${value.yearEnded}`,
          company: value.company,
          position: value.position,
          summary: value.summary,
        },
      ],
    });
  };

  educationChangeHandler = (value) => {
    this.setState({
      education: [
        ...this.state.education,
        {
          id: nanoid(10),
          year: `${value.yearStarted} - ${value.yearEnded}`,
          place: value.place,
          title: value.title,
        },
      ],
    });
  };

  deleteStateHandler = (state, id) => {
    const newState = this.state[state].filter((obj) => obj.id !== id);
    this.setState({
      [state]: newState,
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
                deleteState={this.deleteStateHandler}
              />
              <Social
                value={this.state.social}
                showEditor={this.state.edit}
                editState={this.socialChangeHandler}
                deleteState={this.deleteStateHandler}
              />
              <Interests
                value={this.state.interests}
                showEditor={this.state.edit}
                editState={this.interestsChangeHandler}
                deleteState={this.deleteStateHandler}
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
                deleteState={this.deleteStateHandler}
              />
              <Achievements
                value={this.state.achievements}
                showEditor={this.state.edit}
                editState={this.achievementsChangeHandler}
                deleteState={this.deleteStateHandler}
              />
              <Education
                value={this.state.education}
                showEditor={this.state.edit}
                editState={this.educationChangeHandler}
                deleteState={this.deleteStateHandler}
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
