const { Router } = require('express');

const { Country, Activity } = require('../db.js')
const router = Router()

router.post('/', async (req, res, next) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body;
        if (name) {
            const propiedades = { name, difficulty, duration, season }
            let activity = await Activity.findOrCreate({
                where: propiedades
            ,
                default: propiedades
        })
            // activity.setCountries(countries)
            return res.json(activity)
        } else return res.status(400).json({ msg: 'A name is needed' })
    } catch (error) {
        next(error)
    }

})

module.exports = router;