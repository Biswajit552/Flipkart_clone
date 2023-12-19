import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { useDispatch, useSelector } from "react-redux";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Mousewheel } from "swiper/modules";
import Demo from "./Demo";
const HSlider = () => {
  const products = useSelector((state) => state.products);
  //   const [Fruits, setFruits] = useState(null);
  //   useEffect(() => {
  //     setFruits(products?.filter((data) => data.product_category === "fruits"));
  //     console.log(Fruits);
  //   }, [products]);
  return (
    <Swiper
      navigation={true}
      direction={"horizontal"}
      mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        "@1.50": {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
      modules={[Navigation, Mousewheel]}
      className="mySwiper  w-[98%]"
    >
      {products &&
        products.map((data, i) => (
          <SwiperSlide key={i}>
            <Demo key={i} data={data} index={i} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default HSlider;
