console.log('Before');
const user = getUser(1, function(user){
    console.log('User ID:', user.id);
    console.log('User Name:', user.gitHubUserName);
});
console.log('After');


function getUser(id,callback){
    setTimeout(()=>{
        console.log('Reading a user from a database...');
        callback ({id:id, gitHubUserName : 'Archit'});
    },2000);
}