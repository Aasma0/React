import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from './RegistrationContext';


const EventSelect = () => {
  const { formData, setFormData } = useRegistration();
  const [event, setEvent] = useState(formData.event || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (event) {
      setFormData({ ...formData, event });
      navigate('/confirmation');
    } else {
      setError('Please select an event.');
    }
  };

  return (
    <div className="container mx-auto p-36 flex justify-center">
      <div className="bg-slate-300 text-black p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4 font-semibold">Step 3: Event Selection</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2 font-thin">Event</label>
          <select
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
          >
            <option value="">Select an event</option>
            <option value="Holi Fest">Holi Fest</option>
            <option value="Annual Day">Annual Day</option>
            <option value="Dashain Fest">Dashain Fest</option>
          </select>
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

export default EventSelect;
