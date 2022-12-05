import { useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    mail: "",
    tel: "",
    password: "",
  });
  const onSubmitHandle = (event) => {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  };
  const changeInputHandle = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };

  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <div className={styles.register__section}>
          <div className={styles.register__title}>
            <h1>Neiros</h1>
            <h2>Регистрация</h2>
          </div>
          <form onSubmit={onSubmitHandle} className={styles.register__inputs}>
            <input
              type="text"
              placeholder="Имя"
              value={data.name}
              onChange={(e) => changeInputHandle(e, "username")}
            />
            <input
              type="mail"
              placeholder="E-mail"
              value={data.mail}
              onChange={(e) => changeInputHandle(e, "mail")}
            />
            <input
              type="tel"
              placeholder="Телефон"
              value={data.telephon}
              onChange={(e) => changeInputHandle(e, "tel")}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={data.password}
              onChange={(e) => changeInputHandle(e, "password")}
            />
            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
