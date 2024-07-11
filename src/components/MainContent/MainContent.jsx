import { Outlet } from "react-router-dom";
import "../../assets/css/mainContent.css";

function MainContent() {
  return (
    <>
      <div className="mainContentWrapper">
        <Outlet />
      </div>
    </>
  );
}

export default MainContent;
