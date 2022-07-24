import { Helmet as HelmetTitle } from "react-helmet-async";

const { REACT_APP_NAME } = process.env;

export const Helmet = ({ title }) => {
    return <HelmetTitle title={`${title} | ${REACT_APP_NAME}`} />;
};
