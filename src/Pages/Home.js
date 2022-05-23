import Annocements from '../Components/Annocements';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import Catagory from '../Components/Catagory';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Annocements />
      <Navbar />
      <Slider />
      <Catagory />
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home