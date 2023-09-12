import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

function App() {
  return (
    <div>
      <Header/>
      <div className="cards">
        <Card
        position="c++ dev"
        company="aston"
        color="grey"
        />
      </div>
      <div className="cards">
        <Card
        position="c# dev"
        company="aston"
        company1="Тинькоф"
        />
      </div>
      <div className="cards">
        <Card
        position="java dev"
        company="aston"
        company1="Яндекс"
        company2="ВТБ"
        color="grey"
        />
      </div>
    </div>
  );
}

export default App;
