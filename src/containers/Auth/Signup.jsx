import { Button, Form, Input, DatePicker, Select } from "antd";
import { Helmet } from "../../utils/Helmet";

const { Password } = Input;
const { Item } = Form;
const { Option } = Select;

export const Signup = () => {
    return (
        <>
            <Helmet title="Signup" />
            <Form name="basic">
                <Item>
                    <Input placeholder="Fullname" />
                </Item>
                <Item>
                    <Input placeholder="Username" />
                </Item>
                <Item>
                    <Password placeholder="Password" autoComplete="off" />
                </Item>
                <Item>
                    <DatePicker
                        placeholder="Birth Date"
                        style={{ width: "100%" }}
                    />
                </Item>
                <Item>
                    <Select style={{ width: "100%" }} placeholder="Gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                    </Select>
                </Item>
                <Button type="primary" htmlType="submit">
                    Signup
                </Button>
            </Form>
        </>
    );
};
