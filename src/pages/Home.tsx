import Catalog from "../components/Catalog/Catalog";
import AboutUs from "../components/AboutUs/AboutUs";
import Choose from "../components/chooseForm/Choose";
import Team from "../components/Team/Team";
import Questions from "../components/Questions/Questions";
import Map from "../components/ContactComp/Contact";
import QuestionForm from "../components/QuestionForm/QuestionForm";
import Footer from "../components/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <Catalog />
      <AboutUs />
      <Choose />
      <Team />
      <Questions />
      <Map />
      <QuestionForm />
      <Footer />
    </div>
  );
};
