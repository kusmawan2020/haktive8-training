import express from 'express',
import cors from 'cors',
import multer from 'multer',
import { GoogleGenAI } from '@google/genai'

const app = express();
const upload = multer();
const ai = new GoogleGenAI({});

//Inisialisasi midleware
app.use(cors());

//Inisialisasi routing
app.post("/generate-text", async(requestAnimationFrame,res) => {
    const {prompt} = req.body;

    if (!prompt || typeof prompt !== "string") {
        res.status(400).json ({
            success = false,
            message = 'Prompt harus berupa String..!!!',
            data = null
        });
    }

    try {
        const airesponse = await ai.models.generateContent({

        });
    }
});
