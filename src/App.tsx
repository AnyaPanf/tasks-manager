import React, { useState } from 'react'
import arrow from './assets/arrow.png'
import { TaskList } from './components/TaskList'

export interface tasksData {
  id: string;
  text: string;
};

export const App: React.FC = () => {
  const [unfinishedTasks, setUnfinishedTasks] = useState<tasksData[]>([{ id: '1', text: 'Dentist appointment' },
  { id: '2', text: 'Finish the project' },
  { id: '3', text: 'Buy cat food!!!' },
  { id: '4', text: 'Call Grandma' },
  { id: '5', text: 'Go to the gym (finally)' },]);
  const [finishedTasks, setFinishedTasks] = useState<tasksData[]>([]);
  const [isChecked, setIsChecked] = useState<string>();

  const handleRight = () => {
    for (let i = 0; i < unfinishedTasks.length; i++) {
      if (unfinishedTasks[i].id === isChecked) {
        setFinishedTasks((prev) => prev = [...finishedTasks, unfinishedTasks[i]])
        setUnfinishedTasks((prev) => prev = prev.filter(task => task.id !== isChecked))
        setIsChecked(undefined)
      }
    }
  };

  const handleLeft = () => {
    for (let i = 0; i < finishedTasks.length; i++) {
      if (finishedTasks[i].id === isChecked) {
        setUnfinishedTasks((prev) => prev = [...unfinishedTasks, finishedTasks[i]])
        setFinishedTasks((prev) => prev = prev.filter(task => task.id !== isChecked))
        setIsChecked(undefined)
      }
    }
  };

  return (
    <>
      <div className='container'>
        <div className='tasks'>
          <TaskList title={'Tasks not yet done'}
            tasks={unfinishedTasks}
            isChecked={isChecked}
            setIsChecked={setIsChecked} />
          <div className="tasks__arrows">
            <button type="submit" className="tasks__btn" onClick={handleLeft}>
              <img src={arrow} className="arrow" alt="Arrow left" />
            </button>
            <button type="submit" className="tasks__btn" onClick={handleRight}>
              <img src={arrow} className="arrow arrow__right" alt="Arrow right" />
            </button>
          </div>
          <TaskList title={'Finished tasks'}
            tasks={finishedTasks}
            isChecked={isChecked}
            setIsChecked={setIsChecked} />
        </div>
      </div>
    </>
  )
};