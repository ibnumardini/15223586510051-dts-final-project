import { Button, Form, Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { Helmet } from "../../utils/Helmet";

const { Password } = Input;
const { Item } = Form;

export const Login = () => {
    return (
        <>
            <Helmet title="Login" />
            <Form name="basic">
                <Item>
                    <Input placeholder="Username" prefix={<UserOutlined />} />
                </Item>
                <Item>
                    <Password
                        placeholder="Password"
                        autoComplete="off"
                        prefix={<KeyOutlined />}
                    />
                </Item>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form>
        </>
    );
};
