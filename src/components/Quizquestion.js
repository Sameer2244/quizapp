import React, { useState } from 'react'
import { motion } from 'framer-motion'
import QuestionFormat from './QuestionFormat'
import Result from './Result';

export default function Quizquestion(props) {

  
  const [finished, setfinished] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [rightAnswerCount, setrightAnswerCount] = useState({});

  const [validationOptions, setValidationOptions] = useState([false, false, false, false, false, false])
  return (
    <motion.div
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'just', duration: 1 }}
    >
      {

        finished ? <Result rightAnswerCount={rightAnswerCount}/>
        :<QuestionFormat questions={props.questions[0][questionNumber]} questionNumber={questionNumber} validationOptions={validationOptions} setValidationOptions={setValidationOptions}
          rightAnswerCount={rightAnswerCount}
          setrightAnswerCount={setrightAnswerCount}
        />
      }
      <div className='button-container'>
       
 {!finished && <motion.div
          className='quiz-btn'
          onClick={() => {
            props.questions[0].length - 1 > questionNumber ? setQuestionNumber(questionNumber + 1) : setfinished(true);
              setValidationOptions([false, false, false, false, false, false])
          }}>
          <a>submit</a>
        </motion.div>}
        <motion.div
          className='quiz-btn' onClick={() => { props.startquiz(false) }}>
          <a>Quit</a>
        </motion.div>
      </div>
    </motion.div>
  )
}
