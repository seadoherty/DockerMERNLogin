const { User } = require('../models/user.model'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');


module.exports = {
    login: (req, res) => {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user == null) {
                    res.status(400).json({ msg: "Invalid login attempt!" })
                    res.cookie()
                } else {
                    bcrypt.compare(req.body.password, user.password)
                        .then(isValid => {
                            if (isValid === true) {
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
                            } else { console.log('NOT successful'); }
                        })
                        .catch(err => {
                            console.log(err)
                            res.status(400).json({ msg: "Invalid login attempt!" })
                        })
                }
            })
            .catch(err => res.status(400).json(err.errors));
    }
}