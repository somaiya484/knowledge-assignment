import React, { useState } from 'react';
import "./Question.css"
const Question = () => {
  return (
    <div className='text-start'>
      <div className=' question w-100 ps-4 rounded p-2  mt-2  '>
        <h2>1:Difference between props and  state?</h2>
        <div>
              <p>
              Props pass the data from a parent to a child component, with a read-only process, which means the one-dimensional, like the child components can only receive the data. It cannot change or modify the props. And the parent components can change their passing data. 
              And then this new data is again applied to child components.
              <br/> <br/>
              
            State is used to contain or store the data of component. It is a a built-in React object.State changes can be asynchronous, if the state object change, the component also get changed
              </p>
        </div>
      </div>

     <div className='question  w-100 ps-4   rounded p-2  mt-3 '>
        <h2>2:How does useState work?</h2>
        <div className='answer  mt-1 rounded p-2' id="example-collapse-text">
              <p>
              useState is a React hook that allows or can be used to added the state value to a function. It returns an array with two values: the current state and a function to update it.When a component renders for the first time, useState initializes the state with the provided initial value. The initial value can be a primitive value such as a string, number or boolean, or it can be an object or an array. The function returned by useState can be called to update the state. When this function is called with a new state value, React will schedule a re-render of the component with the updated state value.
              </p>
        </div>
     </div>

     <div className='question  w-100 ps-4   rounded p-2  mt-3'>
      <h2>3:What is the Purpose of useEffect other than fetching data?</h2>
      <div className='answer  mt-1 rounded p-2' id="example-collapse-text">
          <p>
          The purpose of useEffect other than fetching data is manipulating the DOM,handling side effects in general.
          </p>
        </div>
     </div>

     <div className='question  w-100 ps-4   rounded p-2  mt-3 '>
      <h2>4.How Does React work?</h2>
      <div className='answer  mt-1 rounded p-2' id="example-collapse-text">
            <p>
            React is a JavaScript library for building user interfaces. It works by allowing developers to define components that represent parts of the UI, which can be composed together to build complex UIs. React automatically re-renders components and updates the DOM when a component's state changes. It also provides lifecycle methods to control component behavior, and can be used with other tools and frameworks to build full-featured applications.
            </p>
          </div>
      </div>
    </div>
  );
};

export default Question;


