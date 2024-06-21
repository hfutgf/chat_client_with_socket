import { defaultRoutes } from '@config/routes'
import { Route, Routes } from 'react-router-dom'

const MainLayout = () => {
    return (
        <Routes>
            {
                defaultRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))
            }

        </Routes>
    )
}

export default MainLayout