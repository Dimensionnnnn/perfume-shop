export function useFetch(url, method, body) {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

export async function logout() {
    const url = '../../vendor/logout.php';

    try {
        const response = await useFetch(url, 'GET');
        sessionStorage.clear();
        window.location.href = '/';
    } catch(error) {
        console.log(error);
    }
}

export async function isUserAuthorized() {
    const url = '../../vendor/isUserAuth.php';

    try {
        const response = await useFetch(url, 'GET');
        const data = await response.json();
        if (data.status === 'success') {
            return true;
        } else {
            return false;
        }
    } catch(error) {
        console.log(error);
    }
}

export async function getProducts(limit = null) {
    const url = `../../vendor/getItems.php${limit ? `?limit=${limit}` : ''}`;

    try {
        const response = await useFetch(url, 'GET');
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

export async function getProductById(productId) {
    const url = `../../vendor/getProductById.php?id=${productId}`;

    try {
        const response = await useFetch(url, 'GET');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getBrands() {
    const url = '../../vendor/getBrands.php';

    try {
        const response = await useFetch(url, 'GET');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function loadProducts(filters = {}) {
    const url = new URL("../../vendor/products.php", location.href);
    const searchParams = new URLSearchParams();

    if (filters.genders !== undefined && filters.genders !== null && filters.genders !== '') {
        searchParams.append('gender', filters.genders.split(',').join(','));
    }

    if (filters.brands !== undefined && filters.brands !== null && filters.brands !== '') {
        searchParams.append('brands', filters.brands.split(',').join(','));
    }

    url.search = searchParams.toString();

    return useFetch(url, 'GET')
        .then((response) => { 
            return response.json()
        })
        .then((products) => {
            return products;
        })
        .catch((error) => {
            console.log(error);
        });
}