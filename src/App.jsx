import React from 'react'
import Header from './components/header/Header'
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import School from "./components/school/School";
import Portfolio from "./components/portfolio/Portfolio";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <School />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App
