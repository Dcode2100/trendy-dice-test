import React, { useState } from "react";
import { Modal } from "antd";
import Formlist from "./Formlist";
import { useDispatch } from "react-redux";
import { fetchUsers  } from "../../redux/userSlice";

const Form = (props) => {
  const { user, isModalVisible = false, setIsModalVisible } = props;
  const [inputValues, setInputValues] = useState({ ...user });
  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(fetchUsers(inputValues));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Formlist inputValues={inputValues} setInputValues={setInputValues} />
      </Modal>
    </>
  );
};

export default Form;
