module.exports = {
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }
}