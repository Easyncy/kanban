import React from 'react'

interface Style {
  [props: string]: string | number
}

interface Props {
  id: string
  children: React.ReactElement
  style?: Style
  className?: string
  onDragStart: (e: any) => void
  isDraggable: boolean
}

export const Draggable: React.FC<Props> = ({
  id,
  children,
  onDragStart,
  style,
  className,
  isDraggable = true,
}) => {
  return (
    <div
      id={id}
      style={style}
      onDragOver={onDragStart}
      className={className}
      draggable={isDraggable}
    >
      {children}
    </div>
  )
}
