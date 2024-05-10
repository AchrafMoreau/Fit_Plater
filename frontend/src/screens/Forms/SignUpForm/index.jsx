import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/Firebase';

export default function() {
  const [step, setStep] = useState(true);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();


  const handleNext = () => {
    setStep(!step);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      console.log(userCredential)
      // Redirect to the dashboard page after logging in
      navigate('/home', { replace: true });
      })
    .catch((error) => {
      console.log('Error: ', error);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen px-10 bg-gray-40 " >    
      <div className="w-4/5 px-10 py-6 bg-white rounded-lg shadow-md">
        <div className='flex flex-col	 items-center justify-center gap-4'>
        
        {/* Steppers */}
        <div className='flex max-w-xs space-x-3 self-center'>
          {step ? (
              <>
                <span className="w-14 h-1 rounded-sm bg-myOrange"></span>
                <span className="w-14 h-1 rounded-sm bg-gray-100"></span>
              </>
            ) : (
              <> 
                <span className="w-14 h-1 rounded-sm bg-myOrange"></span>
                <span className="w-14 h-1 rounded-sm bg-myOrange"></span>
              </>
            )}
          </div>

          <div className='self-start'>
            <h1 className="text-l font-small text-gray-500">
              {step ? 'Welcome to our community!' : 'Keep going..'}
            </h1>
            <h2 className="text-3xl font-Outfit font-outfit text-myBlue">
              {step ? 'Track Your Progress & More!' : 'Almost Finished!'}
            </h2>
          </div>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-2 gap-4">
          {step ? (
            <>
              {/* Step 1 input fields */}
              <Step1 formData={formData} handleNext={handleNext} handleInputChange={handleInputChange} />
            </>
          ) : (
            <>
              {/* Step 2 input fields */}
              <Step2 formData={formData} handleSubmit={handleSubmit} handleNext={handleNext} handleInputChange={handleInputChange} />
            </>
          )}

          {/* Next button */}
          <div className="mb-2 col-span-2 flex items-center justify-end">
            {step ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn-phone w-1/4 px-5 py-2 font-Poppins text-white bg-myOrange rounded-full hover:bg-orange-600 flex items-center justify-center shadow transition"
              >
                NEXT
                <ArrowRightIcon fill="currentColor" className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-phone w-1/6 mr-3 px-5 py-2 font-Poppins text-white bg-[#525C60] rounded-full hover:bg-gray-600 flex items-center justify-center shadow transition"
                >
                  <ArrowLeftIcon fill="currentColor" className="w-4 h-4 mr-2" />
                  BACK
                </button>
                <button
                  type="submit"
                  className="btn-phone w-1/4 px-5  py-2 font-Poppins text-white bg-myOrange rounded-full hover:bg-orange-600 flex items-center justify-center shadow transition"
                >
                  SIGN UP
                  <ArrowRightIcon fill="currentColor" className="w-4 h-4 ml-2" />
                </button>
              </>
            )}
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-400">
          Already a member?{' '}
          <Link to="/sign-in" className="text-[#FC6212] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

