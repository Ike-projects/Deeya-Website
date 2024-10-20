import {VISA, MASTERCARD,AMERICAN_EXPRESS,FLUTTERWAVE,PAYSTACK, INSTAGRAM, FACEBOOK, TWITTER} from '../../constants/index';
const Footer = () => {
    return (
        <footer className='flex items-center justify-center flex-col px-[80px] py-[48px]'>
            <section className='flex items-center justify-between w-[924px]'>
                <h1 className='text-h3-heading font-heebo text-[#424345]'>All Payments are secured by</h1>
                <div className='flex gap-[30px]'>
                    <img src={PAYSTACK} alt="" />
                    <img src={FLUTTERWAVE} alt="" />
                    <img src={VISA} alt="" />
                    <img src={AMERICAN_EXPRESS} alt="" />
                    <img src={MASTERCARD} alt="" />
                </div>
            </section>
            <section className=' flex justify-between w-[1280px] mt-[60px]'>
                <div>
                    <h1 className='font-heebo text-h2-heading leading-none mb-[20px]'>Deeya</h1>
                    <p>Enjoy fresh, affordable, and traceable farm produce, delivered to <br />you in just 24 to 48 hours!</p>
                </div>
                <div className='flex gap-[100px]'>
                    <div className=''>
                        <h1 className='mb-[20px] font-heebo text-h3-heading'>Quick Links</h1>
                        <ul className='space-y-[20px]'>
                            <li className='font-heebo text-ui-label-medium'>Create an account</li>
                            <li className='font-heebo text-ui-label-medium'> Log in</li>
                            <li className='font-heebo text-ui-label-medium'> Marketplace</li>
                            <li className='font-heebo text-ui-label-medium'>Blog</li>
                            <li className='font-heebo text-ui-label-medium'>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div> 
                        <h1 className='font-heebo text-h3-heading mb-[20px]'>Contact Us</h1>
                        <p className='font-heebo text-ui-label-medium'>customer@deeya.com</p>
                    </div>
                    <div className='space-y-[20px]'>
                        <h1 className='font-heebo text-h3-heading'>Follow Us</h1>
                        <div className='space-x-[16px] flex'>
                            <img src={FACEBOOK} alt='facebook icon'/>
                            <img src={INSTAGRAM} alt='instagram icon'/>
                            <img src={TWITTER} alt='twitter icon'/>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}





export default Footer;