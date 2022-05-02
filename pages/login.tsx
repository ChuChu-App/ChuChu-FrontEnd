import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';

const login = () => {
	const onFinish = (values: any) => {
		axios.get('/api/login', values).then((d) => {
			console.log(d);
		});
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Username"
				name="username"
				rules={[{ required: true, message: '아이디를 입력해주세요!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: '패스워드를 입력해주세요!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				name="remember"
				valuePropName="checked"
				wrapperCol={{ offset: 8, span: 16 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default login;
