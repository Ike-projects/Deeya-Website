import ProductDetailsCard from "../components/ProductDetailsCard";
import { sampleProdctDetailsCategoryData } from "../constants";

const ProductDetails = ({price, size}) => {
  return (
    <section className="flex items-center border h-screen">
      <div className="bg-[#F7F7F7]  w-[407px] h-[637px] rounded-2xl mt-[60px]">
        <div className="">
          <h1>From Category</h1>
          {sampleProdctDetailsCategoryData.map((item, index) => {
            return (
              <ProductDetailsCard
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
                size={item.size}
              />
            );
          })}
        </div>
      </div>
      <div>
        <div>
            <img src="" alt="" />
            <div>
            <span className="flex items-end space-x-1">
                        <p className="text-h3-heading">
                            &#8373;{price}/
                        </p>
                        <p className="text-h3-heading">{size}</p>
                    </span>
                    <div>
                        <h3>Quantity</h3>
                    </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
