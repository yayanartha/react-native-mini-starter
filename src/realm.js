import Realm from 'realm';

class User extends Realm.Object {};
User.schema = {
    name: 'User',
    primary_key: 'id',
    properties: {
        id: 'int',
        email: 'string',
        name: 'string',
        profile_picture_url: 'string',
    },
};

class Account extends Realm.Object {};
Account.schema = {
    name: 'Account',
    properties: {
        isLoggedIn: 'bool',
        user: 'User',
        email: 'string',
        token: 'string',
    },
};

export default new Realm({
    schema: [
        Account,
        User,
    ],
    schemaVersion: 0,
});
