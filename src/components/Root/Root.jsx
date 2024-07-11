import SiteHeader from "../SiteHeader/SiteHeader";
import SiteFooter from "../SiteFooter/SiteFooter";
import MainContent from "../MainContent/MainContent";
import "../../assets/css/root.css";

function Root() {
  return (
    <>
      <div className="rootWrapper">
        <SiteHeader />
        <MainContent />
        <SiteFooter />
      </div>
    </>
  );
}

export default Root;
