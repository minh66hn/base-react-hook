import React from "react";
import { dataInfor } from "./dataInfor";

const Youtubelist = () => {
  return (
    <div>
      {dataInfor.map((item) => {
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
