import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Component/Card';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useEffect } from 'react';

function App() {
 
useEffect(()=>{
  fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-21&sortBy=publishedAt&apiKey=ea06908fc5c24c019c765861c6eb80f0')
  .then(res =>res.json())
  .then(data =>console.log(data))
},[])
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
    <Button varient="primary">click</Button>
     
      
    </div>
  );
}

export default App;
// const item = [{
//   name:'tanvir',description:'loremdhcbhdcbhdcjbjcbjbcjbbcj',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG'
// },{
//   name:'secdnd',description:'loremdhcbhdcbhdcjbjcbjbcjbbcj',img:'https://tourhobe.com/storage/packages/AfTaGKDJcXIrYiik2flJEA41UlJEXi2nzJap9ppo.jpg'
// },{
//   name:'third',description:'loremdhcbhdcbhdcjbjcbjbcjbbcj',img:'https://tourhobe.com/storage/packages/AfTaGKDJcXIrYiik2flJEA41UlJEXi2nzJap9ppo.jpg'
// },{
//   name:'fourth',description:'loremdhcbhdcbhdcjbjcbjbcjbbcj',img:'https://tourhobe.com/storage/packages/AfTaGKDJcXIrYiik2flJEA41UlJEXi2nzJap9ppo.jpg'
// },
// ]