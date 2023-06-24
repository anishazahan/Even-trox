import Navbar from "../../../shared/Navbar";
import banner from "../../../assets/banner.jpg";
import TopCounter from "../TopCounter/TopCounter";


const Banner = () => {
  return (
    <>
      <div
        className="h-[120vh] bg-center bg-no-repeat bg-cover w-full relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute top-5 z-20 left-0 right-0">
          <Navbar></Navbar>
        </div>
        <div className="bg-black/50 z-10 inset-0 absolute w-full h-full"></div>

        <div className="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-yellow text-4xl font-bold">January 20 , 2023</p>
          <h2 className="text-white text-8xl font-bold">Word Digital </h2>
        </div>

        <div className="absolute z-50  -bottom-12  left-0 right-0">
          <TopCounter></TopCounter>
        </div>
      </div>
    </>
  );
};

export default Banner;
