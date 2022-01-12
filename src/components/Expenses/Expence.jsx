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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quos, inventore sed ratione voluptatum aliquid at explicabo quam error iste perferendis, nulla quaerat assumenda dolore quasi consequuntur, rerum minus sequi adipisci cumque non numquam voluptatem nemo quidem! Unde, tenetur nemo!
              </p>
            </Card>
          )
        })}
      </Card>
    );
}

export default Expence;