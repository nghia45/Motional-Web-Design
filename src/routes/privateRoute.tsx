import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface Props {
}

const PrivateRoute = ({ }: Props) => {
    const location = useLocation();
    const userName = localStorage.getItem('userName');

    return (
        userName ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />
    )
}

export default PrivateRoute