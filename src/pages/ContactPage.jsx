import { CONTACTHERO } from "../constants"
import {useForm} from 'react-hook-form'
import { FaEnvelope, FaPhoneAlt} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import './ContactPage.css'


const ContactPage = () => {
    const {register, handleSubmit, formState: {errors, isValid} } = useForm({mode:'onChange'});

    const onSubmit = (data) => {
        console.log(data);
      
      };

  return (
    <div className="w-full"  >
      
      <div className="relative w-full h-[400px] "  >
        <img src={CONTACTHERO} alt="a picture of a woman farming" className="w-full h-full object-cover" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-heebo font-medium">
          Contact Us
        </h1>
      </div>

      <div className="w-full flex flex-col-reverse gap-[1.8rem] px-4 md:px-16 xl:flex-row my-20">
        <aside className="md:flex-row xl:flex-col md:justify-between xl:justify-start md:py-[3.125rem] xl:py-8 md:px-[4.625rem] xl:px-7 md:bg-CardBg  xl:items-start xl:w-1/4  xl:h-[409px] ">
            
            <div className="inquiries xl:flex xl:flex-col xl:items-start">
                <h3 className="text-heading text-center font-medium xl:text-left mb-6">General Enquiries</h3>
                <div className="flex justify-center xl:justify-start space-x-2 text-center">
                        <FaPhoneAlt className="text-primaryGreen text-2xl" />
                        <span className="text-body-text font-medium">+2335934679</span>
                </div>

                <div className="flex justify-center space-x-2 mt-7">
                        <FaEnvelope className="text-primaryGreen text-2xl" />
                        <span className="text-body-text font-medium">Customer@Deeya.com</span>
                </div>
            </div>

            <div className="location">
                <h3 className="text-heading text-center font-medium mb-6 xl:text-start">Our Location</h3>
                <div className="flex justify-center space-x-2">
                        <MdLocationOn className="text-primaryGreen text-2xl" />
                        <span className="text-body-text font-medium">Adenta, Accra</span>
                </div>

            </div>
        
        </aside>


<main className=" bg-CardBg xl:w-3/4 px-4 md:px-16">
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <h2 className="text-heading text-center xl:text-start mb-6 mt-8">Request Information</h2>
    
    <div className="flex gap-4">
      <div className="name flex flex-col w-1/2">
        <label htmlFor="name" className="text-body-text mb-2">Name</label>
        <input
          type="text"
          placeholder="Your name"
          {...register('name', { required: 'Name is required' })}
          className=" bg-lightestGreen rounded-lg px-2 py-4"
        />
        {errors.name && <span className="text-red">{errors.name.message}</span>}
      </div>

      <div className="email flex flex-col w-1/2">
        <label htmlFor="email" className="text-body-text mb-2">Email</label>
        <input
          type="text"
          placeholder="Your email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
          className="bg-lightestGreen rounded-lg px-2 py-4"
        />
        {errors.email && <span className="text-red">{errors.email.message}</span>}
      </div>
    </div>

    <div className="subject flex flex-col">
      <label htmlFor="subject" className="text-body-text mb-2">Subject</label>
      <input
        type="text"
        placeholder="How may we help you?"
        {...register('subject')}
        className="bg-lightestGreen rounded-lg px-2 py-4"
      />
      {errors.subject && <span>{errors.subject.message}</span>}
    </div>

    <div className="message flex flex-col">
      <label htmlFor="message" className="text-body-text mb-2">Message</label>
      <textarea
        placeholder="Please write your concerns here"
        {...register("message", { required: "Message is required" })}
        className="bg-lightestGreen rounded-lg px-2 py-4 h-40"
      />
      {errors.message && <p className="text-red">{errors.message.message}</p>}
    </div>

    <div className="flex justify-center ">
      <button
        type="submit"
        className={`text-ui-label-semi-bold w-full max-w-[331px] md:max-w-[394px] py-[13px] rounded-2xl mb-6 mt-12 text-white ${isValid ? 'bg-primaryGreen' : 'bg-disabled cursor-not-allowed'}`}
        disabled={!isValid}
      >
        Send Message
      </button>
    </div>
  </form>
</main>

      </div>
    </div>
  )
}

export default ContactPage
