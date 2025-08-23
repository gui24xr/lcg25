'use client'
import { List } from 'antd'
import { ClipboardType } from 'lucide-react'

export default function NextConcertsList({ concerts }: { concerts: any[] }) {
    return (
        <List
            className='w-full'
            dataSource={concerts}
            renderItem={(concert) => (
                <ConcertCard concert={concert} />
            )}
        />
    )
}

const ConcertCard = ({ concert }: { concert: any }) => {
    return (
        <div className='w-full flex flex-row gap-4 font-bebas text-lg p-4 rounded-lg shadow-md text-black bg-white'>

           
                <span>{concert.countryFlag} {concert.city}</span>
                <span>{concert.dayOfWeek} - {concert.date}- <span>{concert.time}</span></span>
                <span>{concert.venue}</span>
                <span>{concert.address}</span>
        




        </div>
    )
}