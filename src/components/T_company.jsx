// import { useState, useEffect } from 'react';
// import { react_svg, barstool_store, budweiser, buzzfeed } from "../assets";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';


// export const T_company = () => {
//     return (
//         <>
//             <section className="px-6 tab:px-12 lg:px-[112px] xl:px-[138px] py-[10vh] lg:py-[15vh]">
//                 <div className="text-center mb-16">
//                     <h2 className="text-primaryWhite font-[600] text-[21px] tab:text-[26px] md:text-[32px] leading-7 tab:leading-[32px] md:leading-[40px] -tracking-[0.44px] md:-tracking-[0.32px]">Trusted by Leading Brands</h2>
//                 </div>
//                 <Swiper
//                     slidesPerView={6}
//                     spaceBetween={30}
//                     centeredSlides={true}
//                     grabCursor={true}
//                     loop={true}
//                     autoplay={{
//                         delay: 2000,
//                         disableOnInteraction: true,
//                     }}
//                     navigation={false}
//                     modules={[Pagination,Autoplay, Navigation]}
//                     className="mySwiper "
//                 >
//                     <SwiperSlide><img src={react_svg} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={barstool_store} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={budweiser} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={buzzfeed} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={react_svg} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={barstool_store} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={budweiser} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={buzzfeed} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={react_svg} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={barstool_store} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={budweiser} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={buzzfeed} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={react_svg} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={barstool_store} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={budweiser} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={buzzfeed} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={react_svg} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={barstool_store} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={budweiser} alt="" /></SwiperSlide>
//                     <SwiperSlide><img src={buzzfeed} alt="" /></SwiperSlide>
//                 </Swiper>
//             </section>
//         </>
//     );
// };

export const T_company = () => {
    return (
        <div className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
                    Trusted by Leading Brands
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                        alt="Transistor"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                        alt="Tuple"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                        alt="SavvyCal"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                        alt="Statamic"
                        width={158}
                        height={48}
                    />
                </div>
            </div>
        </div>
    )
}
