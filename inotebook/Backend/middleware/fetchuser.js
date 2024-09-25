const jwt = require('jsonwebtoken');
const JWT_SECRET = 'AditiIsaGoodGirl';


const fetchuser = (req, res, next) => {
    // Get the User from the JWT Token & add ID to req object
    const token = req.header('auth-token') // auth-token header ka naam rakha hai & jbhi req send krengeto isi name se krenge
    if (!token) {
        return res.status(401).send({ error: "PLease Authenticate using a Valid Token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ error: "PLease Authenticate using a Valid Token" })
    }
}

module.exports = fetchuser;