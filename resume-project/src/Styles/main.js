import styled from 'styled-components'

export const Info = styled.div`

background-color: grey;
margin-top: 20px;
margin-bottom: 20px;
word-wrap: break-word;
`

export const Form = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin-bottom: 50px;
`

export const FormDiv = styled.div`
display: flex;
flex-direction: column;
color: white;
margin-left: 20px;
margin-top: 10px;
input{
    border-radius: 5px;
    border: none;
    background-color: #2f2841;
    color: white;
    height: 40px;
    width: 180px;
    padding: 3px;
    margin-top: 5px;
}
textarea{
    border-radius: 5px;
    border: none;
    background-color: #2f2841;
    color: white;
    height: 60px;
    width: 98%;
    padding: 3px;
    margin-top: 5px;
    resize: none;
}
`

export const FormText = styled.div`
margin-bottom: 50px;
`
export const FormButton = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
`
export const SkillDiv = styled.div`
margin: 5px;
background-color: green;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
border-radius: 10px;
button{
    border-radius: 5px;
    border: none;
    background-color: #2f2841;
    color: white;
    height: 40px;
    width: 140px;
    padding: 3px;
    margin: 5px;
    cursor: pointer;
    font-family: 'Tektur';
}
button:hover {
    font-size: 15px;
    font-weight: bold;
}
`

export const Name = styled.div`
color: white;
`

export const SendButton = styled.button`
border-radius: 5px;
    border: none;
    background-color: #2f2841;
    color: white;
    height: 40px;
    width: 140px;
    padding: 3px;
    margin: 5px;
    cursor: pointer;
    font-family: 'Tektur';
}
:hover {
    font-size: 15px;
    font-weight: bold;
}
`