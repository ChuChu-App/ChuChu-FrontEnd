import React, { useState } from 'react';
import '../styles/globals.css';
import { Layout, Menu, BackTop, MenuProps } from 'antd';
import {
	CoffeeOutlined,
	LoginOutlined,
	HistoryOutlined,
	MehOutlined,
	ProfileOutlined,
	FireOutlined,
	CrownOutlined,
	BulbOutlined,
	CommentOutlined,
	DingtalkOutlined,
	HomeOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Head from 'next/head';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	onClick?: void,
	type?: 'group',
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		onClick,
		type,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('Home', '/', <HomeOutlined />),
	getItem('Login', '/login', <LoginOutlined />),
	getItem('Profile', '/profile', <ProfileOutlined />),

	getItem('음식추천', 'sub1', <FireOutlined />, [
		getItem('간식', '/recommendation/snack', <CrownOutlined />),
		getItem('아침', '/recommendation/breakfast', <BulbOutlined />),
		getItem('점심', '/recommendation/lunch', <MehOutlined />),
		getItem('저녁', '/recommendation/dinner', <HistoryOutlined />),
		getItem('야식', '/recommendation/MidnightSnack', <DingtalkOutlined />),
		getItem('후식', '/recommendation/dessert', <CoffeeOutlined />),
	]),

	getItem('채팅', '/chat', <CommentOutlined />),
];

function MyApp({ Component, pageProps }: AppProps) {
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const router = useRouter();
	const onCollapse = (collapse: boolean) => {
		setCollapsed(collapse);
		console.log(collapse);
	};
	const onClick: MenuProps['onClick'] = (e) => {
		router.push(e.key);
	};
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				collapsible
				collapsed={collapsed}
				collapsedWidth={30}
				onCollapse={onCollapse}
			>
				<Head>
					<title>ChuChu</title>
				</Head>
				<div className="logo" />
				<Menu
					theme="dark"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					onClick={onClick}
					items={items}
				></Menu>
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
