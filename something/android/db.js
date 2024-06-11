const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const cors = require('cors'); // Import the cors package
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://ivyarvrock:321654456123@cluster0.qk4hzjr.mongodb.net/';
const DB_NAME = 'pokedex';

app.use(cors()); // Use cors middleware
app.use(express.json());

let db, itemsCollection;

MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to MongoDB');
        db = client.db(DB_NAME);
        itemsCollection = db.collection('users');
    })
    .catch(error => console.error('Error connecting to MongoDB:', error));

// Create
app.post('/users', async (req, res) => {
    try {
        const newItem = req.body;
        const result = await itemsCollection.insertOne(newItem);
        res.status(201).json(result.ops[0]);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read all
app.get('/users', async (req, res) => {
    try {
        const items = await itemsCollection.find().toArray();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read one
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const item = await itemsCollection.findOne({ _id: new ObjectID(id) });
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update
app.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedItem = req.body;
        const result = await itemsCollection.updateOne(
            { _id: new ObjectID(id) },
            { $set: updatedItem }
        );
        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await itemsCollection.deleteOne({ _id: new ObjectID(id) });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
