import user from './user';

let fns = [];
for(let i in user){
    fns[i] = user[i];
}
export default fns;
//export { ...user };
//export { getUser, login };
