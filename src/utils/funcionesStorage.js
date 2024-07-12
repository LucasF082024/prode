


export const saveUsersToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
};

export const loadUsersFromLocalStorage = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
};