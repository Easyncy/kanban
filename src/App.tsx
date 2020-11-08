import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Draggable } from './components/drag-and-drop/draggable'
import { Droppable } from './components/drag-and-drop/droppable'
import './App.css'

enum TaskStatus {
  Todo = 'TODO',
  InProgress = 'IN_PROGRESS',
  Test = 'TEST',
  Done = 'DONE',
}

type Status = TaskStatus.Todo | TaskStatus.InProgress | TaskStatus.Test | TaskStatus.Done
type UUID = string

interface Task {
  id: UUID
  title: string
  status: Status
}

function App() {
  const [currentBoard, setCurrentBoard] = React.useState<string>('')
  const [currentTask, setCurrentTask] = React.useState<string>('')
  const [tasks, addTask] = React.useState([
    { id: uuidv4(), title: 'hello', status: TaskStatus.Todo },
    { id: uuidv4(), title: 'good morning', status: TaskStatus.Todo },
  ])

  const dropElement = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const status: { [props: string]: Status } = {
      Todo: TaskStatus.Todo,
      InProgress: TaskStatus.InProgress,
      Done: TaskStatus.Done,
    }

    const updatedTasks: Task[] = tasks.map((task) => {
      if (task.id === currentTask) {
        return { ...task, status: status[currentBoard] }
      }
      return task
    })
    addTask(updatedTasks)
  }

  const dragOver = (e: any) => {
    e.preventDefault()
    setCurrentBoard(e.target.id)
  }

  return (
    <div className='App'>
      <div className='board'>
        <Droppable
          className='droppable'
          onDrop={dropElement}
          onDragOver={dragOver}
          id='Todo'
        >
          <div id='Todo'>
            <h4>TODO</h4>
            {tasks
              .filter((task) => task.status === 'TODO')
              .map((task: Task) => (
                <Draggable
                  onDragStart={(e: any) => setCurrentTask(e.target.id)}
                  isDraggable
                  id={task.id}
                  key={task.id}
                >
                  <div className='draggable' id={task.id}>
                    {task.title}
                  </div>
                </Draggable>
              ))}
          </div>
        </Droppable>
      </div>

      <div className='board'>
        <Droppable
          className='droppable'
          onDrop={dropElement}
          onDragOver={dragOver}
          id='InProgress'
        >
          <div id='InProgress'>
            <h4>TODO</h4>
            {tasks
              .filter((task) => task.status === 'IN_PROGRESS')
              .map((task: Task) => (
                <Draggable
                  onDragStart={(e: any) => setCurrentTask(e.target.id)}
                  isDraggable
                  id={task.id}
                  key={task.id}
                >
                  <div className='draggable' id={task.id}>
                    {task.title}
                  </div>
                </Draggable>
              ))}
          </div>
        </Droppable>
      </div>
      <div className='board'>
        <Droppable
          className='droppable'
          onDrop={dropElement}
          onDragOver={dragOver}
          id='Done'
        >
          <div id='Done'>
            <h4>TODO</h4>
            {tasks
              .filter((task) => task.status === 'DONE')
              .map((task: Task) => (
                <Draggable
                  onDragStart={(e: any) => setCurrentTask(e.target.id)}
                  isDraggable
                  id={task.id}
                  key={task.id}
                >
                  <div className='draggable' id={task.id}>
                    {task.title}
                  </div>
                </Draggable>
              ))}
          </div>
        </Droppable>
      </div>
    </div>
  )
}

export default App
