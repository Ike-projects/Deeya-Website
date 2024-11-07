import { useEffect, useState } from 'react';
import useUserStore from '../stores/userStore';

const UserAccountPage = () => {
  const { user, fetchUser, updateUser, updateImage } = useUserStore();

  // Local state for form data with new fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phoneNumber: '',
    nationality: '',
    address: '',
  });

  //local state to monitor change in input feilds
  const [isChanged, setIsChanged] = useState(false)

  useEffect(() => {
    // Fetch user data on component mount
    fetchUser();
  }, [fetchUser]);

  // Update form data when user data is available
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        country: user.country || '',
        phoneNumber: user.phone || '',
        nationality: user.nationality || '',
        address: user.address || '',
      });
    }
  }, [user]);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      // Check if any field has been changed
      setIsChanged(
        Object.keys(updatedData).some((key) => updatedData[key] !== user[key])
      );
      return updatedData;
    });
  };

  // Handle form submission to update user data
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await updateUser(formData);
    setIsChanged(false); // Reset the change flag after submit
  };

  // Handle profile image update
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await updateImage(file);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center ">
      <div className='container flex flex-col xl:flex-row gap-36 mt-[100px] xl:mx-[80px]  space-y-8 xl:space-y-0 w-full xl:min-w-[1290px]'>
          {/* Profile Section */}
            <section className="xl:min-w-[326px]  flex justify-center ">
                <div className='container flex flex-row xl:flex-col justify-center items-center rounded-md bg-CardBg w-full md:max-w-[585px] h-[163px]  xl:h-[357px]  gap-[54px] xl:gap-[30px]'>
                    <div className='flex flex-col items-center gap-3 '>
                        {user?.image ? (
                        <img src={user.image} alt="User profile" className="w-16 h-16 rounded-full" />
                        ): (
                        <div className="w-[80px] h-[80px] xl:w-[100px] xl:h-[100px] rounded-full bg-lightestGreen flex items-center justify-center text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm0 2c-4.336 0-8 2.164-8 4.5v1.5h16v-1.5c0-2.336-3.664-4.5-8-4.5z"
                                />
                            </svg>
                        </div>
                        )}
                        <h2 className="text-body-text font-medium">{user?.name}</h2>
                      </div>

                      <div className='update-image-button '>    
                          <button className="bg-primaryGreen text-white text-ui-label-semi-bold font-semibold w-[128px] py-[13px] rounded-2xl cursor-pointer mt-2">
                              Update Image
                              <input
                              type="file"
                              onChange={handleImageUpload}
                              className="hidden"
                              accept="image/*"
                              />
                          </button>
                      </div>
                </div>
            </section>

          {/* Personal Information Form */}
          <section className='w-full h-full xl:min-w-[812px]'>
            <div className='bg-CardBg w-full py-7 px-9 rounded-md'>
                <h2 className='text-h3-heading font-medium mb-6'>Personal Information</h2>
                <form onSubmit={handleFormSubmit} className='grid grid-cols-2 gap-4 '>
                    <div>
                    <label htmlFor="firstName" className="block text-body-text font-medium mb-2 ">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="text-body-text bg-lightestGreen rounded-lg px-2 py-4 w-full"
                    />
                    </div>
                    <div>
                    <label htmlFor="lastName" className="block text-body-text font-medium mb-2">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="text-body-text bg-lightestGreen rounded-lg px-2 py-4 w-full"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-body-text font-medium mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="text-body-text bg-lightestGreen rounded-lg px-2 py-4 w-full"
                    />
                    </div>
                    <div>
                    <label htmlFor="country" className="block text-body-text font-medium mb-2">Country</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="text-body-text bg-lightestGreen rounded-lg px-2 py-4 w-full"
                    />
                    </div>
                    <div>
                    <label htmlFor="phoneNumber" className="block text-body-text font-medium mb-2">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="text-body-text bg-lightestGreen rounded-lg px-2 py-4 w-full"
                    />
                    </div>
                    <div>
                    <label htmlFor="nationality" className="block text-body-text font-medium mb-2">Nationality</label>
                    <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        className="text-body-text bg-lightestGreen rounded-lg px-2 py-4 w-full"
                    />
                    </div>
                    <div className="col-span-2">
                    <label htmlFor="address" className="block text-body-text font-medium mb-2">Address</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="text-body-text bg-lightestGreen rounded-lg px-2 py-4 w-full"
                        rows="3"
                    />
                    </div>
                    
                </form>

                <div className=' button-style w-full flex justify-center'>
                  <button
                  type="submit"
                  className={`text-ui-label-semi-bold font-semibold w-full md:max-w-[394px] py-[13px] rounded-2xl mb-6 mt-12 text-white ${
                      isChanged
                      ? 'bg-primaryGreen' 
                      : 'bg-lightestGreen cursor-not-allowed' 
                  }`}
                  disabled={!isChanged} 
                  >
                  Update Data
                  </button>
                </div>
            </div>

            {/* Password Section */}
            <div className='bg-CardBg mt-5 p-4 rounded-xl '>
                <a href="/change-password" className="text-black text-body-text">
                Change Password
                </a>
            </div>

          </section>
      </div>

     
    </div>
  );
};

export default UserAccountPage;
