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

      <section
        style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#f0f9ff',
          borderRadius: '0.5rem',
          border: '1px solid #bfdbfe',
        }}
      >
        <h2 style={{ marginBottom: '0.75rem' }}>이 영상에서 경험한 것들</h2>
        <ul style={{ marginLeft: '1.25rem', lineHeight: 1.8 }}>
          <li>GitHub Codespaces에서 React 개발환경 열기</li>
          <li>컴포넌트와 useState로 상태 관리하기</li>
          <li>Props로 같은 컴포넌트를 다양하게 재사용하기</li>
          <li>npm run dev + Vite의 Hot Module Replacement 체험</li>
        </ul>
      </section>
    </div>
  )
}
