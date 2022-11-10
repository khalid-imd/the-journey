import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NewJourney from "./pages/newJourney";
import Profile from "./pages/profile";
import BookMark from "./pages/bookmark";
import Detail from "./pages/detailPost";
import Index from "./pages";
import IndexLogin from "./pages/indexAfterLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<IndexLogin />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/bookmark" element={<BookMark />} />
        <Route exact path="/new-journey" element={<NewJourney />} />
        <Route exact path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
