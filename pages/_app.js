//pages/_app.js
import '../styles/main.scss';  // Adjust the path as needed

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
