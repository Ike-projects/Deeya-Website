import {create} from 'zustand'
import axios from 'axios'



const userStore = create((set)=>({
    user: null,

    //action to fetch user data from API
    fetchUser: async () => {
        try{
            const response = await axios.get('/apiuser');
            set({user: response.data});
        } catch (error) {
            console.error('error fetching data', error);
        }
    },


    //update user information
    updateUser: async (updatedData)=>{
        try {
            const response = await axios.put('/api/user', updatedData);
            set({user: response.data})
        } catch (error) {
            console.error('error updating user:', error)
        }
    },

    //update user image
    updateImage: async (imageFile) => {
        try {
          const formData = new FormData();
          formData.append('image', imageFile);
    
          const response = await axios.post('/api/user/image', formData); // Replace with actual API endpoint
          set((state) => ({ user: { ...state.user, image: response.data.image } }));
        } catch (error) {
          console.error('Error updating image:', error);
        }
      },
}))

export default userStore
