import NavBar from 'Components/Navbar';
import Body from 'Components/Body';
import Home from 'pages/Home';
import Contact from 'pages/Contact';
import About from 'pages/About';
import Projects from 'pages/Projects';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Body>
          <Home />
        </Body>
      ),
    },
    {
      path: '/projects',
      element: (
        <Body>
          <Projects />
        </Body>
      ),
    },
    {
      path: '/contact',
      element: (
        <Body>
          <Contact />
        </Body>
      ),
    },
    {
      path: '/aboutMe',
      element: (
        <Body>
          <About />
        </Body>
      ),
    },
  ]);
  return (
    <div className='' style={{backgroundColor: '#71797e'}}>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
