import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import SearchList from '../../components/SearchList/SearchList';
import SearchPopup from '../../components/SearchPopup/SearchPopup';
import './Search.css'
const Search = () => {
  return (
    <>
      <Navbar />
      <div className="search-container container--mw-1024">
        <SearchPopup/>
        <SearchList />
      </div>
      <Footer />
    </>
  );
};

export default Search;
