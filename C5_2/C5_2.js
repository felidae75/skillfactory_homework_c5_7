// xml

const xmlString = `
    <list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
     <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>
`;

// console.log('xmlString', xmlString);

const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listStudents = xmlDOM.querySelectorAll('student');

let resultXML = []

for (let student of listStudents) {
    const name = student.querySelector('name');
    const first = student.querySelector('first');
    const second = student.querySelector('second');
    const age = student.querySelector('age');
    const prof = student.querySelector('prof');
    const lang = name.getAttribute('lang');
    resultXML.push({'name': first.textContent + ' ' + second.textContent, 'age': age.textContent, 'prof': prof.textContent, 'lang': lang});
}

console.log(resultXML)

// json
const jsonString = `
{
   "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;


const data = JSON.parse(jsonString);

const humans = data.list

// console.log(humans)

let resultJson = []

for (let human of humans) {
    resultJson.push({'name': human.name, 'age': human.age, 'prof': human.prof})
}

console.log(resultJson)

