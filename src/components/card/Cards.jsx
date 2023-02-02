import React,{useState} from 'react'
import {Card, Form} from 'antd';
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
  const [liked, setLiked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          <EditOutlined key="edit" onClick={() => setIsModalVisible(true)}/>,
          <DeleteFilled />,
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
      <Form user={user} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>   
    </div>
  );
}

export default Cards