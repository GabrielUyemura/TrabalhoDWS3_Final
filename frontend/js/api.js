const apiURL = 'http://localhost:3000/api';

async function login(username, password) {
    const response = await fetch(`${apiURL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (data.token) {
        sessionStorage.setItem('token', data.token);
        return true;
    } else {
        return false;
    }
}

async function getContas() {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`${apiURL}/contas`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.json();
}

async function deleteContaById(id) {
    const token = sessionStorage.getItem('token');
    await fetch(`${apiURL}/contas/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
    });
}
