import Sidebar from "../Sidebar/Sidebar";
import styles from "./AppShell.module.css";

export default function AppShell({
  activeTab,
  onTabChange,
  children,
}) {
  return (
    <main className={styles.app}>
      <div className={styles.window}>
        <div className={styles.titleBar}>
          <div className={styles.title}>
            SETLIST.EXE
          </div>

          <div className={styles.windowControls}>
            <button>_</button>
            <button>□</button>
            <button>×</button>
          </div>
        </div>

        <div className={styles.content}>
          <Sidebar
            activeTab={activeTab}
            onTabChange={onTabChange}
          />

          <section className={styles.mainContent}>
            {children}
          </section>
        </div>
      </div>
    </main>
  );
}