import React, { useEffect, useRef,useState } from 'react'


export default function Result(props) {
    const [result, setresult] = useState(0)
    useEffect(() => {
        setresult(0)
      for (const key in props.rightAnswerCount) {
        if(props.rightAnswerCount[key]===true){
            setresult(r=>r+1)
            console.log(props.rightAnswerCount[key]);
        }
      }
    
    }, [])
    
    
  return (
    <div>
        <h3>Your score is {(result/10)*100}%</h3>
        <h4>Total Questions: 10</h4>
        <h4>Currect Answers: {result}</h4>
    </div>
  )
}
