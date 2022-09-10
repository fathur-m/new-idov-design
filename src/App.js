import { Route, Routes, useLocation } from "react-router-dom";
import MainScreen from "./Route/MainScreen";
import Login from "./Route/Login";
import SignUp from "./Route/SignUp";
import TVShows from "./Route/TVShows";
import Movies from "./Route/Movies";
import Detail from "./Route/Detail";
import About from "./Route/About";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import LogoSvg from "./components/LogoSvg";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <ScrollToTop />
      {loading ? (
        <div className="mincalc flex items-center justify-center flex-col">
          <LogoSvg />
          <Loading />
        </div>
      ) : (
        <>
          <AnimatePresence mode="wait" presenceAffectsLayout>
            {location.pathname !== "/login" &&
              location.pathname !== "/signup" && <Navbar />}
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<MainScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/tv" element={<TVShows />} />
              <Route path="/movie" element={<Movies />} />
              <Route path="/about" element={<About />} />
              <Route path="/:category/:id" element={<Detail />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
