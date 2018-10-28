import React from 'react';
import UserList from '../components/UserList';

const userList = [
  { id: 1, name: 'Jon' },
  { id: 2, name: 'Travis' },
  { id: 3, name: 'Reggie' },
  {id: 4, name: 'Kihwan' }
];


const User = () => (
  <UserList userList={userList} />
);

export default User;
