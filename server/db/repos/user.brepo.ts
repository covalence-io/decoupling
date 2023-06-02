import * as userSvc from '../services/user.bsvc';

export async function getUser() {
    return transform.from(await userSvc.getUser());
}

export async function createUser(model: server.IUser) {
    return userSvc.createUser(transform.to(model));
}

const transform = {
    to(model: server.IUser): db.IUser {
        return {
            id: model.id,
            dob: new Date(),
        };
    },
    from(model: db.IUser): server.IUser {
        return {
            id: model.id,
            age: 73,
        };
    }
};