import { useNavigate } from "react-router-dom";
import englishIcon from "./path/to/englishIcon.png"; // Replace with your image paths
import spanishIcon from "./path/to/spanishIcon.png"; // Replace with your image paths
import styles from "./LanguageSwitcher.module.css"; // Make sure to create this CSS module

function LanguageSwitcher() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLanguageChange = (language) => {
    if (language === 'en') {
      navigate('/en');
    } else if (language === 'es') {
      navigate('/es');
    }
  };

  return (
    <div>
      <img 
        className={styles.languageIcon} 
        src={englishIcon} 
        alt="English" 
        onClick={() => handleLanguageChange('en')} 
      />
      <img 
        className={styles.languageIcon} 
        src={spanishIcon} 
        alt="Español" 
        onClick={() => handleLanguageChange('es')} 
      />
    </div>
  );
}

export default LanguageSwitcher;
