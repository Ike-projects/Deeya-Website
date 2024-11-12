import ShoppingCartCard from "../components/ShoppingCartCard";
import { sampleProdctDetailsCategoryData } from "../constants";

const Cart = () => {
  return (
    <section className="font-heebo pt-[200px] pb-[80px]">
      <div className="flex items-center justify-center mt-5">
        <h1 className="text-heebo">Cart</h1>
      </div>
      <div className="flex items-center gap-5 mb-[40px] pl-[200px]">
        <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#F7F7F7] shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#2FB078"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <p className="text-h3-heading">Continue Shopping</p>
      </div>
      <div className="flex gap-5 justify-center">
        <div className="w-[630px] h-[703px] bg-[#F7F7F7] px-6 py-[30px]">
          <p className="text-h3-heading mb-[50px]">Shopping cart (3 item)</p>
          <div className="flex flex-col gap-[20px]">
            {sampleProdctDetailsCategoryData.slice(0, 3).map((item, index) => {
              return (
                <ShoppingCartCard
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
        <div className="flex flex-col gap-[6px]">
          <div className="w-[630px] h-[572px] bg-[#F7F7F7] px-6 py-[30px]">
            <div className=" border-b-[0.6px] border-[#424345] flex justify-between pb-[20px] mb-[30px] h-[42px]">
              <p className="leading-0 m-0 text-h3-heading mb-[50px]">
                Order Summary
              </p>
              <p className="p-0">3 itmes</p>
            </div>
            <div>
              <div className="flex justify-between pb-[20px] mb-[30px] h-[42px]">
                <p className="leading-0 m-0 text-body-text mb-[50px]">
                  Mushroom
                </p>
                <p className="p-0 text-ui-label-semi-bold">&#8373; 500</p>
              </div>
              <div className=" flex justify-between pb-[20px] mb-[30px] h-[42px]">
                <p className="leading-0 m-0 text-body-text mb-[50px]">
                  Potatoes
                </p>
                <p className="p-0 text-ui-label-semi-bold">&#8373; 50,000</p>
              </div>
              <div className=" flex justify-between pb-[20px] mb-[30px] h-[42px]">
                <p className="leading-0 m-0 text-body-text mb-[50px]">Onions</p>
                <p className="p-0 text-ui-label-semi-bold">&#8373; 200</p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex justify-between border-b-[0.6px] border-[#424345] pb-5">
                <p className="text-body-text-medium text-[#7D7E80]">SubTotal</p>
                <p className="text-ui-label-semi-bold">&#8373; 50,700</p>
              </div>
              <div className="flex justify-between border-b-[0.6px] border-[#424345] pb-5">
                <p className="text-body-text-medium text-[#7D7E80]">Delivery</p>
                <p className="text-ui-label-semi-bold">&#8373; 200</p>
              </div>
              <div className="flex justify-between">
                <p className="text-h3-heading">Total</p>
                <p className="text-h3-heading">&#8373; 50,900</p>
              </div>
              <button className="w-[582px] h-[50px] bg-[#2FB078] text-white rounded-[10px]">
                Sign In to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
