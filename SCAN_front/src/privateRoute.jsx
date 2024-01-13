import { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { Context } from './main'
import { observer } from "mobx-react-lite";

const PrivateRoute = (props) => {
    const {store} = useContext(Context)

    /*
    if (authStore.isLoadingAuth) {
        return <div>Checking auth...</div>;
    }
    */

    if (localStorage.getItem('accessToken')) {
        return <Outlet/>
    } else {
        return <Navigate to="/authorization" />;
    }
};
  
export default observer(PrivateRoute);