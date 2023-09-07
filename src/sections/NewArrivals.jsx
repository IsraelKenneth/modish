import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "../components";
import { productData, responsive } from "../constants";


const NewArrivals = () => {
  const product = productData.map((item) => (
    <Card
      key={item.id} // Add a unique key to each card for React's rendering optimization
      label={item.name}
      iconUrl={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="padding-l padding-t">
      <h1 className="font-montserrat font-semibold md:text-2xl md:mb-10 mb-4">NEW ARRIVAL ITEMS</h1>
      <Carousel showDots responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};

export default NewArrivals;
