import ImageView from "./NextCloudinary/ImageView";


export default function WhatsappChat() {
  return (
    <>
    <div className="fixed bottom-10 right-2 lg:right-20 z-30 ">
        {/* <a href="https://wa.me/254728095505" target="_blank" rel="noopener noreferrer"> */}
        <a href="https://wa.me/254111374343" target="_blank" rel="noopener noreferrer">
        <ImageView
        imageSrc="whatsapp_oxmukz"
        height={50}
        width={50}
        alt="whatsapp icon"
        classNames="object-cover hover:scale-105 hover:cursor-pointer duration-300 ease-in"
        />
        </a>
    </div>
    </>
  )
}
