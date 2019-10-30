import React from "react";
import { Grommet, grommet, Box, Heading, Paragraph } from "grommet";

function App() {
  return (
    <Grommet theme={grommet} full>
      <Box
        height="100%"
        align="center"
        justify="center"
        background="papayawhip"
      >
        <Heading size="large" textAlign="center" color="burlywood">
          My page rocks!
        </Heading>
        <Paragraph size="large" textAlign="center" color="cadetblue">
          It's so easy to publish Grommet apps to GitHub Pages!!
        </Paragraph>
      </Box>
    </Grommet>
  );
}

export default App;
