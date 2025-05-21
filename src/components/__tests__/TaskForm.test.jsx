import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskForm from '../TaskForm';

describe('TaskForm', () => {
  const mockAddTask = jest.fn();

  beforeEach(() => {
    mockAddTask.mockClear();
  });

  it('renders task form correctly', () => {
    render(<TaskForm addTask={mockAddTask} />);
    
    expect(screen.getByPlaceholderText('Add new task')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('file')).toBeInTheDocument();
  });

  it('adds a task with title when submitted', async () => {
    render(<TaskForm addTask={mockAddTask} />);
    
    const input = screen.getByPlaceholderText('Add new task');
    const submitButton = screen.getByRole('button', { name: /add task/i });

    await userEvent.type(input, 'New Task');
    await userEvent.click(submitButton);

    expect(mockAddTask).toHaveBeenCalledWith(expect.objectContaining({
      title: 'New Task',
      completed: false,
      documents: []
    }));
  });

  it('does not add task when title is empty', async () => {
    render(<TaskForm addTask={mockAddTask} />);
    
    const submitButton = screen.getByRole('button', { name: /add task/i });
    await userEvent.click(submitButton);

    expect(mockAddTask).not.toHaveBeenCalled();
  });

  it('handles file upload correctly', async () => {
    render(<TaskForm addTask={mockAddTask} />);
    
    const file = new File(['test content'], 'test.pdf', { type: 'application/pdf' });
    const fileInput = screen.getByRole('file');

    await userEvent.upload(fileInput, file);

    const submitButton = screen.getByRole('button', { name: /add task/i });
    await userEvent.click(submitButton);

    expect(mockAddTask).toHaveBeenCalledWith(expect.objectContaining({
      documents: expect.arrayContaining([expect.any(File)])
    }));
  });

  it('limits file upload to 3 documents', async () => {
    render(<TaskForm addTask={mockAddTask} />);
    
    const files = [
      new File(['content1'], 'file1.pdf', { type: 'application/pdf' }),
      new File(['content2'], 'file2.pdf', { type: 'application/pdf' }),
      new File(['content3'], 'file3.pdf', { type: 'application/pdf' }),
      new File(['content4'], 'file4.pdf', { type: 'application/pdf' })
    ];

    const fileInput = screen.getByRole('file');
    await userEvent.upload(fileInput, files);

    const submitButton = screen.getByRole('button', { name: /add task/i });
    await userEvent.click(submitButton);

    expect(mockAddTask).toHaveBeenCalledWith(expect.objectContaining({
      documents: expect.arrayContaining([
        expect.any(File),
        expect.any(File),
        expect.any(File)
      ])
    }));
    expect(mockAddTask.mock.calls[0][0].documents).toHaveLength(3);
  });
}); 