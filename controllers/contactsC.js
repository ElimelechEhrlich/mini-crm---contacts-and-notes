import { getData } from "../services/getData.js";


console.log(await getData("./data/contacts.json"));

const getContacts = async (req, res) => {
    let contacts = await getData("./data/contacts.json")
    if (req.query) {
        contacts = contacts.filter(contact => req.query === contact.name || req.query === contact.phone)
    }
    try {
        res.json({ results: contacts })
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
}

const getContactById = async (req, res) => {
    const Contacts = await getData("./data/Contacts.json")
    const Contact = Contacts.find(Contact => Contact.id === req.params.id)
    try {
        res.json(Contact)
    } catch (error) {
        console.error(error)
        res.sendStatus(404)
    }
}

const addContact = async (req, res) => {
    const Contacts = await getData("./data/Contacts.json")
    try {
        if ((req.body.fullName) && (req.body.phone) && (req.body.city) && (req.body.tags)) {
            Contacts.push({id: Contacts.sort((a, b) => b.id - a.id)[0] + 1 , fullName: req.body.fullName, phone: req.body.phone, city: req.body.city, tags: req.body.tags, createdAt: new Date})
            await writeData("./data/Contacts.json", JSON.stringify(Contacts))
            res.send("Contact added")
        }
        else res.sendStatus(400)
    } catch (error) {
        console.error(error);
        res.json({error})
    }
}


export {
    getContacts,
    getContactById,
    addContact
}