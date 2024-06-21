import { Box, Button, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { TypeLoginForm } from 'types/user.types';

const Login = () => {
  const { register, reset, handleSubmit } = useForm<TypeLoginForm>();

  const onSubmit = (data: TypeLoginForm) => {
    console.log(data);
    reset();
  };
  return (
    <Box className="bg-blue-500 min-h-screen w-full flex flex-col items-center justify-center">
      <Box className="text-white text-[48px] font-[700]">Jasur Chat</Box>
      <Box className=" w-[35%] bg-white rounded-md p-[24px] mt-[48px]">
        <Box className="text-center text-gray-500 text-[32px] font-[600]">
          Login
        </Box>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-[16px] mt-[24px]"
        >
          <Input
            placeholder="Email"
            {...register('email', { required: true })}
          />
          <Input
            placeholder="Password"
            {...register('password', { required: true })}
          />
          <Button type="submit" colorScheme="teal" className="mt-[12px]">
            Login
          </Button>
        </form>
        <Box className="flex items-center justify-end mt-[24px]">
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 duration-300"
          >
            Register
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
