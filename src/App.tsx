import './App.css'
import type { Skill } from './task1/types';
import SkillList from './task1/SkillList';
import SearchApp from './task2/SearchApp';

// Данные для демонстрации Lab 5.1
const mySkills: Skill[] = [
  { id: 1, name: "React", level: "Intermediate" },
  { id: 2, name: "TypeScript", level: "Beginner" },
  { id: 3, name: "Rap God", level: "Expert" }, // ;)
  { id: 4, name: "FL Studio", level: "Intermediate" }
];

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Lab 05: Valentin Kim</h1>
      
      <section style={{ border: '2px solid #333', padding: '20px', margin: '20px' }}>
        <h2>Task 1 & 2 & 3: Components</h2>
        <SkillList skills={mySkills} />
      </section>

      <section style={{ border: '2px solid #333', padding: '20px', margin: '20px' }}>
        <h2>Task 4: Search App (Lab 5.2)</h2>
        <SearchApp />
      </section>
    </div>
  )
}

export default App;