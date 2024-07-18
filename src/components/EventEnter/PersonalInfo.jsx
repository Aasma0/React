import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from './RegistrationContext';

const PersonalInfo = () => {
  const { formData, setFormData } = useRegistration();
  const [name, setName] = useState(formData.name || '');
  const [email, setEmail] = useState(formData.email || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (name && email) {
      setFormData({ ...formData, name, email });
      navigate('/step-two');
    } else {
      setError('Please fill out all fields.');
    }
  };

  return (
    <div className="container mx-auto p-36 flex justify-center ">
      <div className="bg-slate-300 text-black p-8 rounded shadow-md w-full max-w-md ">
        <h1 className="text-2xl mb-4 font-semibold">Step 1: Personal Information</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2 font-thin">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-thin">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default PersonalInfo;
