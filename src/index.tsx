import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './_components/App'
// Импортим функции которые возвращают action которые отправляются в редьюсер
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './_store/actions'
import todoApp from './_store/reducer'

const store = createStore(todoApp)

// Выведем в консоль начальное состояние
console.log(store.getState())



// Каждый раз при обновлении состояния - выводим его
// Отметим, что subscribe() возвращает функцию для отмены регистрации слушателя
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Отправим несколько экшенов
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Прекратим слушать обновление состояния
unsubscribe()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
