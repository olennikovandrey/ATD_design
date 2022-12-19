import Header from "./components/Header/Header";
import TopSection from "./components/TopSection/TopSection";
import React from "react";
import "./index.sass";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <Services />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
