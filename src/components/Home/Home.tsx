import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className='home'>
      <p>Существует только 1 правильный ответ!</p>
      <p></p>
      <Link to='start'>
        <button>Начать игру</button>
      </Link>
    </div>
  );
};

export default Home;
