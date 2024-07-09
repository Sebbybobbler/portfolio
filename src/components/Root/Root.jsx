import SiteHeader from "../SiteHeader/SiteHeader";
import SiteFooter from "../SiteFooter/SiteFooter";
import MainContent from "../MainContent/MainContent";

function Root() {
  return (
    <>
      <div>
        <div>
          <SiteHeader />
          <MainContent />
          <SiteFooter />
        </div>
      </div>
    </>
  );
}

export default Root;
