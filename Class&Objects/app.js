let data = "SECRET INFO";
class user{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(`Data = ${data}`);
    }
}

class admin extends user{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        data = "Edited Info";
    }
}
let user1 = new user("nikki", "sdf@dfghjk.von");
let admin1 = new admin("Admin", "admin@email.com");