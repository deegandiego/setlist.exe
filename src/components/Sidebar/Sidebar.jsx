
import styles from "./Sidebar.module.css";

const menuItems = [
  {
    id: "setlist",
    label: "Setlist",
  },
  {
    id: "songs",
    label: "Cadastrar músicas",
  },
  {
    id: "about",
    label: "Sobre",
  },
  {
    id: "customize",
    label: "Customizar",
  },
];

export default function Sidebar({
  activeTab,
  onTabChange,
}) {
  return (
    <aside className={styles.sidebar}>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={
              activeTab === item.id
                ? styles.active
                : ""
            }
            onClick={() => onTabChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className={styles.version}>
        SETLIST.EXE
        <br />
        Version 0.1
      </div>
    </aside>
  );
}