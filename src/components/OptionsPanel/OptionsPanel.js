import React from "react";

import Button from "../Button";
import TileSelector from "../TileSelector";
import App from "../App/App";

const OptionsPanel = (props) => (
  <div>
    <TileSelector numTitles={props.numTitles} />
    <Button />
  </div>
);

export default OptionsPanel;
