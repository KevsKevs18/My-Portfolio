import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Goals from './Goals/Goals.jsx';


function App() {

   return(
    <>
    <Navbar/>
    <Home name="home"/>
    <About name="about"/>
    <Goals name="goals"/>
    </>
   );
  
}

export default App
