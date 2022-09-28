import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ sushis, handleEatSushi, incrementPosition }) {
  return (
    <div className="belt">
      {sushis.map(sushi => {
        return (
          <Sushi
            key={sushi.id}
            sushi={sushi}
            handleEatSushi={handleEatSushi}
          />
        )
      })}
      <MoreButton incrementPosition={incrementPosition} />
    </div>
  );
}

export default SushiContainer;
