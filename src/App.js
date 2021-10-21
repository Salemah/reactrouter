import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Component/Card';
import { ButtonGroup, Button } from 'react-bootstrap';

function App() {
  const item = [{
    name:'tanvir',description:'loremdhcbhdcbhdcjbjcbjbcjbbcj',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG'
  },{
    name:'secdnd',description:'loremdhcbhdcbhdcjbjcbjbcjbbcj',img:'https://tourhobe.com/storage/packages/AfTaGKDJcXIrYiik2flJEA41UlJEXi2nzJap9ppo.jpg'
  },{
    name:'third',description:'loremdhcbhdcbhdcjbjcbjbcjbbcj',img:'https://tourhobe.com/storage/packages/AfTaGKDJcXIrYiik2flJEA41UlJEXi2nzJap9ppo.jpg'
  },{
    name:'fourth',description:'loremdhcbhdcbhdcjbjcbjbcjbbcj',img:'https://tourhobe.com/storage/packages/AfTaGKDJcXIrYiik2flJEA41UlJEXi2nzJap9ppo.jpg'
  },
]
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
    <Button varient="primary">click</Button>
      <Button varient="primary" >click</Button>
      {/* {
      item.map(product => <Card  item={product}/>)
      } */}
      
    </div>
  );
}

export default App;
