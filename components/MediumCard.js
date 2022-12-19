import Image from "next/image"


function MediumCard({img, title}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-60 w-60">
            <Image className="rounded-xl" 
            src={img}
            fill
            />
        </div>
        <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}

export default MediumCard