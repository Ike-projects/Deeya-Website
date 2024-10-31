const TestimonialCard = ({ image, name, testimonial }) => {
    return(
        <div className=" w-[322px]  h-[213px] rounded-[16px] bg-white shadow-2xl flex items-center flex-col relative">
            <div className="rounded-[35px] p-[7px] bg-[#DCE2DF] w-[70px] h-[70px] absolute -top-12"><img src={image} alt="" /></div>
            <h2 className="mt-[32px]">{name}</h2>
            <p className="ms-[13px] me-[9px] mt-[10px]">{testimonial}</p>
        </div>
    )
};





export default TestimonialCard;