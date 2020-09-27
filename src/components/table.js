import React from 'react';
import Users from "./users.js";
import users from "../users.json";

function Table() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        {users.map(user => (
                            <Users
                                key={user.id}
                                id={user.id.toString()}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                email={user.email}
                                phone={user.phone} />
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table;