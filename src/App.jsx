import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skill';
import Projects from './pages/Projects';

function App() {
  return (
    <div className=" dark:bg-slate-900 bg-gray-50">
      <main>
        <Home />
        <Header />
        <About/>
        <Skills/>
        <Projects/>
      </main>
      <Footer />
    </div>
  );
}

export default App;