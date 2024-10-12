export const Hero = () => {
    return (
        <section className="pb-12 pt-12 mt-4"> {/* Updated */}
            <div className="flex justify-center items-center min-h-[70vh]">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Your Web3 Toolbox
                    </h1>
                    <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Let communities thrive again!
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
