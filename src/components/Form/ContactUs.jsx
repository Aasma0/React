import React, { useState } from 'react';

const ContactUs = () => {
  const [formValues, setFormValues] = useState({ name:"", email: "", message:""})
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formValues.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
      // handle form submission
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <div className="mb-4">
          <label for="name" className="block text-gray-700">Name</label> {" "}
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            placeholder="Your Name"
          />
          {errors.name && <p>{errors.name}</p>}
          
        </div>
        <div className="mb-4">
          <label for="email" className="block text-gray-700">Email</label>
          <input    
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange} 
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Your Email"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label for="message" className="block text-gray-700">Message</label>
          <textarea 
          type="text"
            id="message"
            name="message"
            value={formValues.name}
            onChange={handleChange}className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" rows="4" placeholder="Your Message"
          >

          </textarea>
          {errors.message && <p>{errors.message}</p>}

        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
