import styles from "./footer.module.css";
import { Button } from "@material-ui/core";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Button variant="contained" href="https://github.com/aayushmau5/cv-generator">
        Github
      </Button>
    </footer>
  );
};

export default Footer;
