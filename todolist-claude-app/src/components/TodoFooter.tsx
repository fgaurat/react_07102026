interface Props {
  remaining: number
  doneCount: number
  onClearDone: () => void
}

export function TodoFooter({ remaining, doneCount, onClearDone }: Props) {
  return (
    <footer>
      <span>
        {remaining} tâche{remaining > 1 ? 's' : ''} restante
        {remaining > 1 ? 's' : ''}
      </span>
      {doneCount > 0 && (
        <button className="link" onClick={onClearDone}>
          Supprimer les terminées ({doneCount})
        </button>
      )}
    </footer>
  )
}
