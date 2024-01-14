// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Sechat {
    mapping(address => bool) public registeredUsers;
    mapping(address => mapping(address => bool)) public friends;

    event UserRegistered(address indexed user);
    event FriendAdded(address indexed sender, address indexed friend);
    event FriendRemoved(address indexed sender, address indexed friend);

    function registerUser() external {
        require(!registeredUsers[msg.sender], "User already registered");
        registeredUsers[msg.sender] = true;
        emit UserRegistered(msg.sender);
    }

    function addFriend(address _friend) external {
        require(registeredUsers[msg.sender] && registeredUsers[_friend], "Users must be registered");
        require(msg.sender != _friend, "Cannot add yourself as a friend");
        require(!friends[msg.sender][_friend], "Already friends");
        friends[msg.sender][_friend] = true;
        emit FriendAdded(msg.sender, _friend);
    }

    function removeFriend(address _friend) external {
        require(registeredUsers[msg.sender] && registeredUsers[_friend], "Users must be registered");
        require(friends[msg.sender][_friend], "Not friends");
        friends[msg.sender][_friend] = false;
        emit FriendRemoved(msg.sender, _friend);
    }
}
