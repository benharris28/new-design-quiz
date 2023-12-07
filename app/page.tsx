import Link from 'next/link';

const Welcome: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to the Website Quiz</h1>
      <Link href="/quiz">
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Start Quiz</button>
      </Link>
    </div>
  );
}

export default Welcome;