import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Main from './components/MainCalendar';
import MainCalendar from './components/MainCalendar';

function App() {
  //<img src={reactLogo} className="logo" alt="React logo" />
  //<img src={viteLogo} className="logo" alt="Vite logo" />
  return (
    <>
      <div>
        <MainCalendar />
      </div>
    </>
  );
}

export default App;
