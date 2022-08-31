import { useState } from 'react';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion'
import QuizContainer from './components/QuizContainer.js';
import Quizquestion from './components/Quizquestion';
import QuestionFormat from './components/QuestionFormat';

function App() {

  const [startQuiz, setstartQuiz] = useState(false)
  const [questions, setquestions] = useState([[
    {
        "id": 147,
        "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        "description": null,
        "answers": {
            "answer_a": "alt",
            "answer_b": "title",
            "answer_c": "longdesc",
            "answer_d": "src",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "",
        "difficulty": "Easy"
    },
    {
        "id": 688,
        "question": "What is an internal command?",
        "description": null,
        "answers": {
            "answer_a": "Shell built in commands are called as internal commands.",
            "answer_b": "Shell commands which are executed on the local machine are called internal commands.",
            "answer_c": "Every command which comes with the default installation of Linux is called internal command with some small exceptions like really old commands.",
            "answer_d": "Every command which has been developed by the new generation of Linux is considered an internal command.",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "BASH"
            },
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Medium"
    },
    {
        "id": 396,
        "question": "What kind of replication is supported by the MySQL Server?",
        "description": null,
        "answers": {
            "answer_a": "Multiple-master Replication",
            "answer_b": "MySQL Doesn't Support Replication",
            "answer_c": "Master To Slave Replication",
            "answer_d": "Single File Based Clustering",
            "answer_e": "Master to Master Replication",
            "answer_f": null
        },
        "multiple_correct_answers": "true",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "true",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "MySQL"
            }
        ],
        "category": "SQL",
        "difficulty": "Medium"
    },
    {
        "id": 26,
        "question": "What is a daemon?",
        "description": null,
        "answers": {
            "answer_a": "It is a generic name for e-mail servers on Linux. The most famous one is mailer-daemon",
            "answer_b": "It is a program that keeps running on the background after it is called, answering to requests done by users and other programs.",
            "answer_c": "It is an antivirus for Linux.",
            "answer_d": "It is the generic name for any Linux server.",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_b",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Medium"
    },
    {
        "id": 1068,
        "question": "What will happen If you run the command \"init 6\" in your terminal",
        "description": null,
        "answers": {
            "answer_a": "Reboot the system",
            "answer_b": "Shut down the system",
            "answer_c": "Enter single user mode",
            "answer_d": "Start the system without a display manager (GUI)",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Linux"
            },
            {
                "name": "BASH"
            }
        ],
        "category": "Linux",
        "difficulty": "Medium"
    },
    {
        "id": 341,
        "question": "What is the best way to change table prefix (wp_) before installation in WordPress?",
        "description": null,
        "answers": {
            "answer_a": "Before Installation: In this way, you have to rename your wp_config.php file according to your need through $table_prefix=’wp_’;.",
            "answer_b": "Before Installation: Through this way, you have to go PHPMyAdmin -> Select your database -> Check all tables -> Add/Update table prefix.",
            "answer_c": "After Installation: Once you have the database, you can go ahead and change it",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "WordPress"
            }
        ],
        "category": "CMS",
        "difficulty": "Medium"
    },
    {
        "id": 74,
        "question": "What is a correct way to add a comment in PHP?",
        "description": null,
        "answers": {
            "answer_a": "*\\...\\*",
            "answer_b": "/*...*/",
            "answer_c": "<!--...-->",
            "answer_d": "<comment>...</comment>",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_b",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "",
        "difficulty": "Easy"
    },
    {
        "id": 595,
        "question": "How can we end a session?",
        "description": null,
        "answers": {
            "answer_a": "session_destroy();",
            "answer_b": "session_close().",
            "answer_c": "session_end().",
            "answer_d": "session_write_end().",
            "answer_e": "session_destroy_now();",
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 530,
        "question": "Which of the following is not a style tag?",
        "description": null,
        "answers": {
            "answer_a": "<b>",
            "answer_b": "All are style tags",
            "answer_c": "<i>",
            "answer_d": "<tt>",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Code",
        "difficulty": "Easy"
    },
    {
        "id": 753,
        "question": "How do you write the contents of 3 files into a single file?",
        "description": null,
        "answers": {
            "answer_a": "cat file1 file2 file3 > file",
            "answer_b": "cat file1 > file && cat file2 >> file && cat file3 >> file",
            "answer_c": "cat file1 >> file; cat file2 >> file; cat file3 >> file",
            "answer_d": "cat file1 > file && cat file2 > file && cat file3 > file",
            "answer_e": "cat file1 > file || cat file2 > file || cat file3 > file",
            "answer_f": "cat file1 > file; cat file2 > file; cat file3 > file"
        },
        "multiple_correct_answers": "true",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "true",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "BASH"
            },
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Medium"
    }
]])
  return (
    <AnimatePresence>
    <div className="App">
      <header className="App-header">
        {
          startQuiz ? <Quizquestion startquiz={setstartQuiz} questions={questions}/>:
          <motion.div>
            <QuizContainer startquiz={setstartQuiz} setquestions={setquestions} questions={questions}/>
          </motion.div>
        }


        {/* testing */}
        {/* <QuestionFormat questions={questions}/> */}
       <div style={{position: "absolute",bottom:0,right:'2%'}}>
       <p>created by <a style={{color:'white'}} href='https://github.com/Sameer2244' target={'_blank'}>sameer</a></p>
       </div>
      </header>
    </div>
    </AnimatePresence>
  );
}

export default App;
