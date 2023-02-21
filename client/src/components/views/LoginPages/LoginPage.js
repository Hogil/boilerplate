import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import auth from '../../../hoc/auth';
import '../../../gpt.css';

function LoginPage() {
	const dispatch = useDispatch();

	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');

	const navigate = useNavigate();

	const emailHandler = (event) => {
		setEmail(event.currentTarget.value);
	};
	const passwordHandler = (event) => {
		setPassword(event.currentTarget.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		console.log('Email', Email);
		console.log('Password', Password);

		let body = {
			email: Email,
			password: Password,
		};

		dispatch(loginUser(body)).then((response) => {
			if (response.payload.loginSuccess) {
				navigate('/');
			} else {
				alert('Error');
			}
		});
	};
	return (
		<div className="login-wrapper">
			<form onSubmit={submitHandler}>
				<h2>로그인</h2>
				<div class="inputCont">
					<input type="text" placeholder="이메일" value={Email} onChange={emailHandler} />
					<input type="password" placeholder="비밀번호" value={Password} onChange={passwordHandler} />
				</div>
				<button type="submit">로그인</button>
			</form>
		</div>
	);
}

export default auth(LoginPage, false);
