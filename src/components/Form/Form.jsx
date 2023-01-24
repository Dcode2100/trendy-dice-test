import React, { useContext, memo } from "react";
import { Form as FormAntd, Input } from "antd";
import { UsersDataContext } from "~/contexts/UsersData";

const ModalForm = memo((props) => {
  const { inputValues, setInputValues } = props;
  const { name, email, phone, website } = inputValues;
  const { updateUser } = useContext(UsersDataContext);
  const handleChange = (e) => {
    const value = e.currentTarget.value;
    const targetName = e.currentTarget.name;

    if (targetName === "name") {
      return setInputValues((prevValues) => {
        return { ...prevValues, name: value };
      });
    } else if (targetName === "email") {
      return setInputValues((prevValues) => {
        return { ...prevValues, email: value };
      });
    } else if (targetName === "phone") {
      return setInputValues((prevValues) => {
        return { ...prevValues, phone: value };
      });
    } else if (targetName === "website") {
      return setInputValues((prevValues) => {
        return { ...prevValues, website: value };
      });
    }
  };

  const onSubmit = (values) => {
    updateUser(inputValues);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FormAntd
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input value={name} onChange={handleChange} name={"name"} />
      </Form.Item>

      <Form.Item
        label="email"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input value={email} onChange={handleChange} name={"email"} />
      </Form.Item>
      <Form.Item
        label="phone"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input value={phone} onChange={handleChange} name={"phone"} />
      </Form.Item>
      <Form.Item
        label="website"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input value={website} onChange={handleChange} name={"website"} />
      </Form.Item>

      {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
           <Button type="primary" htmlType="submit">
             Submit
           </Button>
         </Form.Item> */}
    </FormAntd>
  );
});

export default ModalForm;
