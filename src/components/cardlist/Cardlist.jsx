// eslint-disable-next-line
import { Col, Row } from "antd";
import React, { useEffect } from "react";
import Cards from "../Card/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";
import "./Cardlist.css";

const Cardlist = () => {
  
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  //eslint-disable-next-line
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const { loading } = useSelector((state) => state.users);

  if (loading) {
    return (
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    );
  }

  return (
    <Row className="row" wrap>
      {users &&
        Array.isArray(users.users) &&
        users.users.map((user) => (
          <Col
            className=" ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-6"
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={6}
            key={user.id}
          >
            <Cards user={user} />
          </Col>
        ))}
    </Row>
  );
};

export default Cardlist;
