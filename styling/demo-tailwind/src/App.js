import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
    </>
  );
}

export default App;
