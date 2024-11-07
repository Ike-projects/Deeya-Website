import { BLOG } from "../constants";
import BlogCard from "../components/BlogCard";
import { sampleBlogsData } from "../constants";
import InputApp from "../components/InputApp";
import Button from "../components/Button";
const Blog = () => {
  return (
    <div>
      <div
        className="h-[480px] flex items-center text-white justify-center "
        style={{
          backgroundImage: `url(${BLOG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-heebo font-heebo">Blog</h1>
          <p className="text-h3-heading mt-[16px] mb-[30px] md:w-[706px] w-[315px] xl:w-full text-center font-heebo">
            Bringing you update, announcement, and news
          </p>
        </div>
      </div>

      <div className="md:px-[100px] px-[20px] py-[70px] flex justify-center flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[30px]">
          {sampleBlogsData.map((blog) => (
            <BlogCard
              key={blog.title}
              image={blog.image}
              date={blog.date}
              title={blog.title}
              description={blog.description}
              author={blog.author}
            />
          ))}
        </div>
        <Button label={"View More"} className="bg-[#2FB078] w-[300px] h-[50px]"/>
      </div>
      <div className="mt-[32px]">
      <InputApp/>

      </div>
    </div>
  );
};

export default Blog;
