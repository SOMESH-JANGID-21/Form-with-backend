const user = require('../model/UserModel')

const UploadController = {
    getAll: async (req,res) => {
        try {
            let data = await user.find({})
                res.status(200).json({ length: data.length, Users: data})
        } catch (err) {
            return  res.status(500).json({ msg: err.message })
        }
    },
   
    create: async (req,res) => {
        try {
            let newuser = await user.create(req.body)

            res.json({ msg: "New Data Created Successfully", user: newuser })

        } catch (err) {
            return  res.status(500).json({ msg: err.message })
        }
    }
    
}

module.exports = UploadController