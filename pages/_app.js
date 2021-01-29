import "../styles/global.css"
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-quill/dist/quill.bubble.css';
export default function App({ Component, pageProps }) {
    console.log(pageProps)
    return <Component {...pageProps} />
}

