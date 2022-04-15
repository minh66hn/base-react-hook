import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
    <YoutubeItem
      src1="https://media.istockphoto.com/photos/fire-alarm-sounder-picture-id1166460347"
      src2="https://media.istockphoto.com/photos/-picture-id535070829?s=612x612"
    ></YoutubeItem>
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

function YoutubeItem(props) {
  return (
    <div className="header">
      <div className="item-img">
        <img src={props.src1}" alt="" className="image" />
        <h3 className="title">My channel</h3>
      </div>
      <div className="footer">
        <img src={props.src2} alt="" className="face" />
        <h4 className="decription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem repellendus nobis nihil sunt a doloremque, voluptas
          numquam eligendi atque distinctio ab omnis, quisquam perspiciatis,
          voluptatum in aut earum. Nemo, dolore.
        </h4>
      </div>
    </div>
  );
}
export default App;
