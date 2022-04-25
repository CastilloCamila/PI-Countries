const { Router } = require('express');
const { Country, Activity } = require('../db.js')
const router = Router()
const { Op } = require('sequelize')
router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query;
        if (name) {
            let allCountries = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            })
            if (allCountries) return res.json(allCountries)
            else return res.status(404).json({ msg: 'The name did not match any country' })
        } else {

            let allCountries = await Country.findAll()
            return res.json(allCountries)
        }

    } catch (error) {
        next(error)
    }

})

router.get('/:id', async (req, res, next) => {
    try {
        let { id } = req.params;
        id = id.toUpperCase()
        if (id)
            if (id.length == 3) {
                const country = await Country.findByPk(id, { include: Activity });

                if (country !== null) return res.json(country)
                else
                    return res.status(404).json({ msg: `Country did not found, possibly did not exist` }) // 404 not found

            } else
                return res.status(400).json({ msg: `Syntax not allowed` })

        else return res.status(400).json({ msg: 'An id is needed' }) // 400 bad request 
    }
    catch (error) {
        next(error)
    }

})
module.exports = router