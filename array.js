let people = [
    {name : "ali",
     age : 25,
     id : 1 ,
     education : "Computer Science"},
    {name : "mahsa",
     age : 22,
     id : 2 ,
     education : "Mathematics"},
    {name : "reza",
     age : 30,
     id : 3 ,
     education : "physics"}
];
function addPerson(){
    const name = prompt("enter the name of the new person :")
    const age = +prompt("enter the age of the new person  :")
    const  id = people.length + 1;
    const education = prompt("enter the education of the new person :")

    let person = {
        name,
        age,
        id,
        education
    }
    people.push(person)
}
function deletePersonByName(){
    const name = prompt("enter the name of the person you want to delete :")
    people = people.filter(person => {person.name !== name})
}
function editPersonById(){
    id = +prompt("enter the id of the person you want to change :")
    people.forEach(person => {
        if(person.id === id){
            person.name = prompt("enter new name :");
            person.age = +prompt("enter new age :");
            person.education = prompt("enter new education :");
        }
    })
}

addPerson()
editPersonById()
deletePersonByName()
console.log(people)
