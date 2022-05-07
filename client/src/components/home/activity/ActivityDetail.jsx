


export default function AcivityDetail({name, difficulty, duration, season}){
    return(
        <div>
            <h3>Name: {name}</h3>
            <h4>Difficulty: {difficulty}</h4>
            <h4>Duration: {duration}</h4>
            <h4>Season: {season}</h4>
            {/* {console.log(actDetail)} */}
        </div>
    )
}