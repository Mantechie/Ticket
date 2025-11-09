'use client';

import { useState } from 'react';
import Link from 'next/link';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Input from '@components/Form/Input';
import Switch from '@components/Form/Switch';
import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';

// utils
import Request, { type IRequest, type IResponse } from '@utils/Request';

interface IFormProps {
  tos: boolean;
  name: string;
  email: string;
  lastname: string;
  password: string;
}

const Form: React.FC = () => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IFormProps>({
    name: '',
    email: '',
    lastname: '',
    password: '',
    tos: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  /**
   * Google sign-up handler
   * Opens Google's OAuth page in a new tab
   */
  const handleGoogleSignUp = (): void => {
    const googleAuthURL =
      'https://accounts.google.com/o/oauth2/v2/auth' +
      '?client_id=YOUR_GOOGLE_CLIENT_ID' + // replace with real client ID
      '&redirect_uri=http://localhost:3000/auth/google/callback' +
      '&response_type=code' +
      '&scope=openid%20email%20profile';

    window.open(googleAuthURL, '_blank', 'width=500,height=600');
  };

  /**
   * Form submission handler for normal sign-up
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    hideAlert();

    if (!formValues.tos) {
      showAlert({
        type: 'error',
        text: 'Please agree to our Privacy Policy and Terms of Service.',
      });
      return;
    }

    setLoading(true);

    try {
      const parameters: IRequest = {
        url: 'v1/signup/password', // ✅ Correct endpoint for signup
        method: 'POST',
        postData: {
          name: formValues.name,
          lastname: formValues.lastname,
          email: formValues.email,
          password: formValues.password,
        },
      };

      const req: IResponse = await Request.getResponse(parameters);
      const { status, data } = req;

      if (status === 200) {
        showAlert({ type: 'success', text: 'Account created successfully!' });
        setTimeout(() => {
          window.location.href = '/members/activate/account';
        }, 1500);
      } else {
        showAlert({
          type: 'error',
          text: data?.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Unable to connect to the server. Please check your network.';
      showAlert({
        type: 'error',
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader type='inline' color='gray' text='Creating your account...' />;
  }

  return (
    <form
      className='form shrink'
      noValidate
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
    >
      <div className='form-elements'>
        {/* Google Sign-Up Button */}
        <div className='form-line'>
          <div className='one-line'>
            <button type='button' className='google-button' onClick={handleGoogleSignUp}>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width='18px'
                height='18px'
                viewBox='0 0 48 48'
              >
                <g>
                  <path
                    fill='#EA4335'
                    d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
                  />
                  <path
                    fill='#4285F4'
                    d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
                  />
                  <path
                    fill='#FBBC05'
                    d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
                  />
                  <path
                    fill='#34A853'
                    d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
                  />
                </g>
              </svg>
              <span>Sign up with Google</span>
            </button>
          </div>
        </div>

        <div className='or-line'>
          <hr />
          <span>OR</span>
        </div>

        {/* Name */}
        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='name'>First Name</label>
            </div>
            <Input
              type='text'
              name='name'
              value={formValues.name}
              placeholder='Enter your first name'
              required
              onChange={handleChange}
              maxLength={8}
            />
          </div>
        </div>

        {/* Last Name */}
        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='lastname'>Last Name</label>
            </div>
            <Input
              type='text'
              name='lastname'
              value={formValues.lastname}
              placeholder='Enter your last name'
              required
              onChange={handleChange}
              maxLength={8}
            />
          </div>
        </div>

        {/* Email */}
        <div className='form-line'>
          <div className='one-line'>
            <div className='label-line'>
              <label htmlFor='email'>Email Address</label>
            </div>
            <Input
              type='email'
              name='email'
              value={formValues.email}
              placeholder='Enter your email'
              required
              onChange={handleChange}
              maxLength={8}
            />
          </div>
        </div>

        {/* Password */}
        <div className='form-line'>
          <div className='label-line'>
            <label htmlFor='password'>Password</label>
          </div>
          <Input
            type='password'
            name='password'
            value={formValues.password}
            placeholder='Enter your password'
            required
            onChange={handleChange}
            maxLength={8}
          />
        </div>

        {/* Terms & Privacy */}
        <div className='form-line'>
          <div className='label-line'>
            <label htmlFor='tos'>Agreements</label>
          </div>
          <Switch name='tos' color='blue' onChange={handleCheckboxChange}>
            I agree to the{' '}
            <Link href='/legal/privacy-policy' className='blue'>
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href='/legal/terms-of-service' className='blue'>
              Terms of Service
            </Link>
          </Switch>
        </div>

        {/* Submit */}
        <div className='form-buttons'>
          <Button type='submit' color='blue-filled' text='Sign up' />
        </div>
      </div>
    </form>
  );
};

export default Form;
