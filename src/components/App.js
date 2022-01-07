import './App.css';
import Title from './Title/Title';
import POPOSList from './POPOSList/POPOSList';
import Footer from './Footer/Footer';
import About from './About/About';
import POPOSDetails from './POPOSDetails/POPOSDetails';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

//localhost:3000/#/about

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Title />
      <Routes> 
          <Route path="/" element={<POPOSList />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<POPOSDetails />} />
          <Route path="*" element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
      </Routes>
      <Footer />
    </div>
  </HashRouter>
  );
}

export default App;