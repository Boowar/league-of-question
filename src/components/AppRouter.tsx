import { Routes, Route, Navigate} from 'react-router-dom';
import { privateRoutes, RouteNames } from '../router';

const AppRouter = () => {
    return(
        <Routes>
            {privateRoutes.map(route =>
                <Route path={route.path}
                       element={<route.component/>} 
                       key={route.path} />
                )}
                <Route path={'*'} element={<Navigate replace to={RouteNames.MAIN} />} />
        </Routes>
    )
}

export default AppRouter;