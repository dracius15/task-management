import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskItem from '../TaskItem';

describe('TaskItem', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    completed: false,
    documents: []
  };

  const mockDeleteTask = jest.fn();
  const mockToggleComplete = jest.fn();

  beforeEach(() => {
    mockDeleteTask.mockClear();
    mockToggleComplete.mockClear();
  });

  it('renders task item correctly', () => {
    render(
      <TaskItem
        task={mockTask}
        deleteTask={mockDeleteTask}
        toggleComplete={mockToggleComplete}
      />
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  it('toggles task completion when checkbox is clicked', async () => {
    render(
      <TaskItem
        task={mockTask}
        deleteTask={mockDeleteTask}
        toggleComplete={mockToggleComplete}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(mockToggleComplete).toHaveBeenCalledWith(mockTask.id);
  });

  it('deletes task when delete button is clicked', async () => {
    render(
      <TaskItem
        task={mockTask}
        deleteTask={mockDeleteTask}
        toggleComplete={mockToggleComplete}
      />
    );

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    await userEvent.click(deleteButton);

    expect(mockDeleteTask).toHaveBeenCalledWith(mockTask.id);
  });

  it('displays documents when task has attachments', () => {
    const taskWithDocs = {
      ...mockTask,
      documents: [
        new File(['content1'], 'doc1.pdf', { type: 'application/pdf' }),
        new File(['content2'], 'doc2.pdf', { type: 'application/pdf' })
      ]
    };

    render(
      <TaskItem
        task={taskWithDocs}
        deleteTask={mockDeleteTask}
        toggleComplete={mockToggleComplete}
      />
    );

    expect(screen.getByText('Documents:')).toBeInTheDocument();
    expect(screen.getByText('Doc 1')).toBeInTheDocument();
    expect(screen.getByText('Doc 2')).toBeInTheDocument();
  });

  it('applies completed styles when task is completed', () => {
    const completedTask = {
      ...mockTask,
      completed: true
    };

    render(
      <TaskItem
        task={completedTask}
        deleteTask={mockDeleteTask}
        toggleComplete={mockToggleComplete}
      />
    );

    const taskElement = screen.getByText('Test Task');
    expect(taskElement).toHaveClass('line-through');
    expect(taskElement).toHaveClass('text-gray-500');
  });
}); 