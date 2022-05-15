import React from "react";
import { DarkToggle, Header } from "@riezahughes/emotion-storybook-library/lib";

const Home = () => {
  return (
    <Header illuminate={false}>
      <DarkToggle isDark={false} />
    </Header>
  );
};

export default Home;
