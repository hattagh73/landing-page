//* Import NextJS Typescript */
import { NextPage } from "next";

//* Import NextJS Features */
import Image from "next/image";

//* Import Components */
import { Header, Footer } from '../components';

const Home:NextPage = () => {

    const data = {
        img_mm: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/45828a29-e0f6-4e7f-9ffe-2367b84bc0b5/de96e9s-df213fc7-bc00-4a17-a13e-281231acf036.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1ODI4YTI5LWUwZjYtNGU3Zi05ZmZlLTIzNjdiODRiYzBiNVwvZGU5NmU5cy1kZjIxM2ZjNy1iYzAwLTRhMTctYTEzZS0yODEyMzFhY2YwMzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OrqjgKVldtUyCa7Pv9v5sk1DUrmMOn_J4dCGY7VC8wo`,
        img_canyon1: `https://images8.alphacoders.com/921/921499.jpg`,
        img_noise: `https://res.cloudinary.com/dltslq5fh/image/upload/v1666447460/mesh-grad/ylao1jrrmf1e5wzkvpj5.png`
    }

    return (
        <>  
            <main className="min-h-screen relative group/gradient">

                {/* Canyon Background */}
                <Image src={data.img_canyon1}
                    layout="fill"
                    objectFit="cover"
                    priority
                />

                {/* Overlay */}
                <div className="
                        absolute inset-0 z-10 
                        transition-all duration-500
                        bg-gradient-to-b from-black/40 via-black/5 to-black/40
                        opacity-20
                        group-hover/gradient:opacity-100
                    "
                >
                </div>

                {/* Contents */}
                <section className="absolute inset-0 z-20 max-w-screen-2xl mx-4 lg:mx-auto grid grid-cols-1 grid-rows-6 ">

                    <Header />
                    
                    <div className="row-span-4">

                        {/* Sub Title */}
                        <p className="
                            mb-7
                            inline-flex
                            font-kaushan_script 
                            text-xl
                            text-white
                        ">Let's Explore !
                        </p>

                        {/* Title */}
                        <h1 className="text-6xl font-medium text-white mb-7">
                            {/* <span className="font-light">Slot</span>Slot Canyon */}
                            Slot Canyon
                        </h1>

                        {/* Description Box */}
                        <div className="
                            relative
                            bg-white/5 
                            max-w-xl 
                            py-2 px-3 
                            rounded-md
                            transition duration-200 ease-linear
                            group/noise
                            hover:backdrop-blur-md
                            hover:bg-white/10
                        ">

                            {/* Noise Background */}
                            <div className="hidden group-hover/noise:block">
                                <Image 
                                    className="absolute opacity-30 z-0"
                                    src={data.img_noise}
                                    layout="fill"
                                    priority
                                    quality="60"
                                />
                            </div>

                            <p className="text-lg text-white font-light relative z-10">
                                A slot canyon is a long, narrow channel or drainageway with sheer rock walls that are typically eroded into either sandstone or other sedimentary rock.
                            </p>

                            <p className="mt-5 text-lg text-white font-light relative z-10">
                                A slot canyon has depth-to-width ratios that typically exceed 10:1 over most of its length and can approach 100:1.
                            </p>

                        </div>

                    </div>

                    <Footer />

                </section>

            </main>
        </>
    )
}
export default Home;