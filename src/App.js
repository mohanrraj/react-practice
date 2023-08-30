import Header from "./components/Header"
import Nav from "./components/Nav"
import Home from './components/Home';
import About from './components/About';
import { DataProvider } from './DataContext/DataContext';
import { Routes, Route } from 'react-router-dom';
import Add from "./components/Add";
import EditItem from "./components/EditItem";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/about" element={<About />} />
          <Route path ="/add" element={<Add />} />
          <Route path ="/edit/:id" element={<EditItem />} />
        </Routes>
      </DataProvider>
    </div>
  
  );
}

export default App;
