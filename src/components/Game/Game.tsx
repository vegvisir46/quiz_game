import { questions } from "../../utils/questions";

type GameProps = {
  step: number;
  question: {
    title: string;
    variants: string[];
    correct: number;
  };
  onClickVariant: any;
};

const Game: React.FC<GameProps> = ({ step, question, onClickVariant }) => {
  const progress = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className='progress'>
        <div
          style={{ width: `${progress}%` }}
          className='progress__inner'
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li onClick={() => onClickVariant(index)} key={index}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Game;
