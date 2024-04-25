import banner from "../assets/banner-image.png";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";

const Home = () => {
  return (
    <div className={`w-full flex flex-col items-center`}>
      <Banner src={banner}/>
      <Categories />
    </div>
  );
};

export default Home;
