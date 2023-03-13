let user = {
    id : "2",
    firstName : "ahmadreza"
}
let user2 = {
    id : "1",
    firstName : "tahmasious"
}
let arrOfUsers = [user,user2]

function showAllUsers(){
    for(user of arrOfUsers){
        console.log("id = " + user.id + " first name = " + user.firstName);
    }
}

function getUserById(id){
    if (typeof(id) != "number"){
        console.log("bad parameter !");
        return;
    }
    for(user of arrOfUsers){
        if (user.id == id){
            console.log("id = " + user.id + " first name = " + user.firstName);
            // or return the object
            break;
        }
    }
    console.log("user not found !"); // or return 404
}

function createUser(id, firstName){
    if (typeof(id) != "number"){
        console.log("bad parameter !");
        return;
    }
    arrOfUsers.push({
        id : id,
        firstName : firstName
    })
}

function editUser(id, editedName){
    if (typeof(id) != "number"){
        console.log("bad parameter !");
        return;
    }
    for(user of arrOfUsers){
        if (user.id == id){
            user.firstName = editedName;
            // or return the object
            break;
        }
    }
    console.log("user not found !"); // or return 404
}

createUser(13, "ali");
editUser(13, "morteza");
getUserById(33);
showAllUsers();