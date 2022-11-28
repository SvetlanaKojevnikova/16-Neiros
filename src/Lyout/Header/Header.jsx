import styles from "./Header.module.css";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.headerTitle}>
          <div className={styles.logo}>
            <h1 className={styles.headerSize}>Neiros</h1>
          </div>
          <div className={styles.HeaderList}>
            <ul className={styles.headerListSelect}>
              <li className={styles.text}>
                <select className={`${styles.select} ${styles.text}`}>
                  <option value="Решения">Решения</option>
                  <option value="Коллтрекинг">Коллтрекинг</option>
                  <option value="Аналитика">Аналитика</option>
                  <option value="Консультант">Консультант</option>
                </select>
              </li>
              <li>Тарифы</li>
              <li>
                <select className={styles.select}>
                  <option value="Информация">Решения</option>
                  <option value="Блог">Блог</option>
                  <option value="Партнерская программа">
                    Партнерская программа
                  </option>
                  <option value="Инструменты">Инструменты</option>
                </select>
              </li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className={styles.headerButton}>
            <div>
              <BiSearch />
            </div>
            <p className={styles.text}>Вход</p>
            <button className={styles.button}>Регистрация</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
