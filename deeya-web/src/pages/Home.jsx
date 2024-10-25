import Button from '../components/Button';
import { VEGETABLES, ELLIPSE1, sampleBlogData, sampleTestimonialData, SIBLINGS, ARROW, CREATE, STRAWBERRY, ABRICOT } from '../constants/index'
import InputApp from '../components/InputApp';
import BlogCard from '../components/BlogCard';
import TestimonialCard from '../components/TestimonialCard';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <>
            <div className="h-[600px] flex items-center text-white justify-center" style={{
                backgroundImage: `url(${VEGETABLES})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className='flex items-center justify-center flex-col'>
                    <h1 className='text-heebo font-heebo'>Deeya</h1>
                    <p className='text-h3-heading mt-[16px] mb-[30px] md:w-[706px] w-[315px] xl:w-full text-center font-heebo'>Enjoy fresh, affordable, and traceable farm produce, delivered to you in just 24 to 48 hours!</p>
                    <Button label="Start Buying" disabled={false} className='px-[21px] py-[13px] bg-[#2FB078] text-white rounded-[16px] text-ui-label-semi-bold font-heebo' />
                </div>
            </div>
            <section className='py-14 flex items-center justify-center flex-col xl:gap-[32px] relative'>
                <div className='bg-[#70824C] md:w-[706px] xl:w-[1118px] w-full h-auto md:h-[237px] xl:h-[151px] rounded-[16px] flex xl:flex-row flex-col xl:justify-between justify-center xl:gap-0 gap-10 items-center px-[50px] absolute -top-[90px]'>
                    <div className='relative'>
                        <img className='hidden md:flex absolute left-[115px] -top-[32px] ' src={ARROW} alt="" />
                        <p className='text-heading font-heebo text-white xl:w-[431px]'>Why Choose DEEYA for your Farm Produce </p>
                    </div>
                    <div className='flex justify-between gap-[145px]'>
                        <div className='flex gap-[16px] items-center'>
                            <div className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center'> <img src={SIBLINGS} alt="" /></div>
                            <div className='flex flex-col gap-[16px]'>
                                <h1 className='text-body-text font-heebo text-white leading-none'>Customers</h1>
                                <p className='text-h2-heading font-heebo text-white leading-none'>3000+</p>
                            </div>
                        </div>
                        <div className='flex gap-[16px] items-center'>
                            <div className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center'> <img src={CREATE} alt="" /></div>
                            <div className='flex flex-col gap-[16px]'>
                                <h1 className='text-body-text font-heebo text-white leading-none'>Produce delivered</h1>
                                <p className='text-h2-heading font-heebo text-white leading-none'>10,300+ kg</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='text-h2-heading font-heebo leading-none mt-[50px]'>About Us</h2>
                <p className='w-[408px] md:w-[981px] text-center font-heebo text-body-text'>Deeya is a tech-driven platform transforming smallholder agriculture by digitizing input sales, providing market access, and promoting
                    sustainable practices—boosting productivity and driving scalable impact in rural economies.</p>
                <Button label={"Read More"} className='text-ui-label-semi-bold font-heebo text-white bg-[#2FB078] px-[14px] py-[10px]' />
            </section>
            <section className='bg-[#426B31] py-[50px] relative'>
                <img className='hidden md:flex absolute bottom-28 left-60' src={ABRICOT} alt="" />
                <h2 className='text-h2-heading font-heebo text-center mb-[40px] text-white py-[40px]'>What Our Buyers Say</h2>
                <div className='flex justify-center gap-[60px] mb-[60px] items-center'>
                    <div className='hidden w-[50px] h-[50px] md:flex items-center justify-center bg-white shadow-md rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2FB078" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </div>
                   <div className='overflow-x-hiddens gap-[60px] w-full md:w-[1086px] grid grid-cols-3 '>
                   {
                        sampleTestimonialData.map((testimonial) => (
                            <TestimonialCard image={testimonial.image} name={testimonial.name} testimonial={testimonial.testimonial} />
                        ))
                    }
                   </div>
                    <div className='hidden w-[50px] h-[50px] md:flex items-center justify-center bg-white shadow-md rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2FB078" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
                <div className='flex justify-center mt-[20px] space-x-[10px]'>
                    <Button label={"Sign up to buy"} className='bg-white px-[10px] py-[14px] w-[150px] h-[50px] text-ui-label-semi-bold font-heebo' />
                </div>
                <img className='hidden md:flex absolute right-72 bottom-12' src={STRAWBERRY} alt="" />
            </section>
            <section className='flex flex-col items-center '>
                <h2 className='text-h2-heading font-heebo mt-[50px]'>Our Blogs</h2>
                <div className="grid md:grid-cols-3 gap-[70px] mt-[40px] mb-[40px]">


                    {
                        sampleBlogData.map((blog) => (
                            <BlogCard image={blog.image} date={blog.date} title={blog.title} description={blog.description} author={blog.author} />
                        ))
                    }
                    {/* <TestimonialCard image={ELLIPSE1} name={"Nadia"} testimonial={"I totally love how easy it is to use this platform"}/> */}
                </div>
                <Button label={"View Blogs"} className='bg-[#2FB078] px-[10px] py-[14px] text-white mb-[50px]' />
            </section>
            <div className='space-y-[71px]'>
                <section className='bg-[#384E2C] h-[210px] space-y-auto flex flex-col justify-center'>
                    <h2 className='text-h3-heading font-heebo text-white text-center mb-[50px]'>Partners</h2>
                    <h3 className='text-h3-heading font-heebo text-white text-center'>Alx Ventures</h3>
                </section>
                <InputApp />
            </div>
        </>

    )
}




export default Home;