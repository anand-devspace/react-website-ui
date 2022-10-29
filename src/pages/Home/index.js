import * as React from 'react';
import ResponsiveAppBar from "../../components/navBar/index";
import Banner from "../../components/Banner"

const Home = (props) => {
const { colorTheme } = props;
  return (
    <>
        <ResponsiveAppBar colorTheme={colorTheme} />
        <Banner />
    </>
  );
}
export default Home;
