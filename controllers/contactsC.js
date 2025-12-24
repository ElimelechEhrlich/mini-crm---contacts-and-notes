import { getData } from "../services/getData.js";


console.log(await getData("./data/contacts.json"));


const getAllData = (file) => {
    async (req, res) => {
        const data = await getData(file)
        console.log(data)
        try {
            console.log(data);
            
            res.json(data)
        } catch (err) {
            console.error(err);
            res.status(500).json({ err });
        }
    }
}

console.log(getAllData("./data/contacts.json"))