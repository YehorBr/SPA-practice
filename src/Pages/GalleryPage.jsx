import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBreeds } from "../ServerApi";

export const GalleryPage = () =>{
    const [breeds, setBreeds] = useState([])

    useEffect(()=>{
        fetchBreeds().then(res =>{
            setBreeds(Object.keys(res))
        })
    }, [])

    console.log(breeds);

    return <>
        <ul>
            {breeds.map(breed =>(<li key={breed}><p>{breed}</p></li>))}
        </ul>
    </>
}