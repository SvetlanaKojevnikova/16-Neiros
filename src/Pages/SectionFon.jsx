import styles from "../Pages/SectionFon.module.css";

function SectionFon() {
  return (
    <section className={styles.section1}>
      <div className={styles.container}>
        <div className={styles.sectionImg}>
          <div className={styles.position}>
            <ul className={styles.sectionList1}>
              <li className={styles.list}>Главная</li>
              <li className={styles.list}>Блок </li>
              <li className={styles.list}> Сайт</li>
            </ul>
            <div className={styles.buttons}>
              <button className={styles.btn}>Бизнес</button>
              <button className={styles.btn}>Маркетинг</button>
              <button className={styles.btn}>How to</button>
            </div>
            <div className={styles.text}>
              <p>
                Как создать с нуля своими
                <br /> силами:подробный гайд для <br />
                новичков
              </p>
            </div>
            <div>
              <ul className={styles.sectionList2}>
                <li>04/07/2022</li>
                <li>Обсудить</li>
                <li>68 минут</li>
                <li>1</li>
                <li>Поделиться</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFon;
