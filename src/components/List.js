import React from 'react';

const List = (props) => {
  return (
    props.characters.map((user) => <div key={user.name}>{user.name}</div>)
  )
};

export default List;
