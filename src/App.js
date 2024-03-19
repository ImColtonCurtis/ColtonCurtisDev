import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Blob, Header, Work, About, Contact, Footer, Privacy, Terms, ChooInfo, ColtonCurtisDevInfo, CrabInfo, DingInfo, DropInfo, FlapInfo, LetsGetHighInfo, PaperPlanesInfo } from './container';
import { Navbar } from './components';
import './App.scss';
//<Blob />
const AppContent = ({ currentPage, toggleModal, modal }) => (
  <div className="app">
    <Blob />
    <Navbar currentPage={currentPage} modal={modal}/>
    <Header/>
    <Work toggleModal={toggleModal} modal={modal}/>
    <About />
    <Contact />
    <Footer />
  </div>
);

const PrivacyContent = ({ currentPage, modal }) => (
  <div className="app">
    <Navbar currentPage={currentPage} modal={modal}/>
    <Privacy />
    <Footer />
  </div>
);

const TermsContent = ({ currentPage, modal }) => (
  <div className="app">
    <Navbar currentPage={currentPage} modal={modal}/>
    <Terms />
    <Footer />
  </div>
);

const App = () => {
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <Router>
      <div className="app">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Colton Curtis Portfolio</title>
          <link rel="canonical" href="http://coltoncurtis.dev/" />
          <meta name="description" content="Colton Curtis Portfolio" />
        </Helmet>

        <Routes>
          <Route exact path="/ColtonCurtisDev" element={<AppContent toggleModal={toggleModal} modal={modal} />} />
          <Route path="/ColtonCurtisDev/choo-info" element={<ChooInfo  toggleModal={toggleModal}/>} />
          <Route path="/ColtonCurtisDev/coltonCurtisDev-info" element={<ColtonCurtisDevInfo  toggleModal={toggleModal}/>} />
          <Route path="/ColtonCurtisDev/crab-info" element={<CrabInfo  toggleModal={toggleModal}/>} />
          <Route path="/ColtonCurtisDev/ding-info" element={<DingInfo  toggleModal={toggleModal}/>} />
          <Route path="/ColtonCurtisDev/drop-info" element={<DropInfo  toggleModal={toggleModal}/>} />
          <Route path="/ColtonCurtisDev/flap-info" element={<FlapInfo  toggleModal={toggleModal}/>} />
          <Route path="/ColtonCurtisDev/letsGetHigh-info" element={<LetsGetHighInfo  toggleModal={toggleModal}/>} />
          <Route path="/ColtonCurtisDev/paperPlanes-info" element={<PaperPlanesInfo  toggleModal={toggleModal}/>} />
          <Route path="/ColtonCurtisDev/privacy-policy" element={<PrivacyContent currentPage={currentPage} modal={modal}/>} />          
          <Route path="/ColtonCurtisDev/terms-of-use" element={<TermsContent currentPage={currentPage} modal={modal}/>} />

          {/* Fallback route */}
          <Route path="*" element={<AppContent toggleModal={toggleModal} modal={modal} />} />
        </Routes>       
      </div>
      </Router>
  );
};

export default App;
