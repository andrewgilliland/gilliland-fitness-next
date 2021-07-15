import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../lib/auth';
import Container from '../../components/Container'

const Login = () => {
  const [ loading, setLoading ] = useState(false);
  const { signinWithEmailandPassword } = useAuth();
  const { handleSubmit, register, errors } = useForm();

  const onLogin = ({ email, pass }) => {
    setLoading(true);
    signinWithEmailandPassword(email, pass).catch((error) => {
      setLoading(false);
    });
  };

  return (
    <form
      errors={errors}
      onSubmit={handleSubmit((data) => onLogin(data))}
      className="w-64 mx-auto my-10 flex-col items-center"
      //   register={register}
    >
      <div className="mt-2 flex flex-col border-2 border-black shadow-offset-green">
        <label className="bg-black text-white font-semibold p-2">
          Email Address
        </label>
        <input
          autoFocus
          aria-label="Email Address"
          className="p-2 font-mono"
          id="email"
          name="email"
        //   ref={register({
        //     required: 'Please enter your email.'
        //   })}
        />
        {/* <span>{errors.email && errors.email.message}</span> */}
      </div>
      <div className="mt-2 flex flex-col border-2 border-black shadow-offset-green">
        <label className="bg-black text-white font-semibold p-2">
          Password
        </label>
        <input
          aria-label="Password"
          name="pass"
          className="p-2 font-mono"
          id="password"
          type="password"
        //   ref={register({
        //     required: 'Please enter a password.'
        //   })}
        />
        {/* <span>{errors.pass && errors.pass.message}</span> */}
      </div>
      <button id="login" type="submit">
        Login
      </button>
    </form>
  );
};

const LoginPage = () => (
    <Container>
        <Login />
    </Container>
 
);

export default LoginPage;