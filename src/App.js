import './App.css';
import Movie from './Movie'

function App() {
  let newStr = 'String Stuff!'
  let movieArr = [
    {
      title: "The Fellowship of the Ring",
      hours: "2",
      minutes: "58"
    },
    {
      title: "The Two Towers",
      hours: "2",
      minutes: "59"
    },
    {
      title: "The Return of the Cat",
      hours: "50",
      minutes: "A billion"
    },
    {
      title: 'More Cats',
      hours: '200',
      minutes: '5'
    }
  ]
  return (
    <div className="App">
      <h1>{newStr}</h1>
      <h1>{movieArr.map((movie, i) => {
        return <Movie title={movie.title} hours={movie.hours} minutes={movie.minutes} />
      })}</h1>
    </div>
  );
}

export default App;
