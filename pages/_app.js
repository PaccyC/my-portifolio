
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Skills from '../components/Skills';
import Contacts from '../components/Contacts';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;