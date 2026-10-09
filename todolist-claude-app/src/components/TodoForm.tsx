import { useState } from 'react'
import type { FormEvent } from 'react'

interface Props {
  onAdd: (title: string) => Promise<void>
}

export function TodoForm({ onAdd }: Props) {
  const [title, setTitle] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const value = title.trim()
    if (!value) return
    await onAdd(value)
    setTitle('')
  }

  return (
    <form className="add" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Que faut-il faire ?"
        aria-label="Nouvelle tâche"
      />
      <button type="submit" disabled={!title.trim()}>
        Ajouter
      </button>
    </form>
  )
}
