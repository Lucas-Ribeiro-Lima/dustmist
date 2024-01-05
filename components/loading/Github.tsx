interface MyProfile {
    name: string,
    idade: number,
    curso: string,
}


const Profile = ({ name, idade, curso }:MyProfile) => {
    console.log(`Hello World. I am ${name}, ${idade}, ${curso}`)
}