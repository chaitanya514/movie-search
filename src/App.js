import './App.css';
import Header from "./Header";
import Movie from "./Movie"
function App() {
  return (
    <div className="App">
      <Header text = "Header" />
      <Movie movie = {[]} />
    </div>
  );
}

export default App;
