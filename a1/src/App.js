
import Expenses from "./Components/Expenses";

function App(){
  const expenses =[
    {
      id:'e1',
      title:'Toilet Paper',
      amount:'94.12',
      date: new Date(2021,7,14),
    },
    {
      id:'e2',
      title:'New Tv',
      amount:'799.49',
      date: new Date(2021,2,12),
    },
    {
      id:'e3',
      title:'Car Insurance',
      amount:'294.67',
      date: new Date(2021,2,8),
    },
    {
      id:'e4',
      title:'New Desk(Wooden)',
      amount:'450',
      date: new Date(2021,5,120,)
    }
  ];


  return(
    <div>
   <Expenses item={expenses}/>
    </div>
  );
} 
export default App;