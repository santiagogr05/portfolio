import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Button.Styles.module.css";

function LanguageButton() {
  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // Hook to navigate programmatically

  const isEnglish = location.pathname.startsWith("/en");
  const isSpanish = location.pathname.startsWith("/es");

  const handleLanguageChange = (language) => {
    if (language === 'en') {
      navigate('/en');
    } else if (language === 'es') {
      navigate('/es');
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <button 
        className={`${styles.languageButton} ${isEnglish ? styles.active : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </button>
      <button 
        className={`${styles.languageButton} ${isSpanish ? styles.active : ''}`}
        onClick={() => handleLanguageChange('es')}
      >
        ES
      </button>
    </div>
  );
}

export default LanguageButton;
