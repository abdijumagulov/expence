import React from 'react';
import "./css/Expense.css";
import ExpenceItem from './Expenceitem';
import Card from "../UI/card";

function Expence(props) {
    return (
      <Card>
        {props.data.map((el) => {
          return (
            <Card className="expenses">
              <ExpenceItem title={el.title} amount={el.amount} date={el.date} img={el.img}/>
            </Card>
          )
        })}
      </Card>
        // <div className='container'>
        //   {}
        //     <ExpenceItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date} img={props.data[0].img}/>
        //     <ExpenceItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date} img={props.data[1].img}/>
        //     <ExpenceItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date} img={props.data[2].img}/>
        //     <ExpenceItem title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date} img={props.data[3].img}/>
        // </div>
    );
}

export default Expence;