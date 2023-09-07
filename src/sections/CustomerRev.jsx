import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TestimonialCard } from "../components";
import { CusTestimony, responsive } from "../constants";


const CustomerRev = () => {

    const product = CusTestimony.map((item) => (
    <TestimonialCard
      key={item.name} // Add a unique key to each card for React's rendering optimization
      name={item.name}
      testimony={item.testimony}
    />
  ));

  return (
    <section className="padding-y padding-x">
      <h1 className="font-playfair font-semibold md:text-10xl text-2xl text-gray-200 md:mb-10 mb-2">CUSTOMER REVIEWS</h1>
      <Carousel showDots responsive={responsive}>
        {product}
      </Carousel>
    </section>
  )
}

export default CustomerRev