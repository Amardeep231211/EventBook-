import Image from "next/image"

function Footer() {
  return (
    <div className=" bg-blue-500 h-30 w-full">
      <Image src="/assets/image/eventlogo"
      alt="footer logo"
      height={40}
      width={30}
      />
      <p className="text-center">Copy right reserved from 2023</p>
     
    </div>
  )
}

export default Footer