import React from "react";

import Button from "../Button";
import TileSelector from "../TileSelector";

const OptionsPanel = (props) => (
  <div>
    <TileSelector numTiles={props.numTitles} />
    <Button playing={props.playing} />
  </div>
);

export default OptionsPanel;
