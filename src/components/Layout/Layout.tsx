import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className='game'>
        <span>Quiz</span> - игра, заключающаяся в ответах на вопросы из
        различных областей знания.
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
