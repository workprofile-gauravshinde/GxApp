import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import MainLoader from "./components/ScreenComponent/MainLoader";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import ScrollProgressBar from "./components/ScrollProgressBar";
// import BackgroundGraphics from "./components/BackgroundGraphics";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <MainLoader />
  ) : (
    <div
      className={`relative h-full w-full overflow-clip ${
        location.pathname === "/" && "boxSquare bg-mainBackground"
      }`}
    >
      <ScrollProgressBar>
        {/* <BackgroundGraphics /> */}
        <Nav />
        <Outlet />
        <Footer />
      </ScrollProgressBar>
    </div>
  );
}

export default App;
