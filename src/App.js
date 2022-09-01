import { useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion'
import QuizContainer from './components/QuizContainer.js';
import Quizquestion from './components/Quizquestion';
import QuestionFormat from './components/QuestionFormat';

function App() {

  const [startQuiz, setstartQuiz] = useState(false)
  const [loading, setloading] = useState(false)
  const [questions, setquestions] = useState([])
  return (
    <AnimatePresence>
    <div className="App">
      <header className="App-header">
        {
          startQuiz ? <Quizquestion startquiz={setstartQuiz} questions={questions}/>:
          <motion.div>
            <QuizContainer setloading={setloading} startquiz={setstartQuiz} setquestions={setquestions} questions={questions}/>
          </motion.div>
        }


        {/* testing */}
        {/* <QuestionFormat questions={questions}/> */}
       <div style={{position: "absolute",bottom:0,right:'2%'}}>
       <p>created by <a style={{color:'white'}} href='https://github.com/Sameer2244' target={'_blank'}>sameer</a></p>
       </div>
       {loading &&<h4>loading...</h4>}
      </header>
    </div>
    </AnimatePresence>
  );
}

export default App;
