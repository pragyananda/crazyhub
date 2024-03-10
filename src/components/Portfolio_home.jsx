
import { ModelCanvas, Slider } from "./index";
const callouts = [
    {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]
export const Portfolio_home = () => {
    // const modelpath = [
    //     "./custom_range_rover_sport/scene.gltf",
    //     // "./old_chinese/scene.gltf",
    // ];
    return (
        <>
            <section className="py-12 bg-gray-700 rounded-b-lg  my-4 mx-3 rounded-md">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Explore Diverse Range of Products</h2>
                        <p className="text-lg lg:text-xl text-dimWhite mb-8">We create your expectations into reality.</p>
                        <a href="#" className="bg-[#131313] black-button text-white text-sm py-2 px-4 rounded-full ">View our portfolio</a>
                    </div>
                    <div className="mt-12">
                        <Slider /> 
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {/* <ModelCanvas Model={modelpath} /> */}
                            {/* <ModelCanvas Model={modelpath} /> */}
                            {/* <ModelCanvas Model={modelpath} /> */}
                            {/* {callouts.map((callout) => (
                                <div key={callout.name} className="group relative">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">

                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">
                                        <a href={callout.href}>
                                            <span className="absolute inset-0" />
                                            {callout.name}
                                        </a>
                                    </h3>
                                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
