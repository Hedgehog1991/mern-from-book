import "dotenv/config"
import {db} from "./libs/dbConnect.js";

const users = [
    {
        username: "bob",
        email: "bobby@mail.com",
        password: "5050505050",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },{
        username: "kimmy",
        email: "kim@mail.com",
        password: "3030303030",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },{
        username: "nils",
        email: "nils@mail.com",
        password: "5555444400",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
]

const tasks = [{
    name: "read book",
    description: "Finish the end times",
    priority: "urgent",
    due: new Date().toISOString(),
    status: "open",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
},{
    name: "go fish",
    description: "catch a lot of fish",
    priority: "not urgent",
    due: new Date().toISOString(),
    status: "open",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
},
];

try {
    let collection = await db.collection('users');
    console.log('[seed]', "seeding users...")
    const result = await collection.insertMany(users);
    console.log(result.insertedIds)
    console.log("[seed]", "seeding users done");
    tasks[0].owner = result.insertedIds[0];
    tasks[1].owner = result.insertedIds[1];

    collection = await db.collection("tasks");
    console.log('[seed]', "seeding tasks...")
    await collection.insertMany(tasks)

    console.log("[seed]", "seeding users done");
}catch (error){
    console.log("[seed]", "error: ", error)
}

process.exit();
//p76