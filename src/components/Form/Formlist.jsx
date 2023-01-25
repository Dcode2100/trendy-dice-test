import React from "react";
import { Form as FormAntd, Input } from "antd";
import { fetchUsers } from "../../redux/userSlice";
const Formlist = ((props) => {
  const { inputValues, setInputValues } = props;
  const { name, email, phone, website } = inputValues;
  
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
    fetchUsers(inputValues);
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
      <FormAntd.Item
        label="Name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input value={name} onChange={handleChange} name={"name"} />
      </FormAntd.Item>

      <FormAntd.Item
        label="email"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input value={email} onChange={handleChange} name={"email"} />
      </FormAntd.Item>
      <FormAntd.Item
        label="phone"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input value={phone} onChange={handleChange} name={"phone"} />
      </FormAntd.Item>
      <FormAntd.Item
        label="website"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input value={website} onChange={handleChange} name={"website"} />
      </FormAntd.Item>
    </FormAntd>
  );
});

export default Formlist;
