import styles from "./views.module.css";

export default function AboutView() {
  return (
    <div className={styles.view}>
      <header className={styles.header}>
        <div>
          <h1>LEIAME</h1>
          <p>Sobre o SETLIST.EXE</p>
        </div>
      </header>

      <p>
        SETLIST.EXE é uma ferramenta para criação
        e gerenciamento de setlists para bandas.
      </p>
    </div>
  );
}