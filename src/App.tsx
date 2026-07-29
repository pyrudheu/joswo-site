import './App.css'

function App() {

  return (
    <>
      <div className="main-box">
        <section>
          <div className="header-content">
            <h1 className="header-item">Josh W</h1>
            <p className="header-item">Management Consultant, doing CS on the side.</p>
          </div>
        </section>

        <section>
          <div id="projects">
            <h2>Projects</h2>
            <div className="row-set">
              <a className="row-item" href="https://github.com/pyrudheu/Iris_classifier" target="_blank">
                <span>Iris classifier</span>
                <span>simple neural net</span>
              </a>
              <a className="row-item" href="https://github.com/pyrudheu/joswo-site" target="_blank">
                <span>This website</span>
                <span>single page application</span>
              </a>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2>Connect</h2>
            <div className="connect-card">
              <a className="connect-card-item" href="https://github.com/pyrudheu/" target="_blank">
                <span className="test">GitHub</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
