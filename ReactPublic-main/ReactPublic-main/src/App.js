import "./App.css";
//import Products from "./components/Products";
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home"
import Hello from "./Components/Hello"
import Navbar from "./Components/Navbar";
import SubElement from "./Components/SubElement";
import NotFound from "./Components/NotFound";
import Products from "./Components/Products";
function App() {
  // let somme = function (x,y){
  //   return x+y;
  // };
  // let somme1 = (x,y) => {x+y};
  // console.log(somme1);

  // const users = [
  //   {name: 'Mohamed', age:25},
  //   {name: 'Salah', age:25},
  //   {name: 'Mohamed', age:25},
  //   {name: 'Mohamed', age:25}
  // ];
  // const TestAdulte = users.map(
  //   person => person.age > 18 ? console.log(${person.name} est un adulte): console.log(${person.name} n'est pas un adulte));

  // function getUser(){
  //   return{
  //     username: "safa",
  //     email:"safa.fliss@esprit.tn",
  //   };
  // }
  //   const {username, email} = getUser();
  //   console.log(username);
  //   console.log(email);

  // const user = {
  //     username: "safa",
  //     email:"safa.fliss@esprit.tn",
  // };
  // const newUser = {
  //   ... user,
  //   classe: "4TWIN3",
  // };

  // const person = {
  //   fName: "Jane",
  //   lName:"Doe",
  //   showInfo : function () {
  //     console.log(
  //       `First Name is ${this.fName}
  //       and my last Name is ${this.lName}`
  //     );
  //   },
  // };
  // person.showInfo()

  // let student2 = "safa";
  // let student = {
  //   name: "Safa",
  //   lastName: "fliss",
  // };
  // console.log(student2)
  //   return (
  //     <>
  //     <h1>Hello React V.{10+8}</h1>
  //     <p>{student.name}</p>
  //     <p>{student.lastName}</p>
  //     </>
  //   );

  // const listEtudiant = [
  //   { nom: "Doe", prenom: "Jane", age: "27", objectID: 0 },

  //   { nom: "Doe", prenom: "John", age: "22", objectID: 1 },
  // ];
  // return (
  //   <div>
  //     {listEtudiant.map(function (item) {
  //       return <div key={item.objectID}> {item.prenom} </div>;
  //     })}
  //   </div>
  // );
    const inlineStyle = {
    
    color: "#2ecc71",
    fontSize: "26px",
    
    };
    return (
    <>
    {/* <div className="maClasse">
    <p style={inlineStyle}>Hi React Class</p>
    <FuncUseState/>
    </div>
    <Products1></Products1> */}
    <Navbar/>
    <Routes>
      <Route path='/' element ={<Products/>}/>
      <Route path='/home/:username' element ={<Home/>}/>
      <Route path='/home/student' element ={<Hello/>}/>
      <Route path='Hello'>
        <Route index element ={<Hello/>}/>
        <Route path="subelement" element={<SubElement/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
    );
  
}

export default App;