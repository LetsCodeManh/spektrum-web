import Cookies from "../components/Cookies"
import CTA from "../section/CTA/CTA"
import AboutSection from "../section/about/AboutSection"
import FAQsSection from "../section/faqs/FAQsSection"
import FooterSection from "../section/footer/FooterSection"
import HomeSection from "../section/home/HomeSection"
import NavigationSection from "../section/navigation/NavigationSection"
import OfferSection from "../section/offer/OfferSection"
import ServicesSection from "../section/services/ServicesSection"
import SurveySection from "../section/survey/SurveySection"

const MainPage = () => {
  return (
    <>
      <Cookies />
      <NavigationSection />
      <main>
        <HomeSection />
        <ServicesSection />
        <OfferSection />
        {/* <SurveySection /> */}
        <FAQsSection />
        <AboutSection />
        <CTA />
      </main>
      <FooterSection />
    </>
  )
}

export default MainPage