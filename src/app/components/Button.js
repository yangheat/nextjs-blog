export default function Button({ children }) {
  return (
    <button
      className="rounded-lg bg-black px-5 text-lg text-teal-200 dark:bg-white dark:text-teal-700"
      onClick={() => alert(`thanks to ${children}`)}
    >
      {children}
    </button>
  )
}
