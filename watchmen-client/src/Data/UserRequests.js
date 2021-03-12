const API_KEY = "";
const baseUrl = "http://localhost:3000";

export default async function postUser(user) {

    const endpoint = `/${API_KEY}/user/${user["user_id"]}`;
    const url = `${baseUrl}${endpoint}`;

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    };

    try {
        const Response = await fetch(url, settings);
        const data = await Response.json();
        return data;
    } catch (e) {
        return e;
    }



}


