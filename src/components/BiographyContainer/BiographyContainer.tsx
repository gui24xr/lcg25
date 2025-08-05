import { BiographyCard } from "./components";


const biographyContent = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.';
export default function BiographyContainer() {
    return (
        <div className="bg-white min-h-screen px-32 max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-4">
            <BiographyCard content={biographyContent} />
        </div>
    )
}
