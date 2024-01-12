import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Advocate from "./pages/Advocate";
import Membership from "./pages/Membership";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="admin" element={<Admin />} />
          <Route path="advocate" element={<Advocate />} />
          <Route path="membership" element={<Membership />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
