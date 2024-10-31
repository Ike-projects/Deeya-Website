import { sampleBlogData, TRUCK } from "../constants";
import InputApp from "../components/InputApp";
import BlogCard from "../components/BlogCard";
const BlogDetails = () => {
  return (
    <div className="min-h-screen">
      <div className="h-[186px]"></div> 
      <section className=" flex flex-col justify-center items-center">
        <h1 className="w-[975px] text-h1-heading font-heebo leading-none text-center">
          Deeya has crossed over 30, 000 users becoming the no.1 marketplace for
          farm produce
        </h1>
        <div className="mt-[30px] flex">
          <p className=" border-r-2 border-[#0A0C10] px-3 text-3-heading font-heebo">Published by Isaac</p>
          <p className="px-3 text-h3-heading font-heebo">Nov 19, 2024</p>
        </div>
        <img src={TRUCK} alt="" className="w-[855px] h-[507px] mt-[40px]" />
        <div className="w-[855px] mt-[43px]">
          <p className="text-body-text font-heebo">
            Deeya, a dynamic startup founded in 2023, embarked on its journey
            with a mission to revolutionize its industry through innovation and
            forward-thinking strategies. The company managed to raise an
            impressive $100,000 in its initial capital round, which set the
            stage for the implementation of a unique and forward-looking
            strategy that has already begun to position it as a formidable
            player in its sector.
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-[50px] mt-[90px] mb-[100px]">
      <span className="text-h3-eading font-heebo relative left-52  w-56">You may also like</span>
       <div className=" flex items-center justify-center">
       <div className="grid grid-cols-3 w-[1280px]">
       {sampleBlogData.map((blog,index) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              date={blog.date}
              title={blog.title}
              description={blog.description}
              author={blog.author}
              id={index}
            />
          ))}
        </div>
       </div>
        <div className="mt-4  mb-4 flex justify-center items-center gap-[40px] ">
          <div className=" w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#F7F7F7] shadow-md">
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
          <div className="border w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#F7F7F7] shadow-md">
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </section>
      <InputApp />
    </div>
  );
};

export default BlogDetails;
