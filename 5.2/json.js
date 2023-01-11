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
const students = data.list

const result = {}
result.list = students

console.log(result)