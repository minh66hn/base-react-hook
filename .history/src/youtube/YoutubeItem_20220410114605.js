import React from "react";
import { dataInfor } from "./dataInfor";

const YoutubeItem = () => {
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

export default YoutubeItem;
