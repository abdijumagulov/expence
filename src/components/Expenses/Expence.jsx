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
    );
}

export default Expence;