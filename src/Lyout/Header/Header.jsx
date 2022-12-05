import styles from "./Header.module.css";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.headerTitle}>
            <div className={styles.logo}>
              <h1 className={styles.headerSize}>Neiros</h1>
            </div>
            <div className={styles.HeaderList}>
              <ul className={styles.headerListSelect}>
                <li>
                  <NavLink className={styles.active} to=".">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="solution">Решения</NavLink>
                </li>
                <li>
                  <NavLink to="tarrifs">Тарифы</NavLink>
                </li>
                <li>
                  <NavLink to="solutions">Решения</NavLink>
                </li>
                <li>
                  <NavLink to="contacts">Контакты</NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.headerButton}>
              <div>
                <BiSearch />
              </div>
              <p className={styles.text}>Вход</p>
              <button>
                <NavLink to="register">Регистрация</NavLink>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
