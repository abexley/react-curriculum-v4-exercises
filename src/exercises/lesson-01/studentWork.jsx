//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Alicia';
  const age = 37;
  const hobbies = [
    'reading',
    'coding',
    'baking',
    'spending time with my family',
  ];
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi! My name is {name}. I am {age} years old and I am excited to learn
        React!
      </p>
      <p>My hobbies are:</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
