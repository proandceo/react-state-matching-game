import React from "react";

import Button from "../Button";
import TileSelector from "../TileSelector";

const OptionsPanel = (props) => (
  <div>
    <TileSelector numTitles={props.numTitles} />
    <Button />
  </div>
);

export default OptionsPanel;
