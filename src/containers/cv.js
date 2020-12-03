import { Component } from "react";
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
        website: 'LinkedIn',
        username: 'Your LinkedIn'
      },
      {
        id: 1,
        website: 'Devpost',
        username: 'Your Devpost'
      },
    ],
    social: [
      {
        id: 0,
        website: 'Instagram',
        username: 'Your Instagram'
      },
      {
        id: 1,
        website: 'Facebook',
        username: 'Your Facebook'
      },
    ],
    interests: ["Your Interest"],
    about: "Your about",
    skills: ["Your Skills"],
    achievements: ["Your Achievements"],
    education: ["Your Education"],
  };

  render() {
    return (
      <div className={styles.CV}>
        <div className={styles.Container}>
          <div className={styles.Left_side}>
            <Name value={this.state.name} />
            <Contacts value={this.state.contacts} />
            <Social value={this.state.social} />
            <Interests value={this.state.interests} />
          </div>
          <div className={styles.Right_side}>
            <About value={this.state.about} />
            <Skills value={this.state.skills} />
            <Achievements value={this.state.achievements} />
            <Education value={this.state.education} />
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
