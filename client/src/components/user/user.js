import React, { useState, useEffect } from "react";
import { API_URL } from "../../config/Constants";
import axios from "axios";
import { Link, Route, Routes, useParams } from "react-router-dom";
import "./user.css";

const UserList = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    axios.get(`${API_URL}/api/admin/users`).then((response) => {
      setusers(response.data);
    });
  };
  return (
    
    <div className="container">
      <div className="py-4">
        <h4 className="text-success">Danh sách người đăng ký</h4>
        <div>
          <div className="admin-subcontent table-responsive">
            <table className="table table-striped table-sm" id="table-xe">
              <thead>
                <tr>
                  <th scope="col">Tên người dùng</th>
                  <th scope="col">Giới tính</th>
                  <th scope="col">Ngày sinh</th>
                </tr>
              </thead>
              <tbody>
              {users.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.username}</td>
                      <td>{val.gender}</td>
                      <td>{val.birthday}</td>
                    </tr>
                  )
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserList;
