import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Yup validation schema
    const validationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Email is required"),  
  });

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "onChange",
        resolver: yupResolver(validationSchema), 
      });

      const onSubmit = async(data) => {
        console.log(data);
      };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-4/5  md:bg-CardBg flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-[458px] py-16 ">
            <div className="mb-12">
                <h2 className="text-h3-heading font-medium text-center mb-8">Reset Password</h2>
                <p className="text-h5-heading text-center">We will send you a link to reset your password</p>
            </div>

          {/* Email Field */}
          <div className="email flex flex-col">
            <label htmlFor="email" className="text-body-text font-medium mb-2">Email</label>
            <input
              type="text"
              placeholder="Enter email associated with this account"
              {...register("email")} 
              className="text-body-text bg-lightestGreen rounded-lg px-2 py-4"
            />
            {errors.email && <span className="text-red">{errors.email.message}</span>} 
          </div>

          {/* Reset Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`text-ui-label-semi-bold font-semibold w-full py-[13px] rounded-2xl mb-6 mt-12 text-white ${isValid ? 'bg-primaryGreen' : 'bg-disabled cursor-not-allowed'}`} // Correctly utilizes isValid for button state
              disabled={!isValid} 
            >
              Send Reset Link
            </button>
          </div>

          <Link to='/login'><p className="text-ui-label-medium text-center">
               Back to Login
          </p></Link>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
