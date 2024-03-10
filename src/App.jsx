import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Main from './components/Main';

function App() {
  return (
    <>
      <div>
        <img src={reactLogo} className="logo" alt="React logo" />
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <Main />
      </div>
    </>
  );
}

export default App;
