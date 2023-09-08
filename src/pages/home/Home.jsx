import CitiesList from '../../components/CitiesList/CitiesList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HotelsList from '../../components/HotelsList/HotelsList';
import Navbar from '../../components/Navbar/Navbar';
import PropertiesList from '../../components/PropertiesList/PropertiesList';
import SubcribeSection from '../../components/SubcribeSection/SubcribeSection';
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <CitiesList />
        <PropertiesList />
        <HotelsList />
        <SubcribeSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
