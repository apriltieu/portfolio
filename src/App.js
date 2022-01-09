import profileImage from "./PortfolioContainer/AboutMe/img/profile-image.jpg";
import Profile from "./PortfolioContainer/Home/Profile"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi Chris</h1>
      <img src={profileImage} />
      <Profile/>
    </div>
  );
}

export default App;
