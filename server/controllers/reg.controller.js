const { User } = require('../models/user.model'),
    jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                res
                    .cookie(
                        "usertoken",
                        jwt.sign({ _id: user._id }, process.env.SECRET_KEY),
                        { httpOnly: true, }
                    )
                    .json({
                        msg: "success!",
                        user: {
                            firstName: user.firstName,
                            lastName: user.lastName
                        }
                    });
            })
            .catch(err => res.json(err.errors));
    }
}