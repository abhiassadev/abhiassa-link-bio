function LinkCard(props) {
  return (
    <>
      <div className="bg-gray-50 flex justify-between items-center p-3 rounded-full shadow-md">
        <i className={`bi bi-${props.icon} text-lg text-slate-950`}></i>
        <h1 className="text-md font-bold text-slate-950">{props.title}</h1>
        <button
          aria-label="Link"
          className="bg-slate-950 h-10 w-10 rounded-full"
        >
          <i className="bi bi-arrow-up-right text-xl text-white"></i>
        </button>
      </div>
    </>
  );
}

export default LinkCard;
