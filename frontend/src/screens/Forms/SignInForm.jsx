// Import the necessary dependencies
import { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Function to save user information in local storage
const saveUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

// SignInForm component
export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const errors = {};

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      errors.email = 'Please enter a valid email address';
      setLoading(false);
    }

    if (!password || password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      setLoading(false);
    }

    if (Object.keys(errors).length === 0) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);

          // Save user information in local storage
          saveUserToLocalStorage(userCredential.user);

          setLoading(false);
          navigate('/home', { replace: true });
        })
        .catch((error) => {
          console.log('Error: ', error);
          errors.email = 'Invalid Email or Password';
          setLoading(false);
        });
    }

    setErrors(errors);
  };

  useEffect(() => {
    // Check if the user is already logged in
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (userFromLocalStorage) {
      navigate('/home', { replace: true });
    }
  }, [navigate]);


  // Render the component
  return (
    <div className="flex items-center justify-center h-screen bg-gray-40">
      
      <div className="w-96 p-10 bg-white rounded-lg shadow-md">
        <h1 className="text-l font-small text-gray-500">Welcome back !!!</h1>
        <h2 className="text-4xl font-Outfit text-myBlue">Sign in</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            />
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-3 py-2 bg-InputBg border border-InputBg rounded-md outline-none focus:border-[#FC6212]"
            />
            <p className="mt-1 text-xs text-red-500">{errors.password}</p>
            <Link to="/forget-password" className="block mt-1 text-sm text-right text-gray-400 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="flex items-center justify-center">
            
            <button
              type="submit"
              className="w-1/2 px-3 py-2 text-sm font-Poppins text-white bg-[#FC6212] rounded-full hover:bg-orange-600 flex items-center justify-center"
            >
            
              SIGN IN
              {    
                !loading ? 
                  <ArrowRightIcon className="w-3 h-3 ml-1" />
                :
                  <span className="ml-2 loading loading-dots loading-xs"></span>
              }
            
            </button>
                
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-400">
          I don't have an account ?{' '}
          <Link to="/sign-up" className="text-[#FC6212] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
