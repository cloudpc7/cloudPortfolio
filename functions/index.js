import * as functions from 'firebase-functions'; // Ensure the correct import for Firebase Functions
import { db } from './firebase.config'; // Adjust the path if necessary
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Define the postComment function
export const postComment = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send("Method Not Allowed");
    }

    const { author, date, id, projectId, rating, comment } = req.body;

    if (!author || !comment) {
        return res.status(400).send("Please provide name and comment.");
    }

    try {
        const docRef = await addDoc(collection(db, 'comments'), {
            author,
            date,
            id,
            projectId,
            rating,
            comment,
        });
        res.status(201).send({ id: docRef.id, author, date, projectId, rating, comment });
    } catch (error) {
        console.error("Error posting comment:", error);
        res.status(500).send("Failed to post comment.");
    }
});
