// src/components/StudentsList.jsx

export default function StudentsList() {
  const students = ['김일', '김이', '김삼', '김사', '김오', '김육', '김칠', '김팔', '김구', '김십'];

  return (
    <div>
      <h2>학생 명단</h2>
      <ul>
        {students.map((name, index) => (
          <li key={index}>{index + 1}. {name} 님</li>
        ))}
      </ul>
    </div>
  );
}
