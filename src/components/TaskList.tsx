import { tasksData } from "../App";

interface TasksListProps {
    title: string;
    tasks: tasksData[];
    isChecked: string | undefined;
    setIsChecked: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const TaskList: React.FC<TasksListProps> = ({ title, tasks, isChecked, setIsChecked }) => {
    const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.value)
    };

    return (
        <div className="tasks__undone">
            <h2 className="tasks__title">{title}</h2>
            <div className="tasks__list">
                {tasks.map((task) => (
                    <div className={`tasks__task ${isChecked === task.id ? 'tasks__task-checked' : 'tasks__task-notchecked'}`}
                        key={task.id}
                    >
                        <input
                            onChange={handleRadio}
                            type='radio'
                            name='task'
                            id={task.id}
                            value={task.id}
                            checked={isChecked === task.id}
                        />
                        <label
                            htmlFor={task.id}>{task.text}</label>
                    </div>
                )
                )}
            </div>
        </div>
    )
};
