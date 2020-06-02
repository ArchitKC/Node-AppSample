const parallel1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('AsyncOperation 1');
        resolve(1);
        //reject(new Error('Find someone else'));
      }, 2000);
});

const parallel2 = new Promise((resolve)=>{
    setTimeout(() => {
        console.log('AsyncOperation 2');
        resolve(2);
      }, 1000);
});


Promise.all([parallel1,parallel2])
//Promise.race([parallel1,parallel2])
.then(result => console.log(result))
.catch(Err => console.log('Error: ', Err.message ));