import "./App.css";
import logo from "./logo.svg";
import testThumbnail from "./testThumbnail.jpg";

function App() {
  return (
    <>
      <div className="content-center inline-block">
        <img src={logo} style={{ width: "16rem", margin: "1rem" }} />
      </div>
      <div className="cards">
        <div className="card">
          <img src={testThumbnail} />
        </div>
        <div className="card">
          <img src={testThumbnail} />
        </div>
        <div className="card">
          <img src={testThumbnail} />
        </div>
        <div className="card">
          <img src={testThumbnail} />
        </div>
        <div className="card">
          <img src={testThumbnail} />
        </div>
        <div className="card">
          <img src={testThumbnail} />
        </div>
        <div className="card">
          <img src={testThumbnail} />
        </div>
        <div className="card">
          <img src={testThumbnail} />
        </div>
        <div className="card">
          <img src={testThumbnail} />
        </div>
        <div className="card">
          <img src={testThumbnail} />
        </div>
        <div className="card">
          <img src={testThumbnail} />
        </div>
        <div className="card">
          <img src={testThumbnail} />
        </div>
      </div>
    </>

    //   <img src={logo} style={{ width: "16rem", margin: "1rem" }} />
    //   <iframe
    //     src="https://html5.gamemonetize.co/vnelcgo6ketfnul27cvlwr54ij494111/"
    //     width="1000"
    //     height="560"
    //     scrolling="none"
    //   ></iframe>
    // </>
  );
}

export default App;
