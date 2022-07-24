import { Outlet } from "react-router-dom";

export const HomeTemplate = () => {
    return (
        <>
            <h1>Homepage!</h1>
            <Outlet />
        </>
    );
};
