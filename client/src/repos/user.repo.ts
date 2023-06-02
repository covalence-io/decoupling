import * as userSvc from '../services/user.svc';

export async function getUser() {
    return transform.from(await userSvc.getUser());
}

export async function createUser(model: server.IUser) {
    return userSvc.createUser(transform.to(model));
}

const transform = {
    to(model: client.IUser): server.IUser {
        return {
            id: model.id,
            age: model.age,
        };
    },
    from(model: server.IUser): client.IUser {
        return {
            id: model.id,
            age: model.age,
        };
    }
};