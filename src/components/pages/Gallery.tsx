import NavBar from "../NavBar/NavBar";
import DataService from "@/lib/data";
import Image from "next/image";
import { VideoGalleryContainer } from "../index";

export default async function Gallery() {


    const videos = await DataService.getVideosGallery();

    return (
        <div>
            <section>
                <div className="w-full bg-black">
                    <NavBar />
                </div>
            </section>

            <section>
                <div className="w-full bg-gray-50 ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

                        <div className="flex flex-col gap-8 text-black">
                            <div className="flex justify-center">
                                <h1 className={`font-playfair-display-sc text-6xl font-bold`}>FOTOGRAFIAS</h1>
                            </div>
                            <div>
                                <GridPicturesGallery />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="w-full bg-slate-900">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

                        <div className="flex flex-col gap-8 text-white">
                            <div className="flex justify-center">
                                <h1 className={`font-playfair-display-sc text-white text-6xl font-bold`}>VIDEOS</h1>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <VideoGalleryContainer videosList={videos} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}




const GridPicturesGallery = async () => {
    const pictures = await DataService.getPicturesGallery();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-1">
            {pictures.map((item, index) => {
                return <PictureCard imageUrl={item} alt={'picture'} key={index} />
            })}
        </div>
    )
}

const PictureCard = ({ imageUrl, alt }: { imageUrl: string, alt: string }) => {
    return (
        <div className="w-full aspect-square relative overflow-hidden hover:scale-120 transition-all duration-300">
            <Image
                src={imageUrl}
                alt={alt}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                className="object-cover transition-transform duration-300 hover:scale-140 grayscale hover:grayscale-0"
            />
        </div>
    )
}


