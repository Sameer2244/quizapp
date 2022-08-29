import { useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion'
import QuizContainer from './components/QuizContainer.js';
import Quizquestion from './components/Quizquestion';

function App() {

  const [startQuiz, setstartQuiz] = useState(false)
  const [questions, setquestions] = useState([])
  return (
    <AnimatePresence>
    <div className="App">
      <header className="App-header">
        {
          startQuiz ? <Quizquestion startquiz={setstartQuiz} questions={questions}/>:
          <motion.div>
            <QuizContainer startquiz={setstartQuiz} setquestions={setquestions}/>
          </motion.div>
        }
      </header>
    </div>
    </AnimatePresence>
  );
}

export default App;
