import './App.css';
import CardList from './components/CardList';
import NavBar from './components/NavBar';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

function App() {

  return (
    <div className="App">
        <NavBar />
        <CardList testData={testData} />
    </div>
  );
}

export default App;
