import ScrollCarPage from "./components/ScrollCarPage"

const App = () => {
    return (
        <div className="bg-zinc-">
            <div className="h-screen bg-gray-400 text-[5rem] font-bold flex justify-center items-center">
                page 1
            </div>
            <ScrollCarPage />
            <div className="h-screen bg-gray-400 text-[5rem] font-bold flex justify-center items-center">
                page 3
            </div>
        </div>
    )
}

export default App