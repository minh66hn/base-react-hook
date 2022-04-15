import "./App.css";
import { dataInfor } from "./dataInfor.js";

function App() {
  return (
    <div>
      {dataInfor.map((item) => (
      <YoutubeItem
        props=item
      ></YoutubeItem>
      ))
      }
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div className="youtube-list">
      <div className="youtube-image">
        <img src={props.image} alt="" className="youtube-avatar" />
      </div>
      <div className="youtube-footer">
        <img src={avatar} alt="" className="face" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            {title || "This is example of title"}
          </h3>
          <h4 className="youtube-author">
            {author || "This is example of author name"}
          </h4>
        </div>
      </div>
    </div>
  );
}
export default App;
