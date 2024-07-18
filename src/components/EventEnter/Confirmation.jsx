import { useNavigate } from 'react-router-dom';
import { useRegistration } from './RegistrationContext';


const Confirmation = () => {
    const { formData } = useRegistration();
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      // Handle form submission (e.g., send data to server)
      console.log('Form submitted:', formData);
      alert('Registration successful!');
      navigate('/');
    };
  
    return (
      <div className="container mx-auto p-36 flex justify-center">
        <div className="bg-slate-200 text-black p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl mb-4 font-semibold">Confirmation</h1>
          <p className="mb-2"><strong>Name:</strong> {formData.name}</p>
          <p className="mb-2"><strong>Email:</strong> {formData.email}</p>
          <p className="mb-2"><strong>Address:</strong> {formData.address}</p>
          <p className="mb-2"><strong>Phone:</strong> {formData.phone}</p>
          <p className="mb-4"><strong>Event:</strong> {formData.event}</p>
          <button
            onClick={handleSubmit}
            className="bg-black hover:bg-gray-900 text-white py-2 px-4 rounded w-24"
            >
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default Confirmation;