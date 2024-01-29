import './App.css';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App">
      <div className='main-wrapper'>
        <h1>
        Here is what our alumni say about freeCodeCamp:
        </h1>
        <Testimony
          image = 'Emma'
          name = 'Emma Bostian'
          country = 'Sweden'
          job = 'Software Engineer'
          company = 'Spotify'
          testimony = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;
