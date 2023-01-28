
const RecipeFull = ({recipe}) => {
    /*{
        id: 0,
        url: "",
        name: "",
        description: "",
        score: -1,
        stepByStep: "",
        url: ""
    })*/
    const NO_DATA_MSG = "Sin especificar";

    return(
        <>
            <div>
                <img src={recipe.url} alt="" />
                <h2>{recipe.name}</h2>
                <h5>Tipo de Plato</h5>
                <h5><b>Diet: </b>{recipe.diets ? recipe.diets : NO_DATA_MSG}</h5>
                <h5>Healty Score: {recipe.score ? recipe.score : NO_DATA_MSG}</h5>
                <h5>Description: </h5>
                <h6>    {recipe.description ? recipe.description : NO_DATA_MSG}</h6>
                <h5>Step by Step: </h5>
                {recipe.stepByStep ? recipe.stepByStep : NO_DATA_MSG}
    


            </div>
        </>
    )
}
export default RecipeFull
