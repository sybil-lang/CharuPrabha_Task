import { Link } from "react-router-dom"

const Public = () => {

    const content = (
        <section className="public">
           
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="text-center">
                    <h1 className="max-w-md mx-auto text-3xl font-extrabold tracking-normal text-gray-900 sm:text-3xl md:text-5xl lg:text-6xl md:leading-none sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
                        <span className="block">
                       Welcome to my App
                        </span>
                    </h1>
                   
                    <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
                        <div className="rounded-full shadow">
                            <Link to="/login"
                                type="button"
                                className="flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-teal-400 border border-transparent rounded-full text-md hover:bg-teal-300 md:py-4 md:text-2xl md:px-10"
                            >
                               Go To Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
    return content
}
export default Public