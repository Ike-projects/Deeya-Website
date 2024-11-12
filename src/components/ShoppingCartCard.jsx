const ShoppingCartCard = ({ name, price, image, size }) => {
  return (
    <div>
      <div className="flex gap-5 itmes-center">
        <img src={image} alt="" className="w-[154px] h-[131px] rounded-[4px]" />
        <div className="flex flex-col items-start justify-between ">
          <div className=" flex flex-col gap-4">
            <p className="text-h3-heading ">{name}</p>
            <div className="flex space-x-1 ml-0">
              <p className="text-h3-heading m-0 font-heebo">&#8373;{price}/</p>
              <p className="text-h3-heading">{size}</p>
            </div>
          </div>
          <div className="flex w-[277px] justify-between items-end">
            <div className="flex gap-5 items-center">
              <div className="flex gap-[10px] items-center justify-center">
                <button className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-white shadow-lg">
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
                </button>
                <p className="text-body-text font-heebo">5</p>
                <button className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-white shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#70C6A1"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#EA5050"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCard;
