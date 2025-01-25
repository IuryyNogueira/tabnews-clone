import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function Home() {
  return (
    <div className={styles.container}>
      {/* Título */}
      <h1 className={styles.title}>😎🤞 Fala fih</h1>

      {/* Frase da música */}
      <p className={styles.description}>
        "Oooo pai, só gratidão. Quando te falarem que você não vai vencer..." 🎵
      </p>

      {/* Player do YouTube */}
      <div className={styles.playerContainer}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=JZo7awP8hc4"
          playing={false}
          controls={true}
          loop={true}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                start: 20, // Começa aos 20 segundos
              },
            },
          }}
        />
      </div>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <p>Feito com 😡 pra você!</p>
      </footer>
    </div>
  );
}

export default Home;
