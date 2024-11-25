import templateImage from '../screens/assets/template_image.jpg'

let groups = JSON.parse(localStorage.getItem('groups')) || [
    { id: 1, name: 'testGroup1', description: 'This is a description.', image: templateImage },
    { id: 2, name: 'testGroup2', description: 'This is a second description.', image: templateImage }
];

// Code shamelessly stolen from the internet to convert group images to base64, such that they can be stored in the browser's localstorage as strings
const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error);
})

export const addGroup = (newGroup) => {
    const updatedGroups = [...groups, { ...newGroup, id: groups.length + 1 }]
    groups = updatedGroups
    localStorage.setItem('groups',JSON.stringify(groups))
    return groups
}

export const getGroups = () => groups

// Shamelessly stolen base64 code continued
export const setImageBase64 = async (file) => {
    const base64 = await toBase64(file)
    return base64;
}
