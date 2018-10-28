import React, { useState, useEffect } from 'react';

//
// function useUserStatus(id) {
//   const [isOnline, setIsOnline] = useState(null);
//
//   function handleStatusChange(status) {
//     console.log('stats mane', status)
//   }
//   useEffect(() => {
//   })
// }

const UserList = (props) => {
  const [userId, setUserId] = useState(props.userList[0].id);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [width]);

  return (
    <>
      {width}
    </>
  )
};

export default UserList;
