import React from "react";

const Youtubelist = () => {
  return (
    <div>
      {dataInfornfor.map((item) => {
        console.log(item);
        return (
          <YoutubeItem
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
          >
            <h2>Hello van Ming</h2>
          </YoutubeItem>
        );
      })}
    </div>
  );
};

export default Youtubelist;
