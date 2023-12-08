import { useSelector } from "react-redux"
import { selectCurrentUser, selectCurrentToken } from "./authSlice"
import { Link, NavLink } from "react-router-dom"

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)

    const welcome = user ? `Welcome ${user}!` : 'Welcome!'
    const tokenAbbr = `${token.slice(0, 9)}...`

    const content = (
        // <section className="welcome">
        //     <h1>{welcome}</h1>
        //     <p>Token: {tokenAbbr}</p>
        //     <p><Link to="/userslist">Go to the Users List</Link></p>
        // </section>
        <section className="py-8 z-10 bg-gray-100 font-serif">
            <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
                <div className="w-full md:w-1/2 py-8">
                    <h1 className="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
                        Welcome to <br />
                        <span className="text-blue-500 mt-2">
                            My App, <br />
                        </span>{" "}
                        {'I am ' + user}.
                    </h1>
                    <Link
                        to="/userslist"
                        className="text-purple-700 border border-purple-600 py-4 px-6 rounded inline-flex items-center mt-5"
                    >
                        View More
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            className="w-6 h-6 ml-2"
                        >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>

                </div>
                <div className="w-full md:w-1/2 py-8">
                    <img
                        src="https://img.freepik.com/free-vector/cute-astronaut-sitting-waving-hand-moon-cartoon-vector-icon-illustration-science-technology_138676-8219.jpg?size=626&ext=jpg&ga=GA1.1.1966757306.1702025280&semt=sph"
                        className="g-image rounded-full moving-image"
                    />
                </div>

            </div>
        </section>

    )

    return content
}
export default Welcome