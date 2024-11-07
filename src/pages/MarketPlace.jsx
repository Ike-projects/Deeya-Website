import { HERO } from "../constants";
import MarketPlaceCard from "../components/MarketPlaceCard";
import { sampleMarketPlaceData } from "../constants";
import InputApp  from "../components/InputApp";

const MarketPlace = () => {
    return (
        <>
            <section className="h-[408px] flex items-center text-white justify-center" style={{
                backgroundImage: `url(${HERO})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className='flex items-center justify-center flex-col mt-[100px]'>
                    <h1 className='text-heebo font-heebo'>MarketPlace</h1>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-10 mt-[30px]">
                <h1 className="text-h2-heading font-heebo">All Categories</h1>
                <div className="bg-[#ECF2EC] rounded-[14px] px-[14px] py-3 flex justify-between items-center w-[308px]">
                    <input type="text" placeholder="Search for what you like to order" className="bg-[#ECF2EC] outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#7D7E80" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>
            </section>
            <section className="p-[80px] font-heebo flex flex-col justify-center items-center">
                <h1 className="text-end text-h3-heading w-[1260px] mb-5">1-15 OF 300 RESULTS</h1>
                <div className="flex gap-5 justify-center">
                    <div className="w-[269px] h-[463px] bg-[#F7F7F7] p-[30px]">
                        <div className="w-[130px] h-[266px] flex flex-col gap-5">
                            <h1 className="text-h3-heading ">Categories</h1>
                            <div className="space-x-[14px] text-body-text">
                                <input type="checkbox" />
                                <label htmlFor="Grains">Grains</label>
                            </div>
                            <div className="space-x-[14px] text-body-text">
                                <input type="checkbox" />
                                <label htmlFor="Vegetables">Vegetables</label>
                            </div>
                            <div className="space-x-[14px] text-body-text">
                                <input type="checkbox" />
                                <label htmlFor="Perishables">Perishables</label>
                            </div>
                            <div className="space-x-[14px] text-body-text">
                                <input type="checkbox" />
                                <label htmlFor="Seeds">Seeds</label>
                            </div>
                            <div className="space-x-[14px] text-body-text">
                                <input type="checkbox" />
                                <label htmlFor="Processed">Processed</label>
                            </div>
                        </div>
                    </div>
                        <div className="grid grid-cols-3 gap-5 w-[991px]">
                            {
                                sampleMarketPlaceData.map((item, index) => {
                                    return (
                                        <MarketPlaceCard key={index} image={item.image} title={item.title} discription={item.discription} price={item.price} size={item.size} id={index}/>
                                    )
                                })
                            }
                        </div>
                </div>
                <div className="flex gap-5 mt-10 w-[800px] items-center justify-center ">
                    <ul className="flex gap-[10px] ms-[250px]">
                        <li className="text-ui-label-medium font-heebo w-[32px] h-[32px] p-2 rounded-full bg-[#2FB078] text-white flex items-center justify-center">1</li>
                        <li className="text-ui-label-medium font-heebo w-[32px] h-[32px] p-2 rounded-full bg-[#F7F7F7] flex items-center justify-center">2</li>
                        <li className="text-ui-label-medium font-heebo w-[32px] h-[32px] p-2 rounded-full bg-[#F7F7F7] flex items-center justify-center">3</li>
                        <li className="text-ui-label-medium font-heebo w-[32px] h-[32px] p-2 rounded-full bg-[#F7F7F7] flex items-center justify-center">4</li>
                        <li className="text-ui-label-medium font-heebo w-[32px] h-[32px] p-2 rounded-full bg-[#F7F7F7] flex items-center justify-center">5</li>
                        <li className="text-ui-label-medium font-heebo w-[32px] h-[32px] p-2 rounded-full bg-[#F7F7F7] flex items-center justify-center">.....</li>
                        <li className="text-ui-label-medium font-heebo w-[32px] h-[32px] p-2 rounded-full bg-[#F7F7F7] flex items-center justify-center">10</li>
                    </ul>
                    <p>Next</p>
                </div>
            </section>
            <InputApp/>

        </>

    );

}



export default MarketPlace;