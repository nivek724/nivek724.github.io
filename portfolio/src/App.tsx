import NavBar from 'Components/Navbar';
import Body from 'Components/Body';
import Home from 'pages/Home';
import Contact from 'pages/Contact';
import About from 'pages/About';
import Projects from 'pages/Projects';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='' style={{ backgroundColor: '#71797e' }}>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <Body>
              <Home />
            </Body>
          }
        />
        <Route
          path='/Projects'
          element={
            <Body>
              <Projects />
            </Body>
          }
        />
        <Route
          path='/Contact'
          element={
            <Body>
              <Contact />
            </Body>
          }
        />
        <Route
          path='/About'
          element={
            <Body>
              <About />
            </Body>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
