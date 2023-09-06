import CitiesList from '../../components/CitiesList/CitiesList';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <CitiesList/>
      </main>
    </>
  );
};

export default Home;
