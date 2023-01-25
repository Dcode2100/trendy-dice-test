import React, { useState, useContext } from "react";
import { Modal } from "antd";
import ModalForm from "@Components/ModalForm/ModalForm";


const Form = ((props) => {
  const { user, isModalVisible = false, setIsModalVisible } = props;
  const [inputValues, setInputValues] = useState({ ...user });
  const { updateUser } = useContext(UsersDataContext);
  //eslint-disable-next-line
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    updateUser(inputValues);
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
        <ModalForm inputValues={inputValues} setInputValues={setInputValues} />
      </Modal>
    </>
  );
});

export default Form;
