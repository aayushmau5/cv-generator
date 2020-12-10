import { Button } from "@material-ui/core";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>CV Generator</h1>
      <p>
        A CV Generator made using react, enter the required fields and download
        a PDF of your CV.
      </p>
      <Button
        variant="contained"
        href="https://github.com/aayushmau5/cv-generator"
      >
        Github
      </Button>
    </header>
  );
};

export default Header;
