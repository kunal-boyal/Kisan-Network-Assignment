const accountSid = 'AC2464da601386b5214cf79512d65f4f04';
const authToken = 'c2ee982803bcaf85d0580741e697ad41';

const client = require('twilio')(accountSid, authToken);

module.exports = {
    uploadContacts: async (req, res) => {
        try {
            const contacts = req.file.buffer.toString('utf8')
            const pContacts = JSON.parse(contacts)
            return res.status(200).json({ message: "success", data: pContacts })
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    sendMessage: async (req, res) => {
        try {
            const otp = Math.floor(100000 + Math.random() * 900000)
            client.messages
                .create({
                    to: req.body.phoneNumber,
                    from: '+18638257857',
                    body: `${req.body.message}.
                     Hi. Your OTP is : ${otp}`,
                })
            return res.status(200).json({ message: "success",otp:otp})

        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
