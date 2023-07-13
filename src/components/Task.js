import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function Task({ id, text, isCompleted, completeTask, removeTask }) {

    const baseStyle='p-5 cursor-pointer rounded-3xl mb-5 flex';
    const completedStyle='bg-sky-200 hover:bg-sky-300 text-blue-500 hover:text-white line-through';
    const uncompletedStyle='bg-sky-300 hover:bg-sky-200 text-white hover:text-blue-500';

    return (
        <div 
            className={`${baseStyle} ${isCompleted ? completedStyle : uncompletedStyle}`}>
            <div className='flex-1 text-start break-all' onClick={() => completeTask(id)}>
                {text}
            </div>
            <div 
                className='flex-none'
                onClick={() => removeTask(id)}>
                <AiOutlineCloseCircle className='w-7 h-7'/>
            </div>
        </div>
    );
}

export default Task;