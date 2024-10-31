import { ABOUTHERO, FOUNDER } from "../constants"


const AboutPage = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[400px]">
        <img src={ABOUTHERO} alt="a picture of a woman farming" className="w-full h-full object-cover" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          About Us
        </h1>
      </div>
      <div className="max-w-3xl mx-auto my-10 md:my-20 xl:my-28 px-4 ">
        <p className="text-base md:text-lg">Deeya, established in 2023, is a promising startup that has created a platform dedicated to listing farm produce for consumers to purchase. The company emerged with a mission to bridge the gap between farmers and consumers by providing a marketplace where fresh, locally sourced products can be easily accessed. With an initial capital raise of $100,000, Deeya was able to develop and implement a unique strategy that not only addresses the needs of farmers and consumers but also promotes sustainability and supports the agricultural sector.</p>

        <p className="text-base md:text-lg mt-8"><span>
        The Vision Behind Deeya</span><br/>The founders of Deeya saw a growing need for more direct access to fresh, locally produced food. Consumers were becoming more interested in knowing where their food comes from, while farmers were seeking ways to reach a broader market without going through middlemen. Deeya was designed to address both sides of this equation. By creating a platform that connects farmers directly with consumers, Deeya aims to support local agriculture, reduce food miles, and provide consumers with high-quality, farm-fresh produce.</p>
      </div>

      <h2 className="font-bold text-xl  md:text-3xl mb-8 text-center">Meet the Founder Azure</h2>  

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <img src={FOUNDER} alt="image of founder" className="h-auto md:h-[27rem] w-full object-cover"/>
        <div className="bg-green-700 h-[27rem]">
        <p className="h-full flex items-center justify-center text-center px-7 text-white font-semibold text-xl">Deeya is a vision that I had for years and I’m happy that it has become a platform helping both farmers and buyers globally</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
