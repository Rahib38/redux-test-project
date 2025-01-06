import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModel } from "@/Redux/features/task/AddTaskModel";
import {
  selecTasks,
  selectFilter,
  updateFilter,
} from "@/Redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";

export default function Task() {
  const tasks = useAppSelector(selecTasks);
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  console.log(dispatch)
  console.log(tasks);
  console.log(filter);
  return (
    <div className="mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">please compleate the task</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModel></AddTaskModel>
      </div>
      <div className="gap-4 space-y-4 mt-12">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
}
