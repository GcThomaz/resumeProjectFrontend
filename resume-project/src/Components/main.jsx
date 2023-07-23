import { useEffect, useState } from "react";
import "../Styles/main.js";
import { FormButton, FormText, Info, Name, SendButton, SkillDiv } from "../Styles/main.js";
import { Form } from "../Styles/main.js";
import { FormDiv } from "../Styles/main.js";
import axios from "axios";

export default function Main() {
  const [skills, setSkills] = useState([])
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState()
  const [email, setEmail] = useState("")
  const [profession, setProfession] = useState("")
  const [phone, setPhone] = useState()
  const [city, setCity] = useState("")
  const [cep, setCep] = useState()
  const [profile, setProfile] = useState("")
  const [experience, setExperience] = useState("")
  const [education, setEducation] = useState("")
  const [softChoose, setSoftChoose] = useState([])
  const [hardChoose, setHardChoose] = useState([])
  const [languageChoose, setLanguageChoose] = useState([])

  const body = {
    firstName, lastName, age, email, profession, phone, city, cep, profile, experience, education 
  }

  function InsertUser() {
    console.log(body)
    const promise =  axios.post("http://localhost:5800/user", body)
    promise.then((res) => {
    console.log("Created")
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    async function fetchData() {

      try {        
        const promise = await axios.get("http://localhost:5800/skills")
      setSkills([...promise.data])
      } catch (error) {
        console.log(error)
      }      
    }
    fetchData();
  }, [skills]);

  return (
    <>
      <Info>
        <h1>
          Type your informations:
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </h1>
      </Info>

      <Form>
        <FormDiv>
          <label for="name">First Name:</label>
          <input onChange={(x) => setFirstName(x.target.value)} value={firstName} placeholder="First Name" type="text" id="name" />
        </FormDiv>
        <FormDiv>
          <label for="lastName">Last Name:</label>
          <input onChange={(x) => setLastName(x.target.value)} value={lastName} placeholder="Last Name" type="text" id="lastName" />
        </FormDiv>
        <FormDiv>
          <label for="age">Age: </label>
          <input onChange={(x) => setAge(x.target.value)} value={age} placeholder="Age" type="number" min="12" id="age"></input>
        </FormDiv>
        <FormDiv>
          <label for="email">Email:</label>
          <input onChange={(x) => setEmail(x.target.value)} value={email} placeholder="Email" type="email" id="email" />
        </FormDiv>
      </Form>
      <Form>
        <FormDiv>
          <label for="profession">Profession:</label>
          <input onChange={(x) => setProfession(x.target.value)} value={profession} placeholder="Profession" type="text" id="profession" />
        </FormDiv>
        <FormDiv>
          <label for="phone">Phone:</label>
          <input onChange={(x) => setPhone(x.target.value)} value={phone} placeholder="Phone Number" type="text" id="phone" />
        </FormDiv>
        <FormDiv>
          <label for="city">City:</label>
          <input onChange={(x) => setCity(x.target.value)} value={city} placeholder="City" type="text" id="city" />
        </FormDiv>
        <FormDiv>
          <label for="cep">Postal Code:</label>
          <input onChange={(x) => setCep(x.target.value)} value={cep} placeholder="Postal Code" type="text" id="cep" />
        </FormDiv>
      </Form>
      <FormText>
        <FormDiv>
          <label for="profile">Profile:</label>
          <textarea
            placeholder="Personal Profile"
            rows="5"
            cols="10"
            onChange={(x) => setProfile(x.target.value)} value={profile}
          ></textarea>
        </FormDiv>
      </FormText>
      <FormText>
        <FormDiv>
          <label for="experience">Experience:</label>
          <textarea onChange={(x) => setExperience(x.target.value)} value={experience} placeholder="Experience" rows="5" cols="10"></textarea>
        </FormDiv>
      </FormText>
      <FormText>
        <FormDiv>
          <label for="education">Education:</label>
          <textarea onChange={(x) => setEducation(x.target.value)} value={education} placeholder="Education" rows="5" cols="10"></textarea>
        </FormDiv>
      </FormText>

      <FormButton>
        {skills.map((x) => 
        <Name>
        <h2>{x.name}</h2>
        <SkillDiv>
          {x.button.map((y, index) => 
            <button key={index}>{y.name}</button>
          )}
        </SkillDiv>
      </Name>)}
      </FormButton>

      <SendButton onClick={InsertUser}>Cadastrar</SendButton>
    </>
  );
}
