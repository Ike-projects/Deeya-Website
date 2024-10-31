import { Link, Navigate } from "react-router-dom";
import { LOGINHERO } from "../constants";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// Yup validation schema
const validationSchema = yup.object().shape({
  name: yup.string().required("First Name is required"), 
  email: yup.string().email("Enter a valid email").required("Email is required"), 
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"), 
});

const Register = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema), 
  });

  //Function to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async(data) => {
    console.log(data);

    // LOGIC FOR WHEN BACKEND IS READY
    // try {
    //   const response = await axios.post("https://your-backend.com/api/register", data);
    //   if (response.data.success) {
    //     // Store token or handle response as needed
    //     localStorage.setItem("token", response.data.token);
    //     alert("Registration successful!");
           Navigate('/');
    //   }
    // } catch (error) {
    //   console.error("Registration error:", error);
    //   alert("Failed to register. Try again.");
    // }
    
  };

  return (
    <div className="md:flex md:flex-col xl:grid xl:grid-cols-2 xl:w-[1280px] md:h-[697px] mt-[200px] mx-auto ">
      <div className="relative hidden md:block md:w-full md:h-40 xl:h-[697px]">
        <img src={LOGINHERO} alt="Login Hero" className="object-cover w-full h-full " />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-h2-heading">
          Welcome to <span className="text-primaryGreen text-h2-heading font-medium"> Deeya!</span>
        </h1>
      </div>

      <div className="flex justify-center items-center px-8 md:pb-14 bg-CardBg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
          <h2 className="text-heading font-medium text-center mt-10">Register</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="name flex flex-col w-full md:w-1/2">
              <label htmlFor="name" className="text-body-text mb-2">First Name</label>
              <input
                type="text"
                placeholder="First name"
                {...register('name', { required: 'Name is required' })}
                className=" bg-lightestGreen rounded-lg px-2 py-4"
              />
              {errors.name && <span className="text-red">{errors.name.message}</span>}
            </div>

            <div className="lastName flex flex-col w-full md:w-1/2">
              <label htmlFor="lastname" className="text-body-text mb-2">Last Name (Optional)</label>
              <input
                type="text"
                placeholder="Your Lastname"
                {...register('lastname')}
                className="bg-lightestGreen rounded-lg px-2 py-4"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="email flex flex-col">
            <label htmlFor="email" className="text-body-text font-medium mb-2">Email</label>
            <input
              type="text"
              placeholder="Your email"
              {...register("email")} 
              className="text-body-text bg-lightestGreen rounded-lg px-2 py-4"
            />
            {errors.email && <span className="text-red">{errors.email.message}</span>} 
          </div>

          {/* Password Field */}
          <div className="password relative flex flex-col">
            <label htmlFor="password" className="text-body-text font-medium mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password (min. 8 characters)"
              {...register("password")} 
              className="text-body-text font-medium bg-lightestGreen rounded-lg px-2 py-4"
            />
            <span onClick={passwordVisibility} className="absolute right-2 top-12 cursor-pointer">
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </span>
            {errors.password && <span className="text-red">{errors.password.message}</span>} 
            {errorMessage && <p className="text-red">{errorMessage}</p>}
          </div>

          <p className="text-body-text text-center"> 
            By Registering, you agree to Deeya&apos;s 
            <span className="text-body-text font-semibold">
              <Link to='/tc' className="text-primaryGreen"> Terms &amp; Conditions</Link>
            </span>
            </p>

          

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`text-ui-label-semi-bold font-semibold w-full max-w-[331px] md:max-w-[394px] py-[13px] rounded-2xl mb-6 mt-12 text-white ${isValid ? 'bg-primaryGreen' : 'bg-disabled cursor-not-allowed'}`} // Correctly utilizes isValid for button state
              disabled={!isValid} 
            >
              Register
            </button>
          </div>

          <p className="text-ui-label-medium text-center">
            Have an account? 
            <span className="text-body-text font-semibold">
              <Link to='/login'> Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

