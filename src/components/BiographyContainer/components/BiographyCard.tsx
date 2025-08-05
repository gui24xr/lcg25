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
        <div className='w-full px-16 py-32 flex flex-col gap-4  text-black '>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Typography.Title level={1} className={`text-left font-bold ${merriweather.className}`}>BIOGRAFIA</Typography.Title>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Typography.Paragraph strong className={`text-left text-lg ${merriweather.className}`}>{biografiaContenido[0]}</Typography.Paragraph></Col>
                <Col span={12}>
                    <div className="w-full h-64">
                        <Carousel autoplay style={{ height: '100%' }}>
                            <div>
                                <div className="relative h-64">
                                    <Image
                                        src="/images/elcigala.webp"
                                        alt="Imagen de fondo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="relative h-64">
                                    <Image
                                        src="/images/elcigala.webp"
                                        alt="Imagen de fondo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </Carousel>
                    </div>

                </Col>


            </Row>

            {/* Esta fila ocupa todo el ancho */}
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Typography.Paragraph strong className={`text-left text-base ${merriweather.className}`}>{biografiaContenido[1]}</Typography.Paragraph></Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Typography.Paragraph strong className={`text-left text-base ${merriweather.className}`}>{biografiaContenido[2]}</Typography.Paragraph></Col>
            </Row>
            
            <Row gutter={[16, 16]}>
             
                <Col span={12}>
                    <div className="w-full h-64">
                        <Carousel autoplay style={{ height: '100%' }}>
                            <div>
                                <div className="relative h-64">
                                    <Image
                                        src="/images/elcigala.webp"
                                        alt="Imagen de fondo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="relative h-64">
                                    <Image
                                        src="/images/elcigala.webp"
                                        alt="Imagen de fondo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </Carousel>
                    </div>

                </Col>
                <Col span={12}>
                    <Typography.Paragraph strong className={`text-left text-lg ${merriweather.className}`}>{biografiaContenido[0]}</Typography.Paragraph>
                </Col>


            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Typography.Paragraph strong className={`text-left text-base ${merriweather.className}`}>{biografiaContenido[3]}</Typography.Paragraph></Col>
            </Row>
        </div>



    )


}
const biografiaContenido = [
    "Nacido el 27 de diciembre de 1968, Ramón Jiménez Salazar le debe su reconversión en Diego a una disputa familiar en la misma pila bautismal y en Cigala a los hermanos Losada. Madrileño del mismísimo Rastro, el pequeño Diego pasa los días corriendo detrás de una pelota, pero cuando oye cantar lo deja todo para escuchar. Absorbiendo el eco flamenco y la influencia artística que se respira en su familia, gana los primeros concursos de cante con apenas doce años, y ese brillo precoz pronto le lleva a colaborar con artistas de la talla de Farruco, Camarón o Vicente Amigo. \n Con el gusanillo constante del arte en el estómago, a los 15 años se escapa de casa para iniciar una gira con compañías de baile en Japón y Australia. Esa experiencia única le sumerge de lleno en el lenguaje universal de la música y su naturaleza integradora de culturas, un mensaje que está presente a lo largo de toda su trayectoria.",

    "Su carrera en solitario comienza, como su talento, arrolladora. A los discos Undebel y Entre vareta y canasta les sucede Corren tiempos de alegría, en el que colabora con músicos de jazz latino que habían participado en la película de Trueba Calle 54. Tras los primeros acercamientos con Bebo Valdés empieza a gestarse el legendario Lágrimas negras, que se convierte en un boom imparable que traspasa las fronteras de lo flamenco y se corona en lo más alto del imaginario cultural colectivo. Tras aquella presentación del álbum en el Gusman Theatre de Miami, la prensa sitúa al pianista como «clásico vivo de la música cubana» y al cantaor como «Sinatra del flamenco».",

    "A partir de esas fructíferas y diversas alianzas artísticas, Cigala se aproxima al tango, el bolero, la salsa y la música mexicana; un trabajo de mestizaje que la BBC le reconoce con el premio “Boundary Crossing”. En ese camino ayuda a establecer la universalidad del flamenco por todo el mundo, hermanando distintos estilos pero manteniendo la identidad y la pureza del folclore que le corre por las venas. Se convierte en una de las voces españolas más internacionales por derecho propio, con la música siempre impulsándolo como oxígeno y refugio.  ",

    "Cada gira de Diego desde Lágrimas negras ha llegado a todos los rincones del mundo en más de 30 países, dejando su huella en los mejores escenarios del globo: el Bunkamura Orchard Hall de Tokio, el Carnegie Hall en Nueva York, El Disney Hall y el Hollywood Bowl en Los Ángeles, el State Sidney Theater, el Auditorio de Ciudad de México, la Ópera de Montecarlo, el Olympia de París o el Barbican en Londres. Como le gusta decir, citando a Picasso: «Yo no busco, encuentro».   ",


];
