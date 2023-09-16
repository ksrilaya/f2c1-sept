let data = [
    { name: "john", age: 29, profession: "developer" },
    { name: "jane", age: 25, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((item) => {
        item.profession == "developer" ? console.log(item) : null;
      });
  }
  
  // 2. Add Data
  function addData() {
    const newemployee={name:prompt("Enter a name:"),age:parseInt(prompt("enter a age:")),profession:prompt("enter a profession")};
    data.push(newemployee);
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data=data.filter((person)=>person.profession!=="admin");
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let newemployess = [
        {  name: "Jimin", age: "25", profession: "SDE" },
        {  name: "Taehyung", age: "22", profession: "developer" },
        {  name: "Jungkook", age: "19", profession: "CEO" },
      ];
    
      const concatenatedArray=data.concat(newemployess);
      console.log(concatenatedArray);
      data=concatenatedArray;
  }
  
  // 5. Average Age
  function averageAge() {
    
        console.log( data.reduce((prev, data) => prev + data.age, 0) / data.length);
      
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    data=data.filter((person)=>person.age>25);
    console.log(data);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const unique = [...new Set(data.map((item) => item.profession))];
    console.log(unique);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    upd_obj = data.findIndex((obj => obj.name == "john"));
    data[upd_obj].profession = "Manager";
    console.log(data[upd_obj]);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let count=0;
    for(let i=0;i<data.length;i++){
        if(data.profession =="developer" && data.profession=="admin"){
            count++;
        }
        console.log(count);
    }
  
  }