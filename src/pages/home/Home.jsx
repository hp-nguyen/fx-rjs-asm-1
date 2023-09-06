import CitiesList from '../../components/CitiesList/CitiesList';
import Header from '../../components/Header/Header';
import HotelsList from '../../components/HotelsList/HotelsList';
import Navbar from '../../components/Navbar/Navbar';
import PropertiesList from '../../components/PropertiesList/PropertiesList';
import './Home.css';
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <CitiesList />
        <PropertiesList />
        <HotelsList />
      </main>
    </>
  );
};

export default Home;
