import '../styles/global.css'; // Importando os estilos globais
import '../styles/Home.module.css'; // Importando os estilos específicos do componente, se necessário

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
