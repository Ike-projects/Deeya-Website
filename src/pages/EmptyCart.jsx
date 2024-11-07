import Button from "../components/Button";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <section className="h-screen flex items-center text-white justify-center font-heebo border">
        <div className=" flex items-center justify-center flex-col gap-[50px]">
          <h1 className="text-heebo text-[#0A0C10]">Cart</h1>
          <div className="h-[341px] bg-[#D2D0D0] border w-[1280px] flex items-center justify-center">
            <div className="flex items-center flex-col  gap-[40px]">
              <div className=" flex flex-col items-center justify-center gap-[20px]">
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#70C6A1"
                    className="size-10"
                  >
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  </svg>
                </div>
                <div className="flex gap-[12px] flex-col text-[#424345]">
                  <p className="text-h3-heading">Shopping is cart empty!</p>
                  <p className="text-body-text">You have no item in your cart</p>
                </div>
              </div>
              <NavLink to="/Deeya-Website/marketplace">
                <Button
                  // onClick={""}
                  label="Start Shopping"
                  disabled={false}
                  className=" h-[50px] bg-[#2FB078] text-white w-[136px]"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmptyCart;
