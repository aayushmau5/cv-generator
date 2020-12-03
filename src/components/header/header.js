import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>CV Generator</h1>
      <p>A CV Generator made using react, enter the required fields and download a PDF of your CV.</p>
    </header>
  );
};

export default Header;
