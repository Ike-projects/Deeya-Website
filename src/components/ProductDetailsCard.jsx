const ProductDetailsCard = ({ name, price, image, size }) => {
  return (
    <div className="px-[30px] py-[14px] border-b-[0.4px] border-[#D1D1D1]">
      <div className="flex gap-5 itmes-center">
        <img src={image} alt="" className="w-[111px] h-[92px] rounded-[4px]" />
        <div className="flex flex-col items-start justify-center gap-4 space-x-4 ">
          <p className="text-h3-heading ">{name}</p>
          <div className="flex space-x-1 ">
            <p className="text-h3-heading m-0 font-heebo">&#8373;{price}/</p>
            <p className="text-h3-heading">{size}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
