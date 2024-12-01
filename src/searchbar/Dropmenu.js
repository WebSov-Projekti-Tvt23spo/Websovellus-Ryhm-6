import { useEffect, useState } from "react";

const Dropmenu = () => {
const [areas, setAreas] = useState([])
const getTheatres = () => {
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xml, "application/xml")
    const root = xmlDoc.children
    const theatres = root[0].children
    const tempAreas = []
    for (let i = 0;i < theatres.length;i++){
        tempAreas.push(
            {
                "id": theatres[i].children[0].innerHTML,
                "name":
                theatres[i].children[1].innerHTML
            }
        )
    }
    setAreas(tempAreas)
}

useEffect(() => {
    fetch( "https://www.finnkino.fi/xml/TheatreAreas/")
    .then(response => response.text())
    .then(xml => {
        getTheatres(xml)
    })
    .catch(error => {
        console.log(error)
    })
}, [])

return (
    <div>
        <select>
            {
                areas.map(area => (
                    <option key={area.id}>{area.name}</option>
                ))
            }
        </select>
    </div>
);
}