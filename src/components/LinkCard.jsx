function LinkCard(props) {
  return (
    <>
      <div className="bg-white flex justify-between items-center p-3 px-5 rounded-full shadow-md hover:bg-gray-100 hover:transition hover:duration-500">
        <i className={`bi bi-${props.icon} text-lg text-slate-950`}></i>
        <h1 className="text-sm font-bold text-slate-950">{props.title}</h1>
        <button aria-label="Link" className="bg-slate-950 h-8 w-8 rounded-full">
          <i className="bi bi-arrow-up-right text-xl text-white"></i>
        </button>
      </div>
    </>
  );
}

export default LinkCard;
