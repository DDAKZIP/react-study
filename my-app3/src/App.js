import React, { useRef } from 'react';
// import Counter from './Counter';
// import InputSample from './InputSample';
import UserList from './userList';

//렌더링!
function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    //나중에 구현할 배열에 항목 추가하는 로직
    nextId.current += 1;
  }

  return <UserList users={users} />;
}

export default App;