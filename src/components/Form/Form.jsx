import React, { useState } from "react";
import { Modal} from "antd";
import Formlist from "./Formlist";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers  } from "../../redux/userSlice";
import { setIsModalVisible } from "../../redux/userSlice";

const Form = (props) => {
  
  const [inputValues, setInputValues] = useState({ ...props.user });
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.ui.isModalOpened);
  
  const handleOk = () => {
    dispatch(fetchUsers(inputValues));
    dispatch(setIsModalVisible(false));
  };

  const handleCancel = () => {
    dispatch(setIsModalVisible(false));
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Formlist inputValues={inputValues} setInputValues={setInputValues} />
      </Modal>
    </>
  );
};

export default Form;
