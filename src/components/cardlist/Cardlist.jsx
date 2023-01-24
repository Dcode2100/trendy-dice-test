// eslint-disable-next-line
import { Col,Row } from "antd";
import React, { useState, useEffect } from "react";
import Cards from "../Card/Cards";    

const Cardlist = () => {
  // eslint-disable-next-line
  const [users, setUser] = useState([]);
  
  useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUser(data))
},[]);

  return (
    <div>
      <Row className="row" wrap>
        {users.map((user) => (
          <Col
            className=" ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-6"
            xs={24} sm={24} md={8} lg={8} xl={6}
            key={user.id}
          >
            <Cards user={user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cardlist;
