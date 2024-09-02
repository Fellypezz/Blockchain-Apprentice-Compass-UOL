// Objetivo:
// - Qualquer pessoa pode enviar Ethers para o contrato
// - Somente o proprietario pode sacar fundos
// - Qualquer pessoa pode verificar o saldo do contrato

pragma solidity ^0.8.19;

contract SimpleWallet {
    // Endereco do proprietario do contrato
    address payable public owner;

    // O primeiro a executar o contrato se torna o proprietario
    constructor() {
        owner = payable(msg.sender);
    }

    // Funcao que permite que qualquer pessoa envie Ethers para o contrato
    receive() external payable {}

    // Modificador que permite apenas ao proprietario executar certas funcoes
    modifier onlyOwner() {
        require(msg.sender == owner, "Somente o proprietario tem permissao");
        _;
    }

    // Funcao para o proprietario sacar uma quantia especifica de Ethers do contrato
    function withdraw(uint _amount) external onlyOwner {
        require(
            _amount <= address(this).balance,
            "Saldo insuficiente no contrato"
        );
        owner.transfer(_amount);
    }

    // Funcao para verificar o saldo do contrato
    function getContractBalance() external view returns (uint) {
        return address(this).balance;
    }

    // Funcao para verificar o saldo do proprietario
    function getOwnerBalance() external view returns (uint) {
        return owner.balance;
    }
}
