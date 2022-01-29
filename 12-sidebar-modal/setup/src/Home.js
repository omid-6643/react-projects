import React from "react";
//! import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
//! import { AppContext} from "./context";

const Home = () => {
  //! const data = useContext(AppContext);
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
