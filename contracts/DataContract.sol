pragma solidity ^0.8.0;


//import
import "@openzeppelin/contracts/access/Ownable.sol";



contract DataContract is Ownable{
    struct DataStruct{
        uint date;
        string data;
    }

    mapping (string => DataStruct[]) public dataStructs;
    string[] public userList;
    uint public arrayLength;


    function AddData(string memory _address, uint _date, string memory _data)   public returns (bool success) {

        int arrayIndex = indexOf(userList, _address);
        if(arrayIndex<0){
            userList.push(_address); 
            arrayLength++;
        }

        DataStruct memory _dataStruct;
        _dataStruct.data = _data;
        _dataStruct.date = _date;
        
        dataStructs[_address].push(_dataStruct);
        return true;
    }

    function GetData (string memory _address )  public view returns (DataStruct[] memory dataStructsUser)
    {
        return dataStructs[_address];
    }
    
    //helper
        function indexOf(string[] memory arr, string memory searchFor) private pure returns (int) {
    for (uint i = 0; i < arr.length; i++) {
        if (keccak256(abi.encodePacked(arr[i])) == keccak256(abi.encodePacked(searchFor))) {
        return int(i);
        }
    }
        return -1; // not found
    }

}