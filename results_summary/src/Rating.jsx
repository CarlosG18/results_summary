function Rating({title, value, bg}){
  return(
    <div className={`flex my-3 justify-between w-64 rounded-xl bg-red-200 p-2 ${bg}`}>
      <h1>{title}</h1>
      <p><b>{value}</b> / 100 </p>
    </div>
  );
}

export default Rating;