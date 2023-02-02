import React,{useState} from 'react'
import {Card, Form} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalVisible } from '../../redux/userSlice';
import { deleteUser } from '../../redux/userSlice';
import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  HeartFilled,
  DeleteFilled,
} from "@ant-design/icons";

const Cards = (user) => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.ui.isModalOpened);
  const [liked, setLiked] = useState(false);
  
  const visibleButton = () => {
      dispatch(setIsModalVisible(!visible))
  }

  const deleteUser = (id) => {
    dispatch(deleteUser(id))
  }

  return (
    <div>
      <Card
        className="card m-4"
        cover={<img alt="example" src={user.user.avatar} />}
        actions={[
          liked ? (
            <HeartFilled
              style={{ color: "red", fontSize: "20px" }}
              onClick={() => setLiked((prevstate) => !prevstate)}
            />
          ) : (
            <HeartOutlined
              style={{ color: "red", fontSize: "20px" }}
              onClick={() => setLiked((prevstate) => !prevstate)}
            />
          ),
          <EditOutlined key="edit" onClick={() => visibleButton(true)} />,
          <DeleteFilled onClick={ () => deleteUser(user.id)}/>,
        ]}
      >
        <div className={""}>
          <h3 className="flex font-medium">{user.user.name}</h3>
          <div className="flex flex-row justify-start items-center">
            <MailOutlined />
            <p className="ml-3 my-0 mr-0">{user.user.email}</p>
          </div>
          <div className="flex flex-row justify-start items-center">
            <PhoneOutlined />
            <p className="ml-3 my-0 mr-0">{user.user.phone}</p>
          </div>
          <div className="flex flex-row justify-start items-center">
            <GlobalOutlined />
            <p className="ml-3 my-0 mr-0">{user.user.website}</p>
          </div>
        </div>
      </Card>
      <Form user={user}/>
    </div>
  );
}

export default Cards