import { Row, Col, Avatar, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ReadOutlined } from "@ant-design/icons";

import "./Navbar.css";

export const Navbar = () => {
    return (
        <>
            <Row className="navbar__base">
                <Col md={1} lg={2} xxl={4}></Col>
                <Col md={22} lg={20} xxl={16}>
                    <div className="navbar">
                        <div className="navbar__logo">
                            <ReadOutlined className="navbar__logo__icon" />
                            <span className="navbar__logo_text">
                                Beritaku News
                            </span>
                        </div>
                        <div className="navbar__menus">
                            <ul>
                                <li>Home</li>
                                <li>News</li>
                                <li>Sport</li>
                                <li>Lifestyle</li>
                                <li>Contact</li>
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
                            <Avatar
                                style={{
                                    color: "#fff",
                                    backgroundColor: "#87d068",
                                }}
                            >
                                MF
                            </Avatar>
                        </div>
                    </div>
                </Col>
                <Col md={1} lg={2} xxl={4}></Col>
            </Row>
        </>
    );
};
