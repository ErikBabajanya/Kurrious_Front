// components/RegistrationForm.tsx
"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "@/store/userSlice"; // Assuming you've set up your Redux slice
import { Provider } from "react-redux"; // Import Provider
import store from "@/store"; // Import your Redux store

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    _id: "", // Add a unique ID (you can generate it or use a placeholder)
    email: "",
    password: "",
    role: "user", // Set a default role (you can adjust this based on your app)
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = () => {
    // Validate form data (e.g., check if email and password are valid)
    // Dispatch the user data to Redux store
    dispatch(setUserData(formData));
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      {/* Add other form fields here */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationForm;
