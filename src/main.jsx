// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemorizeHook } from './06-memos/MemorizeHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReduce/TodoApp'

// import './08-useReduce/intro-reduce'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>
)
