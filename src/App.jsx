// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import { useTranslator } from "./hooks/useTranslator";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Masterlayout from "./components/Masterlayout";
import About from "./Pages/About";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";

function App() {
  // const t = useTranslator();
  // const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
   
      index: true,
      element: <Home />,
    },

    {
      path: "/career",
      element: <Career />,
    },

    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },

    {
      path: "/gallery",
      element: <Gallery />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
