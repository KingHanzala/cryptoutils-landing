export const Hero = () => {
    return (
        <section className="py-20 md:py-28 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center bg-black/30 dark:bg-black/50 p-8 rounded-lg">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl">
                        Your Web3 Toolbox
                    </h1>
                    <p className="mb-8 text-lg font-light text-gray-200 lg:mb-10 md:text-xl lg:text-2xl dark:text-gray-300">
                        Let communities thrive again!
                    </p>
                    <button
                        onClick={() => window.open('https://docs.cryptoutils.xyz', '_blank')}
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition duration-300 ease-in-out"
                    >
                        Know more
                    </button>
                </div>
            </div>
        </section>
    )
}
