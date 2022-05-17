import React, { useEffect, useState } from "react";
import { Layout, Menu , Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "../resources/layout.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header, Sider, Content, Footer } = Layout;

const DefaultLayout = (props) => {

  const [collapsed, setCollapsed] = useState(false);
  const { cartItems, loading } = useSelector((state) => state.rootReducer);
  const navigate = useNavigate()
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      {loading && (
        <div className="spinner">
          <div
          class="spinner-border"
          role="status"
        >
        </div>
        </div>
      )}
    
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 10 }}>
        
        <div className="sp">
          <h3>FOOD MART</h3>
        </div>
         <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={window.location.pathname}
        >
        <div className="ds">
         <b> <Menu.Item key="/home" icon={<HomeOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item></b>
         <b> <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}>
            <Link to="/cart">Cart</Link>
          </Menu.Item></b>
          <b><Menu.Item key="/bills" icon={<CopyOutlined />}>
            <Link to="/bills">Bills</Link>
          </Menu.Item></b>
          <b><Menu.Item key="/items" icon={<UnorderedListOutlined />}>
            <Link to="/items">Items</Link>
          </Menu.Item></b> 
        <b>  <Menu.Item key="/customers" icon={<UserOutlined />}>
            <Link to="/customers">Customers</Link>
          </Menu.Item></b>
         <b> <Menu.Item key="/logout" icon={<LoginOutlined />} onClick={()=>{
            localStorage.removeItem('pos-user')
            navigate('/login')
          }}>
            Logout
          </Menu.Item></b>
          </div>
        </Menu>
          
          <div
            className="cart-count d-flex align-items-center"
            onClick={() => navigate("/cart")}
          >
            <b className="Count">
              {" "}
              <p className="mt-3 mr-2">{cartItems.length}</p>
            </b>
            <div className="cartsymbol"><ShoppingCartOutlined /></div>
            
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "10px",
            padding: 24,
            minHeight:'80vh'
          }}
        >
          {props.children}
        </Content>
       
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;