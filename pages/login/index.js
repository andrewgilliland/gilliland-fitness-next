import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../lib/auth';
import Container from '../../components/Container'

const Login = () => {
  const [ loading, setLoading ] = useState(false);
  const { createUserWithEmailAndPassword ,signInWithEmailAndPassword, user } = useAuth();
  const { handleSubmit, register, errors } = useForm();

  const onLogin = ({ email, password }) => {
    setLoading(true);
    signInWithEmailAndPassword(email, password).catch((error) => {
      setLoading(false);
    });
  };

  return (
    <form
      errors={errors}
      onSubmit={handleSubmit((data) => onLogin(data))}
      className="w-64 mx-auto my-10 flex-col items-center"
      {...register}
    >
      <div className="mt-2 flex flex-col border-2 border-black shadow-offset-green">
        <label className="bg-black text-white font-semibold p-2">
          Email Address
        </label>
        <input
          autoFocus
          aria-label="Email Address"
          className="p-2"
          id="email"
          name="email"
          type="email"
          {...register('email', {required: true})}
        />
      </div>
      <div className="mt-2 flex flex-col border-2 border-black shadow-offset-green">
        <label className="bg-black text-white font-semibold p-2">
          Password
        </label>
        <input
          aria-label="Password"
          className="p-2"
          id="password"
          name="password"
          type="password"
          {...register('password', {required: true})}
        />
      </div>
      <button id="login" type="submit">
        { loading ?
        (
          <span>
            Loading...
          </span>
        ) 
        :
        (
          <span>
            Login
          </span>
        )
        }
      </button>
      <div>{user?.email}</div>
    </form>
  );
};

const LoginPage = () => (
    <Container>
        <Login />
    </Container>
);

export default LoginPage;