import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Typography, Col, Row } from "antd";
import { ReadOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

import "./AuthTemplate.css";

const { Title, Paragraph } = Typography;
const { REACT_APP_NAME } = process.env;

export const AuthTemplate = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const prefixPath = "/auth";
  const signup = pathname === `${prefixPath}/signup`;

  useEffect(() => {
    if (![`${prefixPath}/login`, `${prefixPath}/signup`].includes(pathname)) {
      navigate("/auth/login");
    }
  }, [navigate, pathname]);

  return (
    <Row id="auth__base">
      <Col xxl={9} xl={8} lg={7} md={5} sm={4} xs={2}></Col>
      <Col xxl={6} xl={8} lg={10} md={14} sm={16} xs={20}>
        <div id="auth">
          <div className="auth__logo">
            <ReadOutlined className="auth__logo__icon" />
          </div>
          <div className="auth__title">
            <Title level={2}>
              {signup ? "Sign Up" : "Login"} to {REACT_APP_NAME}
            </Title>
            <Paragraph>
              {signup
                ? "Join with us, you can access the outside world very easily."
                : "Log in to get unlimited access, and enjoy your surfing."}
            </Paragraph>
          </div>
          <div className="auth__form">
            <Outlet />
          </div>
          <div className="auth__extra">
            {!signup && (
              <div className="auth__extra__forgot_password">
                <Link to="/auth/forgot-password">Forgot your password?</Link>
              </div>
            )}
            <div className="auth__extra__sign_up">
              <Paragraph>
                {signup
                  ? "Already have an account? "
                  : "Don't have an account? "}
              </Paragraph>
              <Link to={`/auth/${signup ? "login" : "signup"}`}>
                {signup ? "Login" : "Sign Up"}
              </Link>
            </div>
          </div>
        </div>
      </Col>
      <Col xxl={9} xl={8} lg={7} md={5} sm={4} xs={2}></Col>
    </Row>
  );
};
