import icondark from "../assets/icon_dark.png";
import iconlight from "../assets/icon_light.png";

export const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900 pt-6 mt-4">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 flex flex-col items-center">
                    <h1 className="max-w-xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">Crypto Toolbox for all cryptocurrency tools</h1>
                    <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">Building a comprehensive set of regularly used crypto tools for public use</p>
                    <a href="https://airdropinfo.cryptoutils.xyz/" target="_blank" className="inline-flex items-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Airdrop Info
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
                <div className="hidden lg:flex lg:col-span-5 lg:mt-0">
                    <img
                        src={iconlight} // Default image for light mode
                        alt="mockup"
                        className="dark:hidden object-contain"
                    />
                    <img
                        src={icondark} // Image for dark mode
                        alt="mockup"
                        className="hidden dark:block object-contain"
                    />
                </div>
            </div>
        </section>
    )
}
