import profileImage from "./img/profile-image.jpg";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>April's First React app!</h1>
      <h2>Welcome</h2>
      <img src={profileImage} />
    </div>
  );
}

export default App;
