import Link from 'next/link';
import { useRouter } from 'next/router';

const Result = () => {
  const router = useRouter();
  const { score } = router.query;

  const handleRetakeQuiz = () => {
    router.push('/quiz');
  };

  return (
    <div>
      <h1>Your Quiz Results</h1>
      <p>Your score is: {score} out of {quizData.length}</p>

      <button onClick={handleRetakeQuiz}>Retake Quiz</button>

      <p><Link href="/quiz"><a>Retake the Quiz</a></Link></p>
    </div>
  );
};

export default Result;
