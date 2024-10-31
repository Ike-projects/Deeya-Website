import ProductDetailsCard from "../components/ProductDetailsCard";
import { sampleProdctDetailsCategoryData, POTATOES, PLUS } from "../constants";
import Button from "../components/Button";

const ProductDetails = ({ price, size }) => {
  return (
    <section className="flex relatives pt-[186px] h-screens gap-[37px] items-centers justify-center mb-[90px]">
      <div className="bg-[#F7F7F7]  w-[407px] h-[600px] rounded-2xl mt-[60px] pb-[33px]">
        <div className="">
          <h1 className="text-h3-heading font-heebo px-[30px] py-[30px]">
            From Category
          </h1>
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
      <div className="flex flex-col gap-10">
        <div className="w-[836px] h-[484px] rounded-2xl bg-[#F7F7F7] shadow-md items-center flex px-[24px] mt-[60px]">
          <div className="flex gap-[24px]">
            <img
              src={POTATOES}
              alt=""
              className="w-[345px] h-[294px] rounded-2xl"
            />
            <div className="flex flex-col mt-[34px]  w-[239px] h-[250px] gap-10 justify-center">
              <div className="  flex flex-col gap-5">
                <span className="flex flex-col space-x-1 w-[131px] h-[82px]">
                  <p className="text-h2-heading m-0 font-heebo leadiing-none">
                    Potatoes
                  </p>
                  <div className="flex space-x-2 text-[#2FB078]  w-[150px]">
                    <p className="text-heading font-heebo">
                      &#8373; {"50,00"}/
                    </p>
                    <p className="text-h3-heading font-heebo">{"1kg"}</p>
                  </div>
                </span>
                <div className="flex gap-5 items-center mt-10">
                  <h3 className="text-h3-heading font-heebo">Quantity</h3>
                  <div className="flex gap-[10px] items-center justify-center">
                    <span className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-white shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#70C6A1"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </span>
                    <p className="text-body-text font-heebo">5</p>
                    <span className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-white shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#70C6A1"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                    <p className="text-h3-heading font-heebo">Kg</p>
                  </div>
                </div>
              </div>
              <span className="">
                <Button
                  label={"Add to Cart"}
                  icon={PLUS}
                  className="bg-[#2FB078] w-[144px] h-[52px] text-ui-label-semi-bold font-heebo"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="w-[836px] h-[557px]  rounded-2xl bg-[#F7F7F7]">
          <div className="border rounded-tl-2xl rounded-tr-2xl bg-[#D1D1D1] h-[70px] flex items-center px-[24px] text-h3-heading font-heebo ">
            <p>Description</p>
          </div>
          <div className="px-[24px] py-[30px] text-body-text font-heebo">
            <p>Fresh 100kg potatoes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
