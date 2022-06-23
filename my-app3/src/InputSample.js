import React, { useState } from 'react';

function InputSample() {
  //input에 name 설정하고 이벤트 발생시 참조. useState에서는 객체형태 상태 관리
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const {name, nickname} = inputs;//비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const {value, name} = e.target;//e.target에서 name과 value 추출
    setInputs({
      ...inputs, //기존 input 객체 복사한 뒤
      [name]: value // name 키를 가진 값 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };

  return (
    <div>
      <input name="name" placeholder='이름' onChange={onChange} value={name}/>
      <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;