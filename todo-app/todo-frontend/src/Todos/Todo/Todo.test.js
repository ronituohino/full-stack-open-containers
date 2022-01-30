import { render, fireEvent } from '@testing-library/react'
import Todo from './Todo'

describe('Todo.js', () => {
  test('renders todo', () => {
    const todo = {
      text: 'Test todo',
      done: false,
    }

    const component = render(<Todo todo={todo} />)

    expect(component.container).toHaveTextContent('Test todo')
  })

  test('calls completeTodo when #completeButton is pressed', () => {
    const todo = {
      text: 'Test todo',
      done: false,
    }

    const mockHandler = jest.fn()

    const component = render(
      <Todo todo={todo} completeTodo={mockHandler} />
    )
    const button =
      component.container.querySelector('#completeButton')

    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
  })
})
