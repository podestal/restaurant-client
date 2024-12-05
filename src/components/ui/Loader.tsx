const Loader = () => {
    return (
      <div className="dark:bg-slate-950 absolute top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center z-50">
        <div className="w-16 h-16 border-4 border-t-transparent dark:border-white border-black rounded-full animate-spin"></div>
        <h2 className="text-3xl mt-6 animate-pulse">Loading...</h2>
      </div>
    );
  };
  
  export default Loader;
  