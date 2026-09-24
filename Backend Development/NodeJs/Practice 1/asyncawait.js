const superagent = require('superagent')



const usersSettled = async () => {
    const results = await Promise.allSettled([
        superagent.get('https://jsonplaceholder.typicode.com/users/1'),
        superagent.get('https://jsonplaceholder.typicode.com/usersr/2'),  // galat hai
        superagent.get('https://jsonplaceholder.typicode.com/users/3'),
    ])

    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Success ${index}:`, result.value.body.name);
        } else {
            console.log(`Fail ${index}:`, result.reason.message);

        }
    })
}

usersSettled()


// const user = async () => {
//     try {
//         const response = await superagent.get('https://jsonplaceholder.typicode.com/userss/1')
//         console.log(response.body);
//     } catch (error) {
//         console.log(error.message);

//     }
// }

// user()

// const users = async () => {
//     try {
//         const [user1, user2, user3] = await Promise.all([
//             superagent.get('https://jsonplaceholder.typicode.com/users/1'),
//             superagent.get('https://jsonplaceholder.typicode.com/users/2'),
//             superagent.get('https://jsonplaceholder.typicode.com/userss/3'),
//         ])
//         console.log(user1.body, user2.body, user3.body);

//     } catch (error) {
//         console.log(error.message);

//     }
// }

// users()

// const getUsersSequential = async () => {
//     try {
//         console.time('sequential')
//         const user1 = await superagent.get('https://jsonplaceholder.typicode.com/users/1')
//         const user2 = await superagent.get('https://jsonplaceholder.typicode.com/users/2')
//         const user3 = await superagent.get('https://jsonplaceholder.typicode.com/users/3')
//         const user4 = await superagent.get('https://jsonplaceholder.typicode.com/users/4')
//         const user5 = await superagent.get('https://jsonplaceholder.typicode.com/users/5')
//         console.timeEnd('sequential');
//         console.log(user1.body.name, user2.body.name, user3.body.name, user4.body.name, user5.body.name);
//     } catch (err) {
//         console.log(err)
//     }
// }

// getUsersSequential()


// const getUsersParallel = async () => {
//     try {
//         console.time('parallel')
//         const [user1, user2, user3, user4, user5] = await Promise.all([
//             superagent.get('https://jsonplaceholder.typicode.com/users/1'),
//             superagent.get('https://jsonplaceholder.typicode.com/users/2'),
//             superagent.get('https://jsonplaceholder.typicode.com/users/3'),
//             superagent.get('https://jsonplaceholder.typicode.com/users/4'),
//             superagent.get('https://jsonplaceholder.typicode.com/users/5')
//         ])
//         console.timeEnd('parallel');
//         console.log(user1.body.name, user2.body.name, user3.body.name, user4.body.name, user5.body.name);
//     } catch (err) {
//         console.log(err)
//     }
// }

// getUsersParallel();



// const getUser = async () => {
//     try {
//         const [use1Res, user2Res] = await Promise.all([
//             superagent.get('https://jsonplaceholder.typicode.com/users/1'),
//             superagent.get('https://jsonplaceholder.typicode.com/users/2')
//         ])
//         console.log('User 1:', use1Res.body.name);
//         console.log('User 2:', user2Res.body.name);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// getUser()