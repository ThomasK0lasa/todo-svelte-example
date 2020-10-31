import axios from "axios";
import { elements, canConnect } from "./storeList.js";

const APIurl = "http://localhost:3001/v1/elements/";

export function checkConnection() {
    canConnect.set(
        axios.get(APIurl).then((res) => {
            elements.set(res);
            console.log();
            return res;
        }).catch((error) => {
            console.error("Can't connect to db server");
            throw error;
        })
    );
}

export function getElements() {
    axios.get(APIurl).then((res) => {
        elements.set(res);
    }).catch((error) => {
        canConnect.set(error);
        console.error("Can't connect to db server");
        throw error;
    })
}

//this is just an example code for proper async await
export async function addElement(newtask) {
    try {
        await axios
            .post(APIurl, {
                element: newtask,
            })
        getElements();
    } catch (error) {
        console.error('addElement Error');
        throw error;
    }
}

//this is just an example code for async await kinda without try catch
export async function updateElement(index, element) {
    let err;
    let res = await axios
        .put(APIurl + index, {
            element: element,
        }).catch(error => err = error)
    if (err) {
        console.error('updateElement Error');
        throw err;
    } else {
        if (res.status == 204) {
            getElements();
        }
    }
}

//this is just an example code for then catch
export function removeElement(index) {
    axios.delete(APIurl + index)
    .then(function(res) {
        if (res.status == 204) {
            getElements();
        }
    })
    .catch(function(err) {
        console.error('removeElement Error');
        throw err;
    });
}