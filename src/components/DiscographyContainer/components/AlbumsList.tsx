'use client'
import { List } from 'antd'
import AlbumCard from './AlbumCard'

export default function AlbumsList({ albums }: { albums: Album[] }) {

    const renderAlbumCard = (album: Album) => {
        return <AlbumCard album={album} />
    }

    return (
        <div style={{ padding: 24 }} className="w-full">
        <List 
        grid={{ gutter: 24, column: 5, xs: 1, sm: 2, md: 3, lg: 4 }}
            dataSource={albums}
            renderItem={renderAlbumCard}
        />
        </div>
    )
}