import axiosInstance from "../axiosInstance";

// Sign Up (Register)
export const signUp = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/sign-up", userData);
    if(response.status === 201) {
      return response.data;
    }
  } catch (error) {
    const {data} = error?.response;
    return data?.error
  }
};

// Sign In (Login)
export const signIn = async (credentials) => {
  try {
    const {data,status} = await axiosInstance.post("/auth/sign-in", credentials)
    if(status === 200) {
      return data;
    }
  } catch (error) {
    return error
  };
};
