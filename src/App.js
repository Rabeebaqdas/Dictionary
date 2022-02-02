import { Container, Switch } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/styles';
import React,{useState,useEffect} from 'react';
import Definations from './components/Definations';
import Header from './components/Header';

function App() {
const [meaning,setmeaning] = useState([]);
const [category,setcategory] = useState("en");
const [word,setword] = useState("");
const [mode,setmode] = useState(false);

  useEffect(()=>{
    const getData = async () => {
      const response = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      const data = await response.json();
      setmeaning(data);
      
    }
    getData();
  },[word,category])

  const Darkmode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  return (
    <div className="App" style={{height:"100vh", backgroundColor:mode?"#fff":"#282c34", color:mode?"#282c34":"#fff" , transition:'all 0.5s linear'}}>
      <Container maxWidth="md" style={{display:"flex", flexDirection:"column",height:"100vh",justifyContent:'space-evenly'}}>
        <div style={{position:"absolute" , top: 0 , right: 15 , paddingTop: 10}}>
          <span>{mode ? "Light Mode" : "Dark Mode"}</span>
        <Darkmode checked={mode} onChange={()=>setmode(!mode)} />
        </div>
        <Header category = {category} setcategory = {setcategory} setword = {setword} word = {word} mode = {mode} />
        {meaning && (<Definations category = {category} word = {word} meaning = {meaning} mode = {mode} /> )}
        
      </Container>
    </div>
  );
}

export default App;
