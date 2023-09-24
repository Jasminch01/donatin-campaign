import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
const Layout = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;