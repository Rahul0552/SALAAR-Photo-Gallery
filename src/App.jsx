import Gallery from './components/Gallery'
import './style3.css'

function App() {
  return (
    <div className="layout">
      <div className="content-container">
        <div className="title-section">
          <h1>SALAAR</h1>
          <h2>Prabhas's Latest Blockbuster Movie</h2>
          <div className="movie-info">
            <p>Release Date: Dec 22nd, 2023</p>
            <p>Directed by Prashanth Neel</p>
            <p>Genre: Action Thriller</p>
            <p>Production: Hombale Films</p>
          </div>
          <div className="storyline">
            {/* <h3>Storyline</h3> */}
            <p>
              Set in the fictional dystopian city-state of Khansaar, "Salaar" follows 
              the intense tale of loyalty, betrayal, and power.    </p>
            <p>
              As the tribal heir of Khansaar faces threats from rival factions, Deva emerges 
              as a ruthless enforcer, whose loyalty to his friend and the ancient code of 
              violence shapes the destiny of their kingdom. The film explores themes of 
              brotherhood, power struggles, and the cost of maintaining order in a lawless world.
            </p>
          </div>
        </div>
        <div className="gallery-section">
          <Gallery />
        </div>
      </div>
    </div>
  )
}

export default App