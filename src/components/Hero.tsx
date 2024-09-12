export const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900 py-16 pt-24 mt-4"> {/* Updated */}
            <div className="flex justify-center items-center min-h-[70vh]">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Unleashing the power of web3
                    </h1>
                    <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Realising ideas that make web3 better and secure
                    </p>
                    <button
                        onClick={() => window.open('https://x.com/cryptoutils', '_blank')}
                        className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg font-medium text-white bg-primary-700 rounded-full hover:bg-primary-600 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all bg-primary-800 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="relative z-10">Join Us In Our Mission</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
