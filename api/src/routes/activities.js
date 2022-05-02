const { Router } = require('express');

const { Country, Activity } = require('../db.js')
const router = Router()

router.post('/', async (req, res, next) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body;
        
            const propiedades = { name, difficulty, duration, season }
            let activity = await Activity.findOrCreate({
                where: 
                    propiedades
                
            ,
                default: propiedades
        })
            if (activity[1]==false) res.status(400).json({msg:'This activity has already exist'})
            else{activity[0].setCountries(countries)
        
             
            return res.json(activity)}
       
    } catch (error) {
        next(error)
    }

})
router.get("/allActivities", async (req,res,next)=>{
    try{
        const allActivities= await Activity.findAll()
        res.json(allActivities)
    }catch(error){
        next(error)
    }
})

module.exports = router;