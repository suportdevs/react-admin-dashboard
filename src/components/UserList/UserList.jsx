import { DeleteOutline, EditNote } from "@mui/icons-material";
import "./UserList.css";

import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'user', headerName: 'User', width: 250, renderCell: (params) => {
    return (
        <div className="userListUser">
            <img className="userListUserImg" src={params.row.avatar} alt="" />
            <span className="userListUsername">{params.row.username}</span>
        </div>
    )
  }},
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'transactions', headerName: 'Transactions', width: 150 },
  { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
    return (
        <div className="userTableAction">
            <Link to={"user/edit/" + params.row.id}>
            <EditNote className="userListIcon edit" />
            </Link>
            <DeleteOutline className="userListIcon delete" />
        </div>
    )
  } },
];
const rows = [
    { id: 1, username: 'Jhon Snow', email: 'jhon@gmail.com', status: 'Active', transactions: '$35.00', actions:'', avatar: 'https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, username: 'Jhon Snow', email: 'jhon@gmail.com', status: 'Active', transactions: '$35.00', actions:'', avatar: 'https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, username: 'Jhon Snow', email: 'jhon@gmail.com', status: 'Active', transactions: '$35.00', actions:'', avatar: 'https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, username: 'Jhon Snow', email: 'jhon@gmail.com', status: 'Active', transactions: '$35.00', actions:'', avatar: 'https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, username: 'Jhon Snow', email: 'jhon@gmail.com', status: 'Active', transactions: '$35.00', actions:'', avatar: 'https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, username: 'Jhon Snow', email: 'jhon@gmail.com', status: 'Active', transactions: '$35.00', actions:'', avatar: 'https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 7, username: 'Jhon Snow', email: 'jhon@gmail.com', status: 'Active', transactions: '$35.00', actions:'', avatar: 'https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 8, username: 'Jhon Snow', email: 'jhon@gmail.com', status: 'Active', transactions: '$35.00', actions:'', avatar: 'https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];
export default function UserList(){
    return (
        <div className="userList">
            <h3 className="userListTitle">User List</h3>
            <div className="userListContent">
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            </div>
        </div>
    )
}