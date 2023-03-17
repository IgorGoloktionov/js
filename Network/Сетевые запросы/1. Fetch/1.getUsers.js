async function getUsers(names) {
    const usersPromises = [];
    for (let name of names) {
        const user = fetch(`https://api.github.com/users/${name}`)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            return null;
        }).catch(() => null);

        usersPromises.push(user);
    }
    
    const users = await Promise.all(usersPromises);
    return users;
}

getUsers(['iliakan', 'remy', 'no.such.users']);
