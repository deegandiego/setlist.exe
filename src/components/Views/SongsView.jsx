import styles from "./views.module.css";

export default function SongsView() {
  return (
    <div className={styles.view}>
      <header className={styles.header}>
        <div>
          <h1>CADASTRAR MÚSICAS</h1>
          <p>Manage your song library</p>
        </div>
      </header>

      <p>
        Aqui ficará o cadastro, edição e remoção
        das músicas.
      </p>
    </div>
  );
}