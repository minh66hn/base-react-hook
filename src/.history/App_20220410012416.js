import "./App.css";
import "./dataInfor.js";

function App() {
  return (
    <div>
      YoutubeData.map(item => (
      <YoutubeItem
        key={item.id}
        image={item.image}
        avatar={item.avatar || item.image}
        title={item.title}
        author={item.author}
      ></YoutubeItem>
      ));
    </div>
  );
}

function YoutubeItem() {
  return (
    <div className="youtube-list">
      <div className="youtube-image">
        <img src={image} alt="" className="youtube-avatar" />
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
