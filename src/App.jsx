import { useEffect } from "react";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

export default function App() {
  useEffect(() => {
    console.log("ok");
  });
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Nav></Nav>
        <div className="min-h-[calc(100vh-288px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
