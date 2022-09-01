import React,{useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function QuestionFormat(props) {


  const options = {
    broder: 'solid 1px #fff',
    margin: '1rem auto',
    borderRadius: '1rem',
    width:'70rem',
    height:'auto',
    padding: '0.5rem',
    cursor:'pointer',
  }
  return (
    <div>
      <div>
        <h3>{props.questions.question}</h3>
        {
          props.questions.answers['answer_a'] && <motion.div whileHover={{ scale: 1.05 }}  style={{...options,backgroundColor:props.validationOptions[0] ? 'rgb(50,205,50,0.5)':'rgb(0,0,0,.7)' }} 
          onClick={()=>{
            const temp=props.validationOptions;
            temp.splice(0,1,true)
            props.setValidationOptions(a=> [...a,temp]);
            if(props.questions.correct_answers['answer_a_correct'] ==='true') {
             const tempans=props.rightAnswerCount
             tempans[`question_${props.questionNumber}`]=true;
             props.setrightAnswerCount(tempans); 
             console.log(Array(props.rightAnswerCount))
            } else{
              const tempans=props.rightAnswerCount
              tempans[`question_${props.questionNumber}`]=false;
             props.setrightAnswerCount(tempans); 
             console.log(props.rightAnswerCount)
            }
            
            }}>
            <a>{props.questions.answers['answer_a']}</a>
          </motion.div>
        }
        {
          props.questions.answers['answer_b'] && <motion.div whileHover={{scale: 1.05  }} style={{...options,backgroundColor:props.validationOptions[1] ? 'rgb(50,205,50,0.5)':'rgb(0,0,0,.7)' }} 
          onClick={()=>{
            const temp=props.validationOptions;
            temp.splice(1,1,true)
            props.setValidationOptions(a=> [...a,temp]);
            
            if(props.questions.correct_answers['answer_b_correct'] ==='true') {
              const tempans=props.rightAnswerCount
              tempans[`question_${props.questionNumber}`]=true;
              props.setrightAnswerCount(tempans); 
              console.log(props.rightAnswerCount)
             } else{
               const tempans=props.rightAnswerCount
               tempans[`question_${props.questionNumber}`]=false;
              props.setrightAnswerCount(tempans); 
              console.log(props.rightAnswerCount)
             }
          }}>
            <a>{props.questions.answers['answer_b']}</a>
          </motion.div>
        }
        {
          props.questions.answers['answer_c'] && <motion.div whileHover={{ scale: 1.05 }} style={{...options,backgroundColor:props.validationOptions[2] ? 'rgb(50,205,50,0.5)':'rgb(0,0,0,.7)' }} 
          onClick={()=>{
            const temp=props.validationOptions;
            temp.splice(2,1,true)
            props.setValidationOptions(a=> [...a,temp]);
            
            if(props.questions.correct_answers['answer_c_correct'] ==='true') {
              const tempans=props.rightAnswerCount
              tempans[`question_${props.questionNumber}`]=true;
              props.setrightAnswerCount(tempans); 
              console.log(props.rightAnswerCount)
             } else{
               const tempans=props.rightAnswerCount
               tempans[`question_${props.questionNumber}`]=false;
              props.setrightAnswerCount(tempans); 
              console.log(props.rightAnswerCount)
             }
            }}>
            <a>{props.questions.answers['answer_c']}</a>
          </motion.div>
        }
        {
          props.questions.answers['answer_d'] && <motion.div whileHover={{ scale: 1.05  }} style={{...options,backgroundColor:props.validationOptions[3] ? 'rgb(50,205,50,0.5)':'rgb(0,0,0,.7)' }} 
          onClick={()=>{
            const temp=props.validationOptions;
            temp.splice(3,1,true)
            props.setValidationOptions(a=> [...a,temp]);
            
            
            if(props.questions.correct_answers['answer_d_correct'] ==='true') {
              const tempans=props.rightAnswerCount
              tempans[`question_${props.questionNumber}`]=true;
              props.setrightAnswerCount(tempans); 
              console.log(props.rightAnswerCount)
             } else{
               const tempans=props.rightAnswerCount
               tempans[`question_${props.questionNumber}`]=false;
              props.setrightAnswerCount(tempans); 
              console.log(props.rightAnswerCount)
             }
          }}>
            <a>{props.questions.answers['answer_d']}</a>
          </motion.div>
        }
        {
          props.questions.answers['answer_e'] && <motion.div whileHover={{ scale: 1.05  }} style={{...options,backgroundColor:props.validationOptions[4] ? 'rgb(50,205,50,0.5)':'rgb(0,0,0,.7)' }} 
          onClick={()=>{
            const temp=props.validationOptions;
            temp.splice(4,1,true)
            props.setValidationOptions(a=> [...a,temp]);
            
            if(props.questions.correct_answers['answer_e_correct'] ==='true') {
              const tempans=props.rightAnswerCount
              tempans[`question_${props.questionNumber}`]=true;
              props.setrightAnswerCount(tempans); 
              console.log(props.rightAnswerCount)
             } else{
               const tempans=props.rightAnswerCount
               tempans[`question_${props.questionNumber}`]=false;
              props.setrightAnswerCount(tempans); 
              console.log(props.rightAnswerCount)
             }
            }}>
            <a>{props.questions.answers['answer_e']}</a>
          </motion.div>
        }
        {
          props.questions.answers['answer_f'] && <motion.div whileHover={{ scale: 1.05 }} style={{...options,backgroundColor:props.validationOptions[5] ? 'rgb(50,205,50,0.5)':'rgb(0,0,0,.7)' }} 
          onClick={()=>{
            const temp=props.validationOptions;
            temp.splice(5,1,true)
            props.setValidationOptions(a=> [...a,temp]);
            
            if(props.questions.correct_answers['answer_f_correct'] ==='true') {
              const tempans=props.rightAnswerCount
              tempans[`question_${props.questionNumber}`]=true;
              props.setrightAnswerCount(tempans); 
              console.log(props.rightAnswerCount)
             } else{
               const tempans=props.rightAnswerCount
               tempans[`question_${props.questionNumber}`]=false;
              props.setrightAnswerCount(tempans); 
              console.log(props.rightAnswerCount)
             }
            }}>
            <a>{props.questions.answers['answer_f']}</a>
          </motion.div>
        }
      </div>
    </div>
  )
}





