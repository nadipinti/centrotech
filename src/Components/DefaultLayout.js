import React, { useState } from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import Sidebar from "./Sidebar";

const DefaultLayout = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="d-flex sidebar--height">
      <Sidebar />
      <div className="header__conatiner">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className={`main_container`}>
          <MainSection searchValue={searchValue}/>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
