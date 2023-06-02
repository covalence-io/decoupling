export async function getUser(): Promise<db.IUser> {
    return {
        id: 1,
        dob: new Date(),
    };
}

export async function createUser(model: db.IUser) {
    // query
}