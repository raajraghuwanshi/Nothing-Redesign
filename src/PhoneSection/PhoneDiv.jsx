const PhoneDiv = ({ phoneRef,textRef}) => {
  return (
    <div
      ref={phoneRef}
      className="absolute bottom-6 left-[34%] z-1 flex flex-col items-center hover:scale-105 duration-300 cursor-pointer"
    >
      <img className="w-120 h-120" src="NothingPhone-3.png" />
      <div  className="flex flex-col items-center border border-white p-2">
        <h1 ref={textRef} className=" text-white text-3xl font-myfont">NOTHING PHONE 3 </h1>
        
      </div>
    </div>
  )
}

export default PhoneDiv
