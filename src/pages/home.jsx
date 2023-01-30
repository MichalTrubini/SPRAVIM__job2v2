import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import Highlights from "../modules/main/homePage/highlights";
import Intro from "../modules/main/homePage/intro";
import Video from "../modules/main/homePage/video";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Highlights />
        <Video />
      </main>
      <Footer />
    </>
  );
};

export default Home;
