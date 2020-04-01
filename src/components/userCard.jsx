import React, { Component } from 'react';

const data = async (name) => {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();
    console.log(data);
    return data;
  };

const UserCard = props => {
    const name = props.name;

    const userData = data(name);

    console.log(userData);

    return (
        <div>
            <div>info: {name}</div>
            <div>{props.name}</div>
        </div>
    )
}

export default UserCard;