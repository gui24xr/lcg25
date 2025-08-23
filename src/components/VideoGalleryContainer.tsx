'use client'

import { Button } from "antd";
import { useEffect, useState } from "react";
import { Carousel } from "antd";

export default function VideoGalleryContainer({ videosList }: { videosList: string[] }) {

    const [videos, setVideos] = useState<string[]>([]);
    const [currentVideo, setCurrentVideo] = useState<string>(videosList[0] || "");

    useEffect(() => {
        setVideos(videosList);
    }, [videosList]);

    if (videos.length === 0) return <p>No hay videos</p>

    return (


        <div className="flex flex-col gap-2">
             <div>
                <YouTubeChannelLink />
            </div>
            
            <div>
                <VideoCard videoId={currentVideo} />
            </div>
           
           
            <div>
                <CarouselVideosGallery videos={videos} />
            </div>

        </div>


    )
}






function GridVideosGallery({ videos }: string[]) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4">
            {videos.map((item, index) => {
                return <VideoCard videoId={item} key={index} />
            })}
        </div>
    )
}

function CarouselVideosGallery({ videos }: string[]) {

    const [groupOfVideos, setGroupOfVideos] = useState<string[]>([]);

    useEffect(() => {
        setGroupOfVideos(videos.slice(0, 3));
    }, [videos]);


    return (
        <Carousel autoplay style={{ padding: '0px 0px 30px 0px' }}>
            {groupOfVideos.map((item, index) => {
                return <GridVideosGallery videos={groupOfVideos} />
            })}
        </Carousel>
    )
}

function VideoCard({ videoId }: { videoUrl: string }) {
    return (
        <div className="relative w-full h-0 pb-[46.25%]"> {/* Aspect ratio 16:9 */}
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}

function YouTubeChannelLink() {
    return (
        <a
            href="https://www.youtube.com/channel/UCmM_ZyfM66rCweB_w65quag?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Suscríbete a mi canal
        </a>
    )
}