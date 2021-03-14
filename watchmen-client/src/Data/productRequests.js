import {API_INVOKE_URL} from "../constants";

export async function getAllProducts(user_id) {
    const settings = {
        method : 'GET'
    };
    try {
        console.log(`${API_INVOKE_URL}/users/${user_id}/products`)
        const response = await fetch(`${API_INVOKE_URL}/users/${user_id}/products`, settings);
        return await response.json();
    } catch (e) {
        return e;
    }
}

export async function postProduct(user_id, product) {
    const settings = {
        method : 'POST',
        body : JSON.stringify(product)
    };
    try {
        console.log(`${API_INVOKE_URL}/users/${user_id}/products`)
        const response = await fetch(`${API_INVOKE_URL}/users/${user_id}/products`, settings);
        const data = await response.json()
        console.log(data)

    } catch (e) {
        return e;
    }
}

export async function deleteProduct(user_id, product_id) {
    const settings = {
        method : 'DELETE'
    };
    try {
        console.log(`${API_INVOKE_URL}/users/${user_id}/products/${product_id}`)
        const response = await fetch(`${API_INVOKE_URL}/users/${user_id}/products/${product_id}`, settings)
        const data = await response.json()
        console.log(data)

    } catch (e) {
        return e;
    }
}
