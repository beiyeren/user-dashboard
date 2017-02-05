/**
 * Created by beiye on 17/1/16.
 */
//noinspection JSUnresolvedVariable
import styles from "./MainLayout.css";
//noinspection JSUnresolvedVariable
import "../../index.less";
import React from "react";
import {Layout, Menu, Breadcrumb, Icon} from "antd";
const {Header, Content, Footer, Sider} = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  }

  render() {
    return (
      <Layout>
        <Header>
          <div className={styles.logo}>
          </div>
          <div className="ant-layout-header-user">
            用户
          </div>
        </Header>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user"/>
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera"/>
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload"/>
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user"/>
              <span className="nav-text">nav 4</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="heart-o"/>
              <span className="nav-text">nav 5</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="team"/>
              <span className="nav-text">nav 6</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content >
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            {this.props.children}
          </Content>
          <Footer>
            懒出游 ©2017
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default MainLayout;
