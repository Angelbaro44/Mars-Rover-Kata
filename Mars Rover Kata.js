let travel_log = [];
const rover = {
    direction: "N",
    x:0,
    y:0,
};

function turnLeft(rover){
    console.log("turnLeft was called!");
    switch (rover.direction) {
        case 'N':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'N';
            break;
    }
}

function turnRight(rover){
    console.log("turnRight was called!");
    switch (rover.direction) {
        case 'N':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'N';
            break;
    }
}

function moveForward(rover) {
        console.log("moveForward was called");
        switch (rover.direction) {
            case 'N':
                rover.y--;
                console.log(rover.y + ',' + rover.x);
                travel_log.push(rover.y + ',' + rover.x);
                break;
            case 'E':
                rover.x++;
                console.log(rover.y + ',' + rover.x);
                travel_log.push(rover.y + ',' + rover.x);
                break;
            case 'S':
                rover.y++;
                console.log(rover.y + ',' + rover.x);
                travel_log.push(rover.y + ',' + rover.x);
                break;
            case 'W':
                rover.x--;
                console.log(rover.y + ',' + rover.x);
                travel_log.push(rover.y + ',' + rover.x);
                break;
        }
}
function moveBackword(rover) {
        console.log("moveBackword was called");
        switch (rover.direction) {
            case 'N':
                rover.y++;
                console.log(rover.y + ',' + rover.x);
                travel_log.push(rover.y + ',' + rover.x);
                break;
            case 'E':
                rover.x--;
                console.log(rover.y + ',' + rover.x);
                travel_log.push(rover.y + ',' + rover.x);
                break;
            case 'S':
                rover.y--;
                console.log(rover.y + ',' + rover.x);
                travel_log.push(rover.y + ',' + rover.x);
                break;
            case 'W':
                rover.x++;
                console.log(rover.y + ',' + rover.x);
                travel_log.push(rover.y + ',' + rover.x);
                break;
        }
}
function commandlist (commands){
    while (commands.length > 0){
        let current = commands.charAt(0);
        commands = commands.substring(1);
        switch (current){
            case "l":
                turnLeft(rover);
                break;
            case 'r':
                turnRight(rover);
                break;
            case 'f':
                moveForward(rover);
                break;
            case 'b':
                moveBackword(rover);
                break;
        }
    }
}
commandlist('r,f,f,r,f,f,l,f,r,f,f');
console.log(travel_log);
