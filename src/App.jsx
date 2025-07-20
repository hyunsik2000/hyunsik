import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skill';
import Projects from './pages/Projects';
import Activity from './pages/Activity';

function App() {
  return (
    <div className="min-w-[400px] bg-white dark:bg-slate-900">
      <main>
        <Home />
        <Header />
        <About/>
        <Skills/>
        <Projects/>
        <Activity/>
      </main>
      <Footer />
    </div>
  );
}

export default App;