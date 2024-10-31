import Button from '../Button';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    const handleClick = () => {
        alert('Button clicked');
    }
    return (
        <nav className="border w-full xl:w-[1360px] flex justify-between px-[40px] py-[4.5px] rounded-[32px] items-center bg-white shadow-md mt-[40px]">
            <h1 className="text-h2-heading font-heebo">Deeya</h1>
            <div className="hidden xl:flex gap-[50px] items-center">
                <ul className="flex gap-6 font-heebo text-body-text">
                    <li className="cursor-pointer hover:text-green-600">
                        <NavLink to="/Deeya-Website/" className={({ isActive }) => {
                            return isActive ? 'text-green-600' : 'text-black';
                        }}>Home</NavLink>
                    </li>
                    <li className="cursor-pointer hover:text-green-600">
                        <NavLink to="/Deeya-Website/marketplace" className={({ isActive }) => {
                            return isActive ? 'text-green-600' : 'text-black';
                        }}>Marketplace</NavLink>
                    </li>
                    <li className="cursor-pointer hover:text-green-600">
                        <NavLink to="/Deeya-Website/blog" className={({ isActive }) => {
                            return isActive ? 'text-green-600' : 'text-black';
                        }}>Blog</NavLink>
                    </li>
                    <li className="cursor-pointer hover:text-green-600">
                        <NavLink to="/Deeya-Website/aboutus" className={({ isActive }) => {
                            return isActive ? 'text-green-600' : 'text-black';
                        }}>About Us</NavLink>
                    </li>

                    <li className="cursor-pointer hover:text-green-600">
                        <NavLink to="/Deeya-Website/contactus" className={({ isActive }) => {
                            return isActive ? 'text-green-600' : 'text-black';
                        }}>Contact Us</NavLink>
                    </li>
                </ul>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </span>
                <div className="space-x-[32px] flex">
                    <Button
                        // onClick={""}
                        label="Log In"
                        disabled={false}
                        className="px-[14px] py-[10px] w-[120px]" />
                    <Button
                        // onClick={""}
                        label="Register"
                        disabled={false}
                        className="px-[14px] py-[10px] rounded-2xl bg-[#2FB078] text-white w-[120px]"
                    />

                </div>
            </div>
            <div className='xl:hidden flex gap-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </div>
        </nav>
    );
}



export default Navigation;