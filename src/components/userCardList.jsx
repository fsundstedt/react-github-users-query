import React, { Component } from 'react';
import UserCard from './userCard';

const UserCardList = props => {
    const {userArray} = props;

    return(
        <div>
            {userArray.map(name =>(
                <div>
                    <p>{name}</p>
                    <UserCard name={name}/>
                </div>
            ))}
        </div>
    )
}

export default UserCardList;