import './App.css';
import Navbar from './component/Navbar';
import VideoItem from './component/VideoItem';
import Login from './component/LoginPage';
import Register from './component/RegisterPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <VideoItem/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
