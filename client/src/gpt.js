import React, { useState } from 'react';
import './Login.css';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('로그인 정보:', username, password);
	};

	return (
		<div className="login-wrapper">
			<form onSubmit={handleSubmit}>
				<h2>로그인</h2>
				<div>
					<input type="text" placeholder="아이디" value={username} onChange={(event) => setUsername(event.target.value)} />
				</div>
				<div>
					<input type="password" placeholder="비밀번호" value={password} onChange={(event) => setPassword(event.target.value)} />
				</div>
				<button type="submit">로그인</button>
			</form>
		</div>
	);
}

export default Login;
