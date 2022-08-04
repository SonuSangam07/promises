const posts=[
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Two', body:'This is post Two'}
];
function getPosts() {
setTimeout(() => {
let output='';
posts.forEach((post,index) =>{
output +=`<li>${post.title}</li>`;
});
document.body.innerHTML=output;
},1000);
}
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(posts.values!==0){
                resolve(posts.pop());
            }
            else{
                reject('Array is empty now');
            }
        },1000);
    });
}
function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            posts.push(post);

            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error:Something went wrong');
            }
            
        },2000);
    })

}
createPost({title:'Post three',body:'This is post three'})
.then(()=>{
    getPosts()
    deletePost().then(()=>{
        getPosts();
    })
})
.catch(err => console.log(err))

//deletePost();