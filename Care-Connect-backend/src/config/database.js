import { ServerApiVersion } from 'mongodb';
import { MongoClient } from 'mongodb';
const username = encodeURIComponent('abhishekraina07');
const password = encodeURIComponent('Mongodb@7102002');
const cluster = 'cluster0.tcuap.mongodb.net';
const uri = `mongodb+srv://${username}:${password}@${cluster}/?ssl=true&retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
    connectTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 30000, // Increase socket timeout to 30 seconds

});

export const connectDB = async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("CareConnect").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
connectDB().catch(console.dir);

// import { connect } from 'mongoose';

// const connectDB = async () => {
//     try {
//         await connect('mongodb+srv://abhishekraina07:Mongodb@7102002@cluster0.tcuap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         process.exit(1);
//     }
// };

// export default connectDB;
