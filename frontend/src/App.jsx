import Button from './components/Button';
import QuestionsMenu from './components/QuestionsMenu';
import logo from './logo.svg';
import HomePage from './pages/HomePage';
import './styes/utilities.css';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <QuestionsMenu />
    </div>
  );
}

export default App;
