import styles from "./views.module.css";

const songs = [
  {
    number: 1,
    title: "Song Example",
    artist: "Band",
    tuning: "Drop C",
    vocalist: "Vocal 1",
    duration: "03:42",
  },
  {
    number: 2,
    title: "Another Song",
    artist: "Band",
    tuning: "Drop A",
    vocalist: "Vocal 2",
    duration: "04:12",
  },
  {
    number: 3,
    title: "Final Song",
    artist: "Band",
    tuning: "Drop C",
    vocalist: "Vocal 1",
    duration: "03:58",
  },
];

export default function SetlistView() {
  return (
    <div className={styles.view}>
      <header className={styles.header}>
        <div>
          <h1>SETLIST</h1>
          <p>Current performance setlist</p>
        </div>
      </header>

      <div className={styles.songList}>
        {songs.map((song) => (
          <div
            className={styles.song}
            key={song.number}
          >
            <div className={styles.songNumber}>
              {String(song.number).padStart(2, "0")}
            </div>

            <div className={styles.songInfo}>
              <strong>{song.title}</strong>

              <span>
                {song.artist}
              </span>

              <small>
                {song.tuning} · {song.vocalist}
              </small>
            </div>

            <div className={styles.duration}>
              {song.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}