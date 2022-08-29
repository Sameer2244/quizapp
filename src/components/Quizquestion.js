import React from 'react'
import { motion } from 'framer-motion'

export default function Quizquestion(props) {
  return (
    <motion.div
    initial={{ x: '100vw', opacity: 0 }}
    animate={{x:0,opacity:1}}
    transition={{type:'just',duration:1}}
    >
        <h1>Quizquestion</h1>

        <div className='button-container'>
            <motion.div
            className='quiz-btn' 
            onClick={()=>{console.log(props.questions)}}>
                <a>submit</a>
            </motion.div>
            <motion.div
            className='quiz-btn' onClick={() => {props.startquiz(false)}}>
                <a>Quit</a>
            </motion.div>
        </div>
    </motion.div>
  )
}
