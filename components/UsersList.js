import { useMemo, useState } from 'react';

function UsersList({ users, startingLetter }) {
  
    const filterdUser = useMemo(()=>{
      return (
        users.filter(user => user.name.startsWith(startingLetter))
      )
    },[users, startingLetter])
  return (
    <ul>
      {filterdUser.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default UsersList;
