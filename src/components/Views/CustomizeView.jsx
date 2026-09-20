import styles from "./views.module.css";

export default function CustomizeView() {
  return (
    <div className={styles.view}>
      <header className={styles.header}>
        <div>
          <h1>CUSTOMIZAR</h1>
          <p>Choose your application skin</p>
        </div>
      </header>

      <p>
        Aqui ficarão os temas da aplicação.
      </p>

      <ul>
        <li>Windows XP</li>
        <li>Dark</li>
        <li>Light</li>
        <li>Halloween</li>
      </ul>
    </div>
  );
}