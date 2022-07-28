import { useState } from "react";
import { Button, Form, Input, DatePicker, Select } from "antd";
import { useNavigate } from "react-router-dom";

import { RegisterFirebase } from "../../services/auth";
import { Helmet } from "../../utils/Helmet";
import { Toast, ToastSuccess, ToastError } from "../../utils/Notification";

const { Password } = Input;
const { Item } = Form;
const { Option } = Select;

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true);

    let error = false;

    if (name.length < 1) {
      Toast(ToastError, { type: "Signup", desc: "Name must be provided" });

      error = true;
    }

    if (email.length < 1) {
      Toast(ToastError, { type: "Signup", desc: "Email must be provided" });

      error = true;
    }

    if (password.length < 1) {
      Toast(ToastError, {
        type: "Signup",
        desc: "Password must be provided",
      });

      error = true;
    }

    if (!error) {
      const { ok, message } = await RegisterFirebase({ name, email, password });
      if (ok) {
        Toast(ToastSuccess, {
          title: "Signup",
          desc: "SignUp Successfully",
        });

        navigate("/");
      } else {
        Toast(ToastError, { title: "Signup", desc: message });
      }
    }

    setLoading(false);
  };

  return (
    <>
      <Helmet title="Signup" />
      <Form name="basic">
        <Item>
          <Input
            placeholder="Fullname"
            onChange={(e) => setName(e.target.value)}
          />
        </Item>
        <Item>
          <Input
            placeholder="E-mail"
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
          />
        </Item>
        <Item>
          <Password
            placeholder="Password"
            autoComplete="off"
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
          />
        </Item>
        <Item>
          <DatePicker placeholder="Birth Date" style={{ width: "100%" }} />
        </Item>
        <Item>
          <Select style={{ width: "100%" }} placeholder="Gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Item>
        <Button type="primary" loading={loading} onClick={handleRegister}>
          Signup
        </Button>
      </Form>
    </>
  );
};
