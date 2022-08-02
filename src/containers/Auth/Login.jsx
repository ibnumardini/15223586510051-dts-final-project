import { useState } from "react";
import { Button, Form, Input } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { LoginFirebase } from "../../services/auth";
import { Helmet } from "../../utils/Helmet";
import { Toast, ToastSuccess, ToastError } from "../../utils/Notification";

const { Password } = Input;
const { Item } = Form;

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    let error = false;

    if (email.length < 1) {
      Toast(ToastError, { type: "Login", desc: "Email must be provided" });
      error = true;
    }

    if (password.length < 1) {
      Toast(ToastError, {
        type: "Login",
        desc: "Password must be provided",
      });
      error = true;
    }

    if (!error) {
      const { ok, message } = await LoginFirebase({ email, password });
      if (ok) {
        Toast(ToastSuccess, {
          title: "Login",
          desc: "Login Successfully",
        });

        navigate("/");
      } else {
        Toast(ToastError, {
          title: "Login",
          desc: message,
        });
      }
    }

    setLoading(false);
  };

  return (
    <>
      <Helmet title="Login" />
      <Form name="basic">
        <Item>
          <Input
            placeholder="E-mail"
            prefix={<UserOutlined />}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Item>
        <Item>
          <Password
            placeholder="Password"
            autoComplete="off"
            prefix={<KeyOutlined />}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Item>
        <Button type="primary" loading={loading} onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </>
  );
};
