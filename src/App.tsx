import ThemeSelector from "./components/ui/ThemeSelector"

const App = () => {

  return (
    <div className="h-screen flex flex-col justify-center items-center text-3xl font-bold dark:bg-slate-950 dark:text-slate-50">
      <h2 className="text-5xl text-center">This is a text</h2>
      <p className="text-xs w-[40%] text-center my-6 dark:text-slate-400 text-neutral-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, labore. Itaque sunt molestiae pariatur unde obcaecati sapiente ea in consequuntur, eligendi, harum facere voluptate! Provident est recusandae ex commodi voluptatem.</p>
      <ThemeSelector />
    </div>
  )
}

export default App
