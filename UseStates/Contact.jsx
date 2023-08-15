import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {

  const params = useParams()// use params is used to catch the 'id' send by other page  '' check the router(app.js) part and button part of home.jsx
  console.log(params.id);

  // const[intial,setFinal]=useState() // setting the initial state to none 
  // const change=()=>{
  //     setFinal("akash")// after setfinal "akash" will get stored in initial
  // }

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  const updateColor = () => {
    setCar({ ...car, color: "Violet" })// the way to change a element in a objectif we dont use the spread operatop all element will be refreshed and nothing will show expect tha colour part
  }
  const [initial, setFinal] = useState(false)//setting initial state to false
  const change = () => {

    setFinal((data) => !data)
  }
  const [carchoice, setcarchoice] = useState("volvo")
  const handelchange = (event) => {
    setcarchoice(event.target.value)
  }

  //Create a component that tracks the mouse position and displays it using the useState hook.

  const [mousePos, setMousePos] = useState({})
  const handelMouseMove = (event) => {
    // console.log(event);
    setMousePos({ x: event.clientX, y: event.clientY })
  }
  // window.addEventListener('mousemove',handelMouseMove)


  //How can you use the useState hook to manage a complex object state, such as a form with multiple input fields?

  const [inputField, setinputField] = useState({
    firstname: "",
    lastname: "",
  }) // defining initial state 

  const handelchangename = (event) => {
    let name = event.target.name
    let value = event.target.value
    if (name == "firstname") {
      setinputField({ ...inputField, firstname: value })
    }
    if (name == "lastname") {
      setinputField({ ...inputField, lastname: value })
    }
  }
  const [fullname, setfullname] = useState()
  const handelfulname = (event) => {
    event.preventDefault()
    let fullname = inputField.firstname + inputField.lastname
    console.log(fullname);
    setfullname(fullname)
  }
  // console.log(fullname);

  return (
    <>


      <h1>{params.id}</h1>

      <h1>{initial}</h1>
      <button onClick={change}>click me</button>

      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={updateColor}>click me</button>

      <h1>{initial ? "akash" : "Rakesh"}</h1>
      <button onClick={change}>click me</button>
      <br />
      <label for="cars">Choose a car:</label>
      <select name="cars" id="cars" onChange={handelchange} >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <h1>this is {carchoice} car</h1>
      <h1>{`client value x ${mousePos.x} client value y ${mousePos.y}`}</h1>


      <form action="" onSubmit={handelfulname}>
        <input type="text" name='firstname' onChange={handelchangename} />
        <input type="text" name='lastname' onChange={handelchangename} />
        <button type="submit">submit</button>
      </form>

      <h1>{` fullname is ${fullname} `}</h1>
    </>
  )
}