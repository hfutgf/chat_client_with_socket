import React, { Suspense } from 'react'
import ChakraUiProvider from './ChakraUiProvider'
import Loading from '@components/pages/loading/Loading'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<Loading />}>
            <ChakraUiProvider>
                {children}
            </ChakraUiProvider>
        </Suspense>
    )
}

export default Providers