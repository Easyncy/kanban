import React from 'react'

interface Style {
  [props: string]: string | number
}

interface Props {
  id: string
  children: React.ReactElement
  style?: Style
  className?: string
  onDrop: (e: any) => void
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
}

export const Droppable: React.FC<Props> = ({
  id,
  children,
  style,
  className,
  onDragOver,
  onDrop,
}) => {
  return (
    <div
      id={id}
      style={style}
      className={className}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {children}
    </div>
  )
}
