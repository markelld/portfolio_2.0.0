import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import localeData from './locale/locale';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <IntlProvider locale={localeData.lang} messages={localeData.messages[localeData.lang] || localeData.messages['en']}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;