import React, { useRef, useState } from 'react';
// import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './userList';
import CreateUser from './CreateUser';

//렌더링!
function App() {
  const [inputs, setInputs] = useState({//입력값
    username: '',
    email: ''
  });

  const {username, email } = inputs;

  const onChange = e => {//입력값이 변화했을 때
    const { name, value } = e.target;
    setInputs({//입력값 set
      ...inputs,
      [name]: value
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

  const nextId = useRef(4);
  const onCreate = () => {
    //배열에 항목 추가하는 로직
    const user = {
      id: nextId.current,
      username,
      email
    };

    //배열 새 항목 추가할 때 
    // setUsers([...users, user]);//spread 연산자 사용!
    setUsers(users.concat(user)); 

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
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

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;