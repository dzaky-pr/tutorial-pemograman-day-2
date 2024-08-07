import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import FormInput from '../molecules/FormInput';

const handleClickLogin = async () => {
  alert('berhasil login');
  window.location.href = '/';
};

function Auth(props) {
  const { authType } = props;
  return (
    <div className="flex flex-col gap-2 p-5">
      {authType === 'login' && (
        <div className="flex flex-col gap-2">
          {' '}
          <h1 className="text-3xl mb-2 flex w-full text-center items-center justify-center font-medium">Login</h1>
          <FormInput label="Username" type="text" />
          <FormInput label="Password" type="password" />
          <Button color="bg-green-400" onClick={handleClickLogin}>
            Login
          </Button>
          <p>
            Sudah punya akun? <Link to="/registrasi">regist</Link>
          </p>
        </div>
      )}

      {authType === 'registrasi' && (
        <div className="flex flex-col gap-2">
          {' '}
          <h1 className="text-3xl mb-2 flex w-full text-center items-center justify-center font-medium ">Registrasi</h1>
          <FormInput label="Username" type="text" />
          <FormInput label="Password" type="password" />
          <FormInput label="Confirm Password" type="password" />
          <Button color="bg-green-400">Regist</Button>
          <p>
            Sudah punya akun? <Link to="/login">login</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Auth;
