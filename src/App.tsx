// src/App.tsx
import Counter from './Counter'
import './App.css'

export default function App() {
  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#1f2937',
        }}
      >
        나만의 React 앱 in GitHub Codespaces
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <Counter title="카운터 1 (1씩 증가)" step={1} />
        <Counter title="카운터 2 (5씩 증가)" step={5} />
        <Counter title="카운터 3 (10씩 증가)" step={10} />
      </div>
    </div>
  )
}
