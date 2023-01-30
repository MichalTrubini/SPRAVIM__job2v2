import Footer from "../modules/footer/footer";
import Header from "../modules/header/header";
import PrivacyPolicy from "../modules/main/gdpr/privacyPolicy";

const GDPR = () => {
  return (
    <>
      <Header />
      <main className="sitePadding">
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
};

export default GDPR;
