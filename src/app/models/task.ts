export interface Task {
  id: string,
  name: string,
  description: string,
  date: Date,
  status: boolean,
}

export interface TaskStoreable {
  name: string,
  description: string,
  date: string,
  status: boolean,
}
