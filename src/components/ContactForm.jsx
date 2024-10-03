import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState({});

  //handling input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //handling error

  const validation = () => {
    let newError = {};
    if (formData.name == "") {
      newError.name = "name is required";
    }
    if (formData.email === "") {
      newError.email = "email is required";
    }
    setError(newError);
    return Object.keys(newError).length == 0;
  };

  //submitting the output
  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validation();
    if (valid) {
      notify()
      setUserData([...userData, formData]);
      setFormData({name:"",email:"",message:""})
    }
     
  };

  //toast message
  const notify = () => toast("Your data has been submitted");
  return (
    <div
      className="w-[400px] h-[300px] bg-transparent "
      style={{
        boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        borderRadius: "10px",
      }}
    >
      <form action="" className="">
        <div className="flex flex-col justify-between items-center w-[400px] gap-3">
          <h1 className="font-medium text-xl p-2 uppercase text-indigo-700">
            Contact form
          </h1>
          <div className=" w-[80%]">
            <input
              type="text"
              placeholder="Enter your name here"
              className="capitalize p-2"
              style={{ width: "100%" }}
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
            {error && <div className="error">{error.name}</div>}
          </div>
          <div className=" w-[80%]">
            <input
              type="email"
              placeholder="Enter your email here"
              className="capitalize p-2 w-full"
             
              value={formData.email}
              name="email"
              onChange={handleChange}
              
            />
            {error && <div className="error">{error.email}</div>}
          </div>
          <div className=" w-[80%]">
            <input
              type="textarea"
              placeholder="your message here"
              className="capitalize p-2"
              style={{ width: "100%" }}
              value={formData.message}
              name="message"
              onChange={handleChange}
            />
          </div>
          <button
            className="border bg-blue-600 py-2 px-4 rounded-full  text-white capitalize font-medium "
            onClick={handleSubmit}
          >
            submit
          </button>
          <ToastContainer />
        </div>
      </form>
     
    </div>
  );
}

export default ContactForm;
