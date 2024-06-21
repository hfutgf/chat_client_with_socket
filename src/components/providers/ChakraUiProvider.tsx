import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const ChakraUiProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}

export default ChakraUiProvider