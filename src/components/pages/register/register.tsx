import { Box, Button, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { authService } from 'services/auth.service';
import { IRegisterForm } from 'types/user.types';

const Register = () => {
  const { register, reset, handleSubmit } = useForm<IRegisterForm>();

  const onSubmit = async (data: IRegisterForm) => {
    await authService.register(data);
    reset();
  };
  return (
    <Box className="bg-blue-500 min-h-screen w-full flex flex-col items-center justify-center">
      <Box className="text-white text-[48px] font-[700]">Jasur Chat</Box>
      <Box className=" w-[35%] bg-white rounded-md p-[24px] mt-[48px]">
        <Box className="text-center text-gray-500 text-[32px] font-[600]">
          Register
        </Box>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-[16px] mt-[24px]"
        >
          <Input placeholder="Name" {...register('name', { required: true })} />
          <Input
            placeholder="Email"
            {...register('email', { required: true })}
          />
          <Input
            placeholder="Password"
            {...register('password', { required: true })}
          />
          <Button type="submit" colorScheme="teal" className="mt-[12px]">
            Register
          </Button>
        </form>
        <Box className="flex items-center justify-end mt-[24px]">
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-700 duration-300"
          >
            Login
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
