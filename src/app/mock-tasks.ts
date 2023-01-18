import { Task } from './task'
import { PRIORITY } from './priority-dictionary'

export const TASKS: Task[] = [
    new Task(3, 'Zaliczyć 5 semestr', PRIORITY[0], 'Nie będzie lekko', false),
    new Task(4, 'Zrobić zakupy', PRIORITY[4], 'Lista zakupów na lodówce', false),
    new Task(5, 'Ugotować zupę', PRIORITY[2], 'Z przepisu od Babci', false),
    new Task(6, 'Dokończyć serial', PRIORITY[1], '', false),
    new Task(7, 'Przebiec 10km', PRIORITY[0], 'Najlepiej w czasie 60 min. Trasa do okoła areny i z powrotem', false),
    new Task(8, 'Umyć auto', PRIORITY[3], '', true),
    new Task(9, 'Backup systemu', PRIORITY[3], '', false),
    new Task(10, 'Kupić nowe dywaniki do auta', PRIORITY[3], 'Nie będzie lekko', true)
]