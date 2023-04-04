

console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const preMovie=async()=>{
    const promiseWifeBringTickets=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    })
    const getPopcorn=new Promise((resolve, reject)=>resolve('popcorn'));
    const addButter=new Promise((resolve,reject)=>resolve('butter'));
    const getColdDrinks=new Promise((resolve, reject)=>resolve('coldDrink'));
    
    let ticket= await promiseWifeBringTickets;
    
    console.log(`Wife: I have the ${ticket}`);
    console.log('Husband: Should we go in');
    console.log('Wife: No, I am hungry');
    
    let popcorn=await getPopcorn;
    
    console.log(`Husband: I got some ${popcorn}`);
    console.log('Husband: Should we go in');
    console.log('Wife: I need some butter on the popcorn');
    
    let butter=await addButter;
    
    console.log(`Husband: I got some ${butter} on the popcorn`);
    console.log('Husband: Do you want anything else darling');
    console.log('Wife:I need cold Drink darling!');
    
    let coldDrink=await getColdDrinks;
    
    console.log(`Husband: I got some chilled ${coldDrink} darling!`);
    console.log('Husband: Do you want anything else');
    console.log('Wife: No, we are getting late lets go');
    console.log('Husband: Lets go and enjoy the movie Darling!')
    
    return ticket;
}

preMovie().then((m)=>console.log(`person3 shows ${m}`));

console.log('Person4: shows ticket');
console.log('Person5: shows ticket');