import Card from '../../project3/src/components/Card/Card';
import './App.css';

function App() {
  return (
    <div>
      <h1>Галерея</h1>
      <div className="cards">
      <Card
      pic="https://shapka-youtube.ru/wp-content/uploads/2021/03/patsanskaya-kartinka-na-avu.jpg"
      name="Вася"
      age={23}
      gender={true}
      />
      <Card
      pic="https://shapka-youtube.ru/wp-content/uploads/2021/03/patsanskaya-kartinka-na-avu.jpg"
      name="Вася"
      age={23}
      gender={true}
      />
      </div>
    </div>
  );
}

export default App;
