import React, {useEffect} from "react";

function User({user, onRemove, onToggle }) {
  useEffect(() => {//첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값 들어 있는 배열(deps)
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}//클릭 시 onToggle에 user.id 전달!
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User   
          user={user} 
          key={user.id} 
          onRemove={onRemove} 
          onToggle={onToggle} 
        />
      ))}
    </div>
  );
}

export default UserList;