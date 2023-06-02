export async function getUser(): Promise<server.IUser> {
    // fetch
    return {
        id: 1,
        age: 50,
    };
}

export async function createUser(model: server.IUser) {
    // query
}