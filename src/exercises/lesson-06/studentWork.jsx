import { useState } from 'react';
import UserProfile from '../../components/UserProfile';
import TaskFilter from '../../components/TaskFilter';
import TaskItem from '../../components/TaskItem';
import filterTasks from '../../utils/filterTasks';
import useTasks from '../../hooks/useTasks';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  //  #1: Data fetching + state + UI logic all mixed together

  // #2: Filtering logic inside component
  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilter filter={filter} onFilterChange={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
