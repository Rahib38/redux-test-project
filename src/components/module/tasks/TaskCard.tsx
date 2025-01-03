import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";
interface IProps {
  task: ITask;
}
export default function TaskCard({ task }: IProps) {
  return (
    <div className="">
      <div className="border px-5 py-3 rounded-md ">
        <div className="flex justify-between items-center">
          <div className={cn("size-3 rounded-full ",{
            "bg-green-500":task.priority==='Low',
            "bg-yellow-500":task.priority==='medium',
            "bg-red-500":task.priority==='High'
          })}></div>
          <h1>{task?.title}</h1>
          <div className="flex gap-3 items-center">
            <Button variant="link" className="p-0">
              <Trash2></Trash2>
            </Button>
            <Checkbox></Checkbox>
          </div>
        </div>
        <p className="mt-5">{task?.description}</p>
      </div>
    </div>
  );
}
