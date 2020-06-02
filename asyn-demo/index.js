console.log('Before');

// getUser(1).
// then(user=> getRepositories(user.gitHubUsername))
// .then(repo=>getCommits(repo[0]))
// .then(commits=>console.log('Commits',commits))
// .catch(err => console.log('Error :', err.message));


async function displayCommit(){
    try {
        const user = await getUser(1);
        const repo = await getRepositories(user.gitHubUsername);
        const commit = await getCommits(repo[0]);  
        console.log(commit);      
    } catch (error) {
        console.log(error.message);
    }
}

displayCommit();

console.log('After');

function getUser(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'Archit' });
          }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
          }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
          }, 2000);        
    });
}