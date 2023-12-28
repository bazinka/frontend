import "./App.css";


function Game() {
  return (
    <>
     <iframe 
        style={{ 
        position: "absolute",
        inset: 0,
        margin: 0,
        padding: 0,
        height: "100%",
        width: "100%",
        overflow: "hidden"}}  
        src="https://play.gamepix.com/car-city-adventure/embed?sid=33384" 
            allowFullScreen>
        </iframe>
    </>


  );
}

export default Game;
