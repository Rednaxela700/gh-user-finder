import React from "react";
import UserItem from "./UserItem";
import Loader from "../layout/Loader";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
    if (loading) {
        return <Loader />;
    } else {
        return loading ? (
            <Loader />
        ) : (
            <div className="flex flex-wrap">
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default Users;
