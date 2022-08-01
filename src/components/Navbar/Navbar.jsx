import { Row, Col, Avatar, Button, Popover } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ReadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import Auth, { SignOutFirebase } from "../../services/auth";
import { PopoverContent } from "./Popover";
import { firstChar } from "../../utils/Typography";
import { Toast, ToastSuccess, ToastError } from "../../utils/Notification";
import { PageNow } from "../../utils/Screen";

import "./Navbar.css";

const { REACT_APP_NAME } = process.env;

export const Navbar = () => {
  const [user] = useAuthState(Auth);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    const { ok, message } = await SignOutFirebase();
    if (ok) {
      Toast(ToastSuccess, { title: "Logout", desc: "Logout Successfully" });
      navigate("/auth/login");
    } else {
      Toast(ToastError, { title: "Logout", desc: message });
    }
  };

  return (
    <>
      <Row className="navbar__base">
        <Col md={1} lg={2} xxl={4}></Col>
        <Col md={22} lg={20} xxl={16}>
          <div className="navbar">
            <Link to="/">
              <div className="navbar__logo">
                <ReadOutlined className="navbar__logo__icon" />
                <span className="navbar__logo_text">{REACT_APP_NAME}</span>
              </div>
            </Link>
            <div className="navbar__menus">
              <ul>
                <Link to="/">
                  <li className={!PageNow() ? "navbar__menus__active" : ""}>
                    Home
                  </li>
                </Link>
                <Link to="/list-news/cnbc/latest-news">
                  <li
                    className={
                      PageNow() === "latest-news" ? "navbar__menus__active" : ""
                    }
                  >
                    Latest News
                  </li>
                </Link>
                <Link to="/list-news/cnbc/tech-news">
                  <li
                    className={
                      PageNow() === "tech-news" ? "navbar__menus__active" : ""
                    }
                  >
                    Tech
                  </li>
                </Link>
                <Link to="/list-news/cnbc/lifestyle-news">
                  <li
                    className={
                      PageNow() === "lifestyle-news"
                        ? "navbar__menus__active"
                        : ""
                    }
                  >
                    Lifestyle
                  </li>
                </Link>
              </ul>
            </div>
            <div className="navbar__info">
              <Button
                style={{
                  backgroundColor: "#202224",
                  color: "#fff",
                  border: "none",
                }}
                icon={<SearchOutlined />}
              >
                Search
              </Button>
              <Popover
                content={
                  <PopoverContent handleLogout={handleLogout} user={user} />
                }
                placement="bottom"
                trigger="click"
              >
                <Avatar
                  style={{
                    color: "#fff",
                    backgroundColor: "#87d068",
                  }}
                  className="navbar__avatar"
                >
                  {firstChar(user?.displayName ?? user?.email)}
                </Avatar>
              </Popover>
            </div>
          </div>
        </Col>
        <Col md={1} lg={2} xxl={4}></Col>
      </Row>
    </>
  );
};
