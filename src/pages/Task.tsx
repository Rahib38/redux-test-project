import TaskCard from "@/components/module/tasks/TaskCard";
import { selecTasks, selectFilter } from "@/Redux/features/task/taskSlice";
import { useAppSelector } from "@/Redux/hook";

export default function Task() {
  const tasks = useAppSelector(selecTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);
  return (
    <div>
      <h1>please compleate the task</h1>
      <div className="gap-4 space-y-4">
        {tasks.map((task) => (
          <TaskCard task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
}
