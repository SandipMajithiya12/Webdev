import cold from "./images/cold.jpg"
import download from "./images/download.jpg"
function App() {
  return (
    <div className="app" style={{
      backgroundImage : `url(${cold})`
    }}>
     
      <div className="overlay">
        <div className="container">
          <div className="section">
            <div className="section_inputs">
              <input type="text" name="city" placeholder="enter the city..." />
              <button>F</button>
            </div>
           
          <div className="section section_temrature">
            <div className="icon">
              <h3>rajkot ,gb</h3>
              <img src="" alt="weather icon" />
              <h3>cloduy</h3>
              <div className="temperature">
                <h1>34 c</h1>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

    </div>
    

  
  );
}

export default App;