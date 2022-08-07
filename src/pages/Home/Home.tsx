import React from "react";
import { DarkToggle, Header } from "@riezahughes/emotion-storybook-library/lib";
import LoginButton from "../../components/LoginButton/LoginButton";

const Home = () => {
  return (
    <Header illuminate={false}>
      <DarkToggle isDark={false} />
      <LoginButton />
    </Header>
  );
};

export default Home;
