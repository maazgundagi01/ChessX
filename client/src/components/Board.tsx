import { useDispatch, useSelector } from 'react-redux';
import { boardUpdate } from '../redux/boardSlice';
import { RootState } from '../redux/store';

const Board = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.board.value);

  const handleBoardUpdate = () =>{
    dispatch(boardUpdate({id:'abc',name:'abc'}))
  }

  return (
    <div className='text-white z-high'>
      <h1>Counter: {value.id + value.name}</h1>
      <button className='' onClick={() => handleBoardUpdate()}>Increment by 5</button>
    </div>
  );
};

export default Board;
