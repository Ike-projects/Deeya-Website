import { Link } from "react-router-dom";
import { LOGINHERO } from "../constants";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';

// Yup validation schema
const validationSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Email is required"), 
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"), 
});

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema), 
  });
  const [showPassword, setShowPassword] = useState(false);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async(data) => {
    console.log(data);

    // LOGIC FOR WHEN BACKEND IS READY
    // try {
    //     const response = await axios.post("/api/login", data); // Endpoint URL
    //     if (response.status === 200) {
    //       localStorage.setItem("token", response.data.token); // Save token
    //       // Redirect user to dashboard or other page
    //       window.location.href = "/";
    //     }
    //   } catch (error) {
    //     console.error("Login error:", error);
    //     setErrorMessage("Invalid email or password.");
    //   }
    
  };

  return (
    <div className="md:flex md:flex-col xl:grid xl:grid-cols-2 xl:w-[1280px] md:h-[697px] mt-[40px] md:mt-[100px] mx-auto">
      <div className="relative hidden md:block md:w-full md:h-40 xl:h-[697px]">
        <img src={LOGINHERO} alt="Login Hero" className="object-cover w-full h-full " />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-h2-heading">
          Welcome back!
        </h1>
      </div>

      <div className="flex justify-center pt-[40px] xl:pt-[50px]  px-8 md:pb-14 md:bg-CardBg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
          <h2 className="text-heading font-medium text-center  mb-[50px]">Log In</h2>

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
              placeholder="Password"
              {...register("password")} 
              className="text-body-text font-medium bg-lightestGreen rounded-lg px-2 py-4"
            />
            <span onClick={passwordVisibility} className="absolute right-2 top-12 cursor-pointer">
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </span>
            {errors.password && <span className="text-red">{errors.password.message}</span>} 
            {errorMessage && <p className="text-red">{errorMessage}</p>}
          </div>

          <Link to='/reset'><p className="text-body-text text-end">Forgot Password?</p></Link>

          

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`text-ui-label-semi-bold font-semibold w-full max-w-[331px] md:max-w-[394px] py-[13px] rounded-2xl mb-6 mt-12 text-white ${isValid ? 'bg-primaryGreen' : 'bg-disabled cursor-not-allowed'}`} // Correctly utilizes isValid for button state
              disabled={!isValid} 
            >
              Send Message
            </button>
          </div>

          <p className="text-ui-label-medium text-center">
            Don&apos;t have an account yet?
            <span className="text-body-text font-semibold">
              <Link to='/register'> Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
