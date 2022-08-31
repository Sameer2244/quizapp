import React from 'react'
import '../css/quizcontainer.css';
import { motion } from 'framer-motion'
export default function QuizContainer(props) {


    const startQuiz = () => {
         props.startquiz(true)
        fetch('https://quizapi.io/api/v1/questions?apiKey=hVuYhFLDUtghCVLqublGqdVLxfJ94k84MQPx52LW&limit=10')
            .then(res => res.json())
            .then(res => {props.setquestions([res]); console.log(res); })
            .catch(err => console.log(err));

    }
    return (
        <div className='quiz-container'>
            <motion.div
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{ type: 'just', duration: 1 }}
            >
                <h1>Start the quiz.</h1>
            </motion.div>
            <motion.div
                initial={{ y: '100vh' }}
                animate={{ y: 0 }}
                transition={{ type: 'just', duration: 1, delay: 1 }}
                className='quiz-btn'
                onClick={startQuiz}>
                    <a>START</a>
            </motion.div>
        </div >
    )
}
