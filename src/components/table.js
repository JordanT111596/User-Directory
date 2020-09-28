import React from 'react';
import Users from "./users.js";
import users from "../users.json";

class Table extends React.Component {
    state = {
        userList: users,
        sortOrder: ""
    };

    handleNumSort = (whatToSort) => {
        let newSort;
        newSort = this.state.userList.sort((a, b) => {
            if (this.state.sortOrder === "des") {
                return a[whatToSort] - b[whatToSort];
            } else {
                return b[whatToSort] - a[whatToSort];
            }
        });
        console.log(newSort);
        const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des";
        this.setState({ userList: newSort, sortOrder: newSortOrder })
    };

    handleStringSort = (whatToSort) => {
        const newSort = this.state.userList.sort((a, b) => {
            var stringA = a[whatToSort].toUpperCase();
            var stringB = b[whatToSort].toUpperCase();
            if (this.state.sortOrder === "des") {

                if (stringA < stringB) {
                    return -1;
                }
                if (stringA > stringB) {
                    return 1;
                }

                // strings must be equal
                return 0;
            } else {
                if (stringA < stringB) {
                    return 1;
                }
                if (stringA > stringB) {
                    return -1;
                }

                // strings must be equal
                return 0;
            }
        });
        console.log(newSort);
        const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des";
        this.setState({ userList: newSort, sortOrder: newSortOrder })
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
                                    <th scope="col" onClick={() => this.handleNumSort("id")}>#</th>
                                    <th scope="col" onClick={() => this.handleStringSort("firstName")}>First</th>
                                    <th scope="col" onClick={() => this.handleStringSort("lastName")}>Last</th>
                                    <th scope="col" onClick={() => this.handleStringSort("email")}>Email</th>
                                    <th scope="col" onClick={() => this.handleStringSort("phone")}>Phone</th>
                                </tr>
                            </thead>
                            {this.state.userList.map(user => (
                                <Users
                                    key={user.id}
                                    id={user.id}
                                    firstName={user.firstName}
                                    lastName={user.lastName}
                                    email={user.email}
                                    phone={user.phone} />
                            ))}
                        </table>
                    </div>
                </div>
            </div >
        )
    }
}

export default Table;