import React, { useState } from 'react';
import '../styles/globals.css';
import { Layout, Menu, Breadcrumb, BackTop, Alert } from 'antd';
import axios from 'axios';
import {
  FileOutlined,
  LoginOutlined,
  ProfileOutlined,
  ReadOutlined,
  FundProjectionScreenOutlined,
  RadarChartOutlined,
  CommentOutlined,
  DingtalkOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface Props {
  children: JSX.Element;
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const result = axios
    .get('http://localhost:3000/hello')
    .then((data) => console.log(data));
  const onCollapse = (collapse: boolean) => {
    setCollapsed(collapse);
    console.log(collapse);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        collapsedWidth={30}
        onCollapse={onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            onClick={() => router.push('/')}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<LoginOutlined />}
            onClick={() => router.push('/login')}
          >
            Login
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<ProfileOutlined />}
            onClick={() => router.push('/profile/dbwnghks')}
          >
            프로필
          </Menu.Item>
          <SubMenu key="sub1" icon={<ReadOutlined />} title="게시판">
            <Menu.Item
              key="4"
              onClick={() => router.push('/board/project')}
              icon={<FundProjectionScreenOutlined />}
            >
              프로젝트
            </Menu.Item>
            <Menu.Item
              key="5"
              onClick={() => router.push('/board/study')}
              icon={<RadarChartOutlined />}
            >
              스터디
            </Menu.Item>
            <Menu.Item
              key="6"
              onClick={() => router.push('/board/mentoring')}
              icon={<DingtalkOutlined />}
            >
              멘토링
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key="7"
            onClick={() => router.push('/rooms')}
            icon={<CommentOutlined />}
          >
            채팅
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px', alignSelf: 'center' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Component {...pageProps} />
            <BackTop>
              <div id="stylesd">UP</div>
            </BackTop>
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
}

export default MyApp;
