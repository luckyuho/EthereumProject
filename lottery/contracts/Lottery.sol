pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address public lastwinner;
    address[] public players;

    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether, "more than 0.01 ether");
        players.push(msg.sender);
    }

    function random() private view returns (uint256) {
        return uint256(keccak256(block.difficulty, now, players));
    }

    function pickWinner() public restricted {
        uint256 index = random() % players.length;
        players[index].transfer(this.balance);
        lastwinner = players[index];
        players = new address[](0);
    }

    modifier restricted() {
        require(msg.sender == manager, "manager only");
        _;
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }
}