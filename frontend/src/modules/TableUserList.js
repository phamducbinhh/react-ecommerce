import React from "react";
import ActionDelete from "../Components/ActionDelete";
import ActionView from "../Components/ActionView";

const TableUserList = ({ users, dispatch }) => {
  console.log(users);
  return (
    <table className="section-center">
      <thead className="thead">
        <tr>
          <th>ID</th>
          <th>TÊN</th>
          <th>EMAIL</th>
          <th>VAI TRÒ</th>
          <th>CHỈNH SỬA</th>
        </tr>
      </thead>
      <tbody>
        {/* map data */}
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user._id.slice(0, 5)}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin ? "Admin" : "User"}</td>
            <td>
              <div className="flex items-center gap-x-3">
                <ActionView />
                <ActionDelete />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUserList;
