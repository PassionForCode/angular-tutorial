export interface Task {
  id?: number,
  text: string,
  day: string,
  reminder: boolean
}

export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Task 1',
    day: '01.01.2011',
    reminder: true,
  },
  {
    id: 12,
    text: 'Task 2',
    day: '02.02.2022',
    reminder: false,
  },
  {
    id: 3,
    text: 'Task 3',
    day: '03.03.2033',
    reminder: false,
  },
  {
    id: 4,
    text: 'Task 4',
    day: '04.04.2044',
    reminder: true,
  },
];
