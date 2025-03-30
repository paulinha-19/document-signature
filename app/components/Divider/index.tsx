interface DividerProps {
  text: string
}

export function Divider({ text }: DividerProps) {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-white px-2 text-gray-500">{text}</span>
      </div>
    </div>
  )
} 