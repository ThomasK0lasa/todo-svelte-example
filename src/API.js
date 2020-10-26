import axios from "axios";
import { elements } from "./storeList.js";

const APIurl = "http://localhost:3001/v1/elements/";

export async function getElements() {
    elements.set(await axios.get(APIurl));
}

export async function addElement(newtask) {
    let res = await axios
        .post(APIurl, {
            element: newtask,
        })
    if (res.status == 200) {
        getElements();
    } else {
        console.error('addElement Error');
    }
}

export async function updateElement(index, element) {
    let res = await axios
        .put(APIurl + index, {
            element: element,
        })
        if (res.status == 204) {
            getElements();
        } else {
            console.error('updateElement Error');
        }
}

export async function removeElement(index) {
    event.stopPropagation();
    let res = await axios.delete(APIurl + index)
    if (res.status == 204) {
        getElements();
    } else {
        console.error('removeElement Error');
    }
}