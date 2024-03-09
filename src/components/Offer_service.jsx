
import { Carousel } from "@material-tailwind/react";
export const Offer_service = () => {
    return (
        <>
            <section className="px-6 tab:px-12 lg:px-[112px] xl:px-[138px] py-[10vh] lg:py-[15vh]">
                <div className="w-full h-full">
                    <div className="relative overflow-hidden flex flex-col md:flex-row justify-between rounded-[10px] pt-[60px] md:pb-[60px] lg:py-[70px] px-6 tab:px-8 lg:px-[80px] bg-gray-800">
                        <Carousel
                            className="rounded-xl w-3/6"
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                    {new Array(length).fill("").map((_, i) => (
                                        <span
                                            key={i}
                                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                                }`}
                                            onClick={() => setActiveIndex(i)}
                                        />
                                    ))}
                                </div>
                            )}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                alt="image 3"
                                className="h-full w-full object-cover"
                            />
                        </Carousel>
                        <div className="w-3/6 ml-8">
                            <h2 className="text-3xl lg:text-4xl font-bold text-blue-gray-100">Services We Offer</h2>
                            <div className="mt-8">
                                <h3 className="text-xl lg:text-2xl font-semibold text-blue-gray-100">Virtual Reality 3D models</h3>
                                <p className="mt-2 text-blue-gray-100">Our lightweight models guarantee seamless integration with any platform, improving upon interactivity and immersiveness.</p>
                            </div>
                            {/* <div className="mt-8">
                                <h3 className="text-xl lg:text-2xl font-semibold">VTO 3D Assets</h3>
                                <p className="mt-2">With virtual try-on 3D assets, give your customers a seamless shopping experience and build trust that lasts long-term.</p>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl lg:text-2xl font-semibold">Metaverse 3D Avatars</h3>
                                <p className="mt-2">We are the leading 3D character design creators that build high definition, compatible custom avatars for various purposes.</p>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl lg:text-2xl font-semibold">3D Scan Clean-Up</h3>
                                <p className="mt-2">We use a variety of techniques for mesh optimization, making your 3D scans an accurate representation.</p>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl lg:text-2xl font-semibold">Augmented Reality 3D models</h3>
                                <p className="mt-2">Increase conversions with AR ready 3D models, as we ensure a clean topology along with 1:1 precision.</p>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl lg:text-2xl font-semibold">3D Virtual Spaces</h3>
                                <p className="mt-2">From conferences to 3D environments, our skilled artists and tech can design spaces that are tailored to you.</p>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl lg:text-2xl font-semibold">VTO 3D Assets</h3>
                                <p className="mt-2">With virtual try-on 3D assets, give your customers a seamless shopping experience and build trust that lasts long-term.</p>
                            </div> */}
                            <div className="">
                                <h2 className="text-xl lg:text-2xl font-semibold text-white">Areas we cover:</h2>
                                <ul className="mt-4 list-none list-inside flex flex-row gap-3">
                                    <li className="bg-blue-gray-300 rounded text-white py-2 px-1 text-xs">Power of Immersiveness</li>
                                    <li className="bg-blue-gray-300 rounded text-white py-2 px-1 text-xs">Personalized Digital Identities</li>
                                    <li className="bg-blue-gray-300 rounded text-white py-2 px-1 text-xs">Enhanced Virtual Experiences</li>
                                    <li className="bg-blue-gray-300 rounded text-white py-2 px-1 text-xs">Brand Representation</li>
                                </ul>
                                <button className="mt-10 bg-[#131313] black-button text-white text-sm py-2 px-4 rounded-full">
                                    Know more
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}


