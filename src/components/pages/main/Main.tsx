import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <Box className="bg-blue-500 p-4">
            <Button colorScheme="teal">Chakra Button</Button>
            <div className="text-white mt-2">This is a Tailwind CSS styled text.</div>
            <Link to={'/login'}>
                Login
            </Link>
        </Box>
    )
}

export default Main