function Rating({title, value, bg, img, color}){
  return(
    <div className={`flex justify-between w-64 rounded-xl p-2 ${bg}`}>
      <div className="flex">
        <img className="mr-3" src={img} />
        <h1 className={color}>{title}</h1>
      </div>
      <p className="text-Darkgrayblue"><b>{value}</b> / 100 </p>
    </div>
  );
}

export default Rating;