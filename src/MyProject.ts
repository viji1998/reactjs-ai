import React from 'react'

type Props = {}

const MyProject = (props: Props) => {
      function addNumbers(a: number, b: number) { 
        return a + b; 
    } 
    
    var sum: number = addNumbers(10, 15) 
    
    console.log('Sum of the two numbers is: ' +sum); 
    return(sum)
  
}

export default MyProject