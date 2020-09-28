import React from 'react';
import Users from "./users.js";
import users from "../users.json";

class Table extends React.Component {
    state = {
        users: users
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <table className="table">
                            <thead>
                                <tr>
                                    {/* Use these onClicks for sorting later */}
                                    <th scope="col" onClick={clickTest}>#</th>
                                    <th scope="col" onClick={clickTest}>First</th>
                                    <th scope="col" onClick={clickTest}>Last</th>
                                    <th scope="col" onClick={clickTest}>Email</th>
                                    <th scope="col" onClick={clickTest}>Phone</th>
                                </tr>
                            </thead>
                            {this.state.users.map(user => (
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
}

function clickTest() {
    console.log("You Clicked!");
};

export default Table;