import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";

import { Form } from "./components/Form";
import "./App.css";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Data } from "./components/Data";
import { Chat } from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Nav />
      <Routes>
        <Route path="/Home" element={<Form />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
