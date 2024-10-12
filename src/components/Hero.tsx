export const Hero = () => {
    return (
        <section className="py-16 pt-24 mt-4"> {/* Updated */}
            <div className="flex justify-center items-center min-h-[70vh]">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Unleashing the power of web3
                    </h1>
                    <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Realising ideas that make web3 better and secure
                    </p>
                    <button
                        onClick={() => window.open('https://docs.cryptoutils.xyz', '_blank')}
                        className="btn btn-active btn-secondary"
                    >
                        <span className="relative z-10">Know more</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
