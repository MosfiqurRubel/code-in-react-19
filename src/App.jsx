import { SquarePlay } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl p-4 m-4">Start Coding in React 19</h1>
      <p className="flex items-center bg-gray-300 p-2 rounded-sm text-3xl">
        <a
          href="https://www.youtube.com/watch?v=hiiGUjEkzbM&list=PLIJrr73KDmRw-T8bdJn3XxVMbH-zlooKb"
          target="_blank"
          className="underline mx-1"
        >
          Learn React 19 With Code
        </a>
        <span className="shrink-0">
          <SquarePlay />
        </span>
      </p>
    </div>
  );
}

export default App;
