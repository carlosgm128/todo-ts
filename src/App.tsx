import React, { useState } from "react";
import Card from "./Components/Card";
import Media from "./Components/media";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
type FormData = React.FormEvent;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const handleSubmit = (e: FormData) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };
  const toggleDone = (index: number) => {
    const newTask: ITask[] = [...tasks];
    newTask[index].done = !newTask[index].done;
    setTasks(newTask);
  };
  const addTask = (name: string): void => {
    const newTask: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTask);
  };
  const deleteTask = (index: number): void => {
    const taskToRemove: ITask[] = [...tasks];
    taskToRemove.splice(index, 1);
    setTasks(taskToRemove);
  };
  return (
    <div className="container p-4">
      <Media />
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Type a new task"
                      onChange={(e) => setNewTask(e.target.value)}
                      autoFocus
                      value={newTask}
                    />
                    <InputGroupAddon addonType="append">
                      <Button color="success">Add Task</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Form>
            </div>
          </div>
          {tasks.map((t: ITask, index: number) => (
            <Card {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
