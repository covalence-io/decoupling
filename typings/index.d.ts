namespace client {
    interface IUser {
        id: number;
        age: number;
    }
}

namespace server {
    interface IUser {
        id: number;
        age: number;
    }
}

namespace db {
    interface IUser {
        id: number;
        dob: Date;
    }
}