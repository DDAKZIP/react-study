import React, { useRef, useState, useMemo } from 'react';
// import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './userList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log("활성 사용자 수 세는중,,");
  return users.filter(user => user.active).length;
}

//렌더링!
function App() {
  //const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = useState(<상태 초기 값>);
  const [inputs, setInputs] = useState({//입력값 변수로 저장 (dict)
    username: '',
    email: ''
  });

  const {username, email } = inputs;//값 추출하기

  const onChange = e => {//입력값이 변경되었을 때
    const { name, value } = e.target;

    //불변성 유지하며 객체중 일부만 update
    setInputs({//입력값 set
      ...inputs,//배열 복제 후
      [name]: value //해당하는 부분만 덮어쓰기!
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);//nextId : {current: 4}

  const onCreate = () => {//배열에 항목 추가하는 로직
    
    const user = {//유저 만들어서~
      id: nextId.current,
      username,
      email
    };

    //배열 새 항목 추가할 때 
    // setUsers([...users, user]);//spread 연산자 사용!
    setUsers(users.concat(user));//2번째 방법

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    //제거로직 => user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id가 id인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user => //배열 업데이트 할 때도!
        user.id === id ? {...user, active: !user.active } : user//id값 비교해서 다르면 그대로, 같다면 active값 반전!
      )
    );
  };
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;