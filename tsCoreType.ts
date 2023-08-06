
//enum (enumerate) is TypeScript only. Values inside enum are usually all upper-case.
enum UserRole {ADMIN = 0, READ_ONLY = 1, AUTHOR = 'SPECIAL'};

const person:  {
    name: string;
    age: number;
    hobbies: string[];
    favoriteFood: [number, string]; //This is a tuple (fixed length array), a TypeScript only type.
    role: any; //Avoid using any type because you'll end up writing JS
    work: {
        title: string;
        industry: string[];
    }
} = { //const person = {
    name : 'Joe',
    age: 27,
    hobbies: ['Movies', 'Programming'],
    favoriteFood: [2, 'Pizza'],
    role: UserRole.ADMIN,
    work: {
        title: 'QA',
        industry: ['IT', 'tech']
    }
}

person.favoriteFood.push('Pasta'); //Tuple supports push.

console.log (person)