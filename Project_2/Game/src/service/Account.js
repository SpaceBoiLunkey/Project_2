import React from "react";
import { useNavigate } from "react-router-dom";

const Account = ({ account, deleteAccount }) => {
    const navigate = useNavigate();
    const editAccount = (e, id) => {
        e.preventDefault();
        navigate(`/editAccount/${id}`);
    };

    return (
        <tr key={account.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{account.accountName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{account.accountPassword}</div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a
                    onClick={(e, id) => editAccount(e, account.id)}
                    className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                    Edit
                </a>
                <a
                    onClick={(e, id) => deleteAccount(e, account.id)}
                    className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
                    Delete
                </a>
            </td>
        </tr>
    );
};

export default Account;