import {API_INVOKE_URL} from "../constants";


export async function getUser(user_id) {
    const settings = {
        method : 'GET',
        headers : {
            'Content-Type': 'application/json'
        }
    }

    try {
        console.log(`${API_INVOKE_URL}/users/${user_id}`)
        const response = await fetch(`${API_INVOKE_URL}/users/${user_id}`, settings);
        return await response.json();

    } catch (e) {
        return e
    }
}

export async function postUser(user) {
    const settings = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(user)
    };
    try {
        const response = await fetch(`${API_INVOKE_URL}/users`, settings);
        console.log(`${API_INVOKE_URL}/users`)
        const data = await response.json();
        console.log(data)
        await window.location.reload();
    } catch (e) {
        return e;
    }
}

export async function deleteUser(user_id) {
        const settings = {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json'
            }
        };
        try {
            console.log(`${API_INVOKE_URL}/users/${user_id}`)
            const response = await fetch(`${API_INVOKE_URL}/users/${user_id}`, settings);
            const data = await response.json();
            console.log(data)
        } catch (e) {
            return e;
        }
    }