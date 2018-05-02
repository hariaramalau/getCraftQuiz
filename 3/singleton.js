var singleton = (function () {
    var user;

    function newUser() {
        console.log("User up and running");
    }
    return {
        getUser: function () {
            if (!user) {
                user = newUser();
            }
            return user;
        }
    }
})();

var singleA = singleton.getUser();
var singleB = singleton.getUser();
console.log(singleA)
console.log(singleB)
console.log(singleA === singleB); // true 

//this was done from looking at examples and explanations from googling,
//but to be honest I still don't fully understand it yet.