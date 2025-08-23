'use client'
import { Row, Col, Typography, Carousel } from 'antd'
import Image from 'next/image'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export default function BiographyCard({ content }: { content: string }) {
    return (

        <div className=''>
            {/* Title */}
            <div>
               
            </div>

            <div className='flex flex-col space-y-16'>
                {/* paragraph 1 + carrousel 1*/}
                <div className='flex flex-col space-x-12 space-y-16 lg:flex-row xl:space-x-16'>
                    <div className='w-full flex flex-col gap-4 md:w-3/8'>
                        <Typography.Title level={1} className={`text-4xl text-left font-bold ${merriweather.className}`}>BIOGRAFIA</Typography.Title>
                        <BiographyParagraph content={biografiaContenido[0]} />
                    </div>
                    <div className='w-full md:w-5/8 border-2 border-red-500'>
                        <BiographyCarousel listOfImages={carouselBiographyImages1} />
                    </div>
                </div>


                {/* paragraph 2 */}
                <div className='w-full '>
                    <BiographyParagraph content={biografiaContenido[0]} />
                </div>

                {/* paragraph 3 */}
                <div className='w-full '>
                    <BiographyParagraph content={biografiaContenido[1]} />
                </div>


                {/* paragraph 4 + carrousel 2*/}
                <div className='border-2 border-blue-500 items-center flex flex-col space-x-12 space-y-16 lg:flex-row xl:space-x-16'>
                <div className='w-full  md:w-1/2 border-2 border-red-500'>
                        <BiographyCarousel listOfImages={carouselBiographyImages2} />
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                      
                        <BiographyParagraph content={biografiaContenido[0]} />
                    </div>
                  
                </div>

                {/* paragraph 3 */}
                <div className='w-full '>
                    <BiographyParagraph content={biografiaContenido[1]} />
                </div>


            </div>



        </div>




    )


}
const biografiaContenido = [
    "Nacido el 27 de diciembre de 1968, Ramón Jiménez Salazar le debe su reconversión en Diego a una disputa familiar en la misma pila bautismal y en Cigala a los hermanos Losada. Madrileño del mismísimo Rastro, el pequeño Diego pasa los días corriendo detrás de una pelota, pero cuando oye cantar lo deja todo para escuchar. Absorbiendo el eco flamenco y la influencia artística que se respira en su familia, gana los primeros concursos de cante con apenas doce años, y ese brillo precoz pronto le lleva a colaborar con artistas de la talla de Farruco, Camarón o Vicente Amigo. \n Con el gusanillo constante del arte en el estómago, a los 15 años se escapa de casa para iniciar una gira con compañías de baile en Japón y Australia. Esa experiencia única le sumerge de lleno en el lenguaje universal de la música y su naturaleza integradora de culturas, un mensaje que está presente a lo largo de toda su trayectoria.",
    "Su carrera en solitario comienza, como su talento, arrolladora. A los discos Undebel y Entre vareta y canasta les sucede Corren tiempos de alegría, en el que colabora con músicos de jazz latino que habían participado en la película de Trueba Calle 54. Tras los primeros acercamientos con Bebo Valdés empieza a gestarse el legendario Lágrimas negras, que se convierte en un boom imparable que traspasa las fronteras de lo flamenco y se corona en lo más alto del imaginario cultural colectivo. Tras aquella presentación del álbum en el Gusman Theatre de Miami, la prensa sitúa al pianista como «clásico vivo de la música cubana» y al cantaor como «Sinatra del flamenco».",
    "A partir de esas fructíferas y diversas alianzas artísticas, Cigala se aproxima al tango, el bolero, la salsa y la música mexicana; un trabajo de mestizaje que la BBC le reconoce con el premio “Boundary Crossing”. En ese camino ayuda a establecer la universalidad del flamenco por todo el mundo, hermanando distintos estilos pero manteniendo la identidad y la pureza del folclore que le corre por las venas. Se convierte en una de las voces españolas más internacionales por derecho propio, con la música siempre impulsándolo como oxígeno y refugio.  ",
    "Cada gira de Diego desde Lágrimas negras ha llegado a todos los rincones del mundo en más de 30 países, dejando su huella en los mejores escenarios del globo: el Bunkamura Orchard Hall de Tokio, el Carnegie Hall en Nueva York, El Disney Hall y el Hollywood Bowl en Los Ángeles, el State Sidney Theater, el Auditorio de Ciudad de México, la Ópera de Montecarlo, el Olympia de París o el Barbican en Londres. Como le gusta decir, citando a Picasso: «Yo no busco, encuentro».   ",
];


/*
function BiographyCarousel({ listOfImages }: { listOfImages: { imageUrl: string, alt: string }[] }) {
    return (
        <Carousel autoplay style={{ display: 'flex', flexDirection: 'column' , height: '100%', border: '2px solid black' }}>
            {listOfImages.map((image, index) => (
                <div key={index}>
                    <div className="relative h-64">
                        <Image
                            src={image.imageUrl}
                            alt={image.alt}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            ))}
        </Carousel>
    )
}
    */
function BiographyCarousel({ listOfImages }: { listOfImages: { imageUrl: string, alt: string }[] }) {
    return (
       
                    <div className="">
                        <Image
                            src={listOfImages[0].imageUrl}
                            alt={listOfImages[0].alt}
                            fill
                            className="object-cover h-full w-full"
                        />
                    </div>
                
    )
}

const carouselBiographyImages1 = [
    {
        imageUrl: "/images/4.jpg",
        alt: "Imagen de fondo"
    },
    {
        imageUrl: "/images/5.jpg",
        alt: "Imagen de fondo"
    },
    {
        imageUrl: "/images/6.jpg",
        alt: "Imagen de fondo"
    },

]

const carouselBiographyImages2 = [
    {
        imageUrl: "/images/11.jpg",
        alt: "Imagen de fondo"
    },
    {
        imageUrl: "/images/14.jpg",
        alt: "Imagen de fondo"
    },
    {
        imageUrl: "/images/10.jpg",
        alt: "Imagen de fondo"
    },

]

function BiographyParagraph({ content }: { content: string }) {
    return (
        <Typography.Paragraph 
        
        style={{ 
            columnCount: 1,
            columnGap: '20px',
            columnRule: '1px solid #d9d9d9',
            fontFamily: 'Merriweather',
            fontSize: '1.0rem',
          }}
          className={`text-blue-600 text-left text-4xl text-red-500  ${merriweather.className}`}
        //className={`text-blue-600 text-left text-4xl text-red-500  ${merriweather.className}`}>{content}</Typography.Paragraph>
    >
        {content}
       
 
    </Typography.Paragraph>
    )
}

