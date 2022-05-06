const { Router } = require('express');
const { Op } = require('sequelize')
const { Country, Activity } = require('../db.js')
const router = Router()

router.post('/', async (req, res, next) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body;

        const propiedades = { difficulty, duration, season }
        console.log(name)
        let activity = await Activity.findOrCreate({
            where: {
                name
            }

            ,
            defaults: propiedades,
        })
        if (activity[1] == false) return res.status(404).json({ msg: 'This activity has already exist' })
        else {
            console.log('entro al else')
            activity[0].setCountries(countries)


            return res.json(activity[0])
        }

    } catch (error) {

        next(error)
    }

})
router.get("/allActivities", async (req, res, next) => {
    try {
        const allActivities = await Activity.findAll( { include: Country })
        res.json(allActivities)
    } catch (error) {
        next(error)
    }
})

module.exports = router;