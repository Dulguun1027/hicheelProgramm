class Room{
    constructor(roomNumber,roomSize,price){
        this.roomNumber = roomNumber;
        this.roomSize = roomSize;
        this. price = price;
    }

    roomInfo(){
        console.log(`Uruunii dugaar: ${this.roomNumber}`);
        console.log(`Uruunii hemjee: ${this.roomSize}`);
        console.log(`Uruunii une : ${this.price}tugrug`);
    }

    changeRoomSize(newSize){
        this.roomSize = newSize;
        console.log(`${this.roomNumber} dugaartai uruunii hemjee ${this.roomSize} bolj uurchlugluu`);
    }
}

var room = new Room(341,'Tom', 350000);
var room1 = new Room(342, 'dund', 30000);

room.roomInfo();
room.changeRoomSize('Jijig');
room.roomInfo();

room1.roomInfo();
room1.changeRoomSize('extra');
room1.roominfo();








