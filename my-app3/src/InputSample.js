import React, { useState, useRef } from 'react';

function InputSample() {
  //input에 name 설정하고 이벤트 발생시 참조. useState에서는 객체형태 상태 관리
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef();//Ref 객체 만듬.-> 우리가 선택하고 싶은 DOM에 ref값으로 설정.

  const {name, nickname} = inputs;//비구조화 할당을 통해 값 추출
  // console.log("name:", name);
  // console.log("nickname:",nickname);

  const onChange = (e) => {
    const {value, name} = e.target;//e.target에서 name과 value 추출 - name: name, nickname
    console.log("value, name:", value, name);
    setInputs({
      ...inputs, //기존 input 객체 복사한 뒤
      [name]: value // name 키를 가진 값 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();//Ref객체의 .current : 우리가 원하는 DOM 가리킴
  };

  return (
    <div>
      <input 
        name="name" 
        placeholder='이름' 
        onChange={onChange} 
        value={name}
        ref={nameInput}
      />
      <input 
        name="nickname" 
        placeholder='닉네임' 
        onChange={onChange} 
        value={nickname} 
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;