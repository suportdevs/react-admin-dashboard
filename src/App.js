import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <TopBar />
      <div className='container'>
        <Sidebar/>
        <div className="mainContentWrapper">
          <Home />
        </div>
      </div>

    </>
  );
}

export default App;
