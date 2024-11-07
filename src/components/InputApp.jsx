import { SHOPPING, VECTOR , GROUP} from "../constants";
import Button from "./Button";
const InputApp = () => {
    return (
        <section className="flex md:flex-row flex-col bg-[#426B31]">
            <img src={SHOPPING} alt="" className="flex-1" />
            <div className=" flex flex-1 flex-col overflow-hidden items-center justify-center  ms-[48px] gap-[50px]">
                <div className="w-full gap-[16px] flex flex-col text-white ms-10">
                    <h3 className="text-h3-heading font-heebo">Deeya’s Input App!</h3>
                    <p className="text-body-text font-heebo">Offering our buyers better experience with our input app. Buy what you need easily</p>
                </div>
                <div className="flex items-start  gap-6 w-full ms-10">
                <Button icon={GROUP} label={"Get on Iphone"} className="border border-white text-white px-3 rounded-[16px] py-[13px] gap-[14px] flex items-center"/>
                <Button icon={VECTOR} label={"Get on Android"} className="border border-white text-white px-3 rounded-[16px] py-[13px] gap-[14px] flex items-center"/>
                </div>
            </div>
        </section>
    )
}





export default InputApp;