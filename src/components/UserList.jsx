import React from "react";

export const UserList = ({ userList, setUserList }) => {
    const deleteUser = (dataId) => {
        setUserList(userList.filter((data) => data?.id !== dataId));}
  return (
    <div>
      <div>
        <ul>
          {userList.map((data) => (
            <li key={data.id}>{data.title} <button
            className="delete"
            onClick={() => deleteUser(data?.id)}
        >
            Delete
        </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
