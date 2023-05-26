const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res)=>{
    const {id} = req.params
    const {data} = await axios.get(`${URL}${id}`)
    try {
        if(data){
            res.status(200).json({
                id:data.id,
                status:data.status,
                name:data.name,
                species:data.species,
                origin:data.origin,
                image:data.image,
                gender:data.gender
            })
        }else {
            res.status(404).json({error: "Not found"})
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}
        

       



module.exports={
    getCharById
};

/* const getCharById = (req, res)=>{
    const {id} = req.params
    axios.get(`${URL}${id}`)
    .then((response) =>response.data)
    .then((data) =>{
            if(data){
                res.status(200).json({
                    id:data.id,
                    status:data.status,
                    name:data.name,
                    species:data.species,
                    origin:data.origin,
                    image:data.image,
                    gender:data.gender
                })
            }else {
                res.status(404).json({error: "Not fount"})
            }
        

       
    }).catch(error => res.status(500).send(error.message))
} */