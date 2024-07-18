import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from './RegistrationContext';



const ContactInfo = () => {
  const { formData, setFormData } = useRegistration();
  const [address, setAddress] = useState(formData.address || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (address && phone) {
      setFormData({ ...formData, address, phone });
      navigate('/step-three');
    } else {
      setError('Please fill out all fields.');
    }
  };

  return (
    <div className="container mx-auto p-36 flex justify-center">
      <div className="bg-slate-300 text-black p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4 font-semibold">Step 2: Contact Information</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2 font-thin">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-thin">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-lg"
          />
        </div>
        <button
          onClick={handleNext}
          className="bg-black hover:bg-gray-900 text-white py-2 px-4 rounded w-24"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;