import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <>
      <TopBar />
      <div className='container'>
      <Sidebar/>
      <div className="mainContentWrapper">others</div>
      </div>

    </>
  );
}

export default App;
