// src/Counter.tsx
import { useState } from 'react'

type CounterProps = {
  title?: string
  step?: number
}

export default function Counter({ title = '카운터', step = 1 }: CounterProps) {
  const [count, setCount] = useState<number>(0)

  const increase = () => setCount(count + step)
  const decrease = () => setCount(count - step)
  const reset = () => setCount(0)

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        backgroundColor: '#ffffff',
        boxShadow: '0 10px 25px rgba(15, 23, 42, 0.06)',
      }}
    >
      <h2 style={{ marginBottom: '0.75rem', fontSize: '1.125rem' }}>{title}</h2>
      <p
        style={{
          fontSize: '1.5rem',
          marginBottom: '1rem',
          color: '#111827',
        }}
      >
        현재 카운트: <strong>{count}</strong>
      </p>

      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={increase}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
          }}
        >
          +{step}
        </button>
        <button
          onClick={decrease}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ef4444',
            color: '#ffffff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
          }}
        >
          -{step}
        </button>
        <button
          onClick={reset}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#6b7280',
            color: '#ffffff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
          }}
        >
          리셋
        </button>
      </div>
    </div>
  )
}