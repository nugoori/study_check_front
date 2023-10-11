import axios from 'axios';
import './App.css';

function App() {

  const handleInputChange = () => {
  
  }

  const handleSignUpSubmit = () => {
    axios.post("http://localhost:8080/auth/signup", {
      email: "1111@qwer.com",
      password: "qwer1234",
      username: "김준일"
    })
  }

  return (
    <>
      <div>
        <h1>
          회원가입
        </h1>
        <div><input type="text" name='email' placeholder='이메일 입력' onChange={handleInputChange} /></div>
        <div><input type="password" name='password' placeholder='비밀번호 입력' onChange={handleInputChange} /></div>
        <div><input type="text" name='username' placeholder='사용자 이름 입력' onChange={handleInputChange} /></div>
        <button onClick={handleSignUpSubmit}>가입하기</button>
      </div>
    </>
  );
}

export default App;
