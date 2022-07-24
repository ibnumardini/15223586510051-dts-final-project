import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import { Helmet } from "../../utils/Helmet";

import "./HomeTemplate.css";

export const HomeTemplate = () => {
    return (
        <>
            <Helmet title="Home" />
            <Navbar />
            <Outlet />
        </>
    );
};
