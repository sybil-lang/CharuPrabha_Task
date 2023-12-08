// import { useGetUsersQuery } from "./usersApiSlice"
// import { Link } from "react-router-dom";

// const UsersList = () => {
//     const {
//         data: users,
//         isLoading,
//         isSuccess,
//         isError,
//         error
//     } = useGetUsersQuery()

//     let content;
//     if (isLoading) {
//         content = <p>"Loading..."</p>;
//     } else if (isSuccess) {
//         content = (
//             <section className="users">
//                 <h1>Users List</h1>
//                 <ul>
//                     {users.map((user, i) => {
//                         return <li key={i}>{user.username}</li>
//                     })}
//                 </ul>
//                 <Link to="/welcome">Back to Welcome</Link>
//             </section>
//         )
//     } else if (isError) {
//         content = <p>{JSON.stringify(error)}</p>;
//     }

//     return content
// }
// export default UsersList
import { useGetUsersQuery } from "./usersApiSlice";
import { Link } from "react-router-dom";

const TopUsersList = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery();

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = (
            <>
                <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-16">
                    <div className="bg-gray-100 py-2 px-4">
                        <h2 className="text-xl font-semibold text-gray-800">Top Users</h2>
                    </div>
                    <ul className="divide-y divide-gray-200">
                        {users.map((user, index) => (
                            <li key={user.id} className="flex items-center py-4 px-6">
                                <span className="text-gray-700 text-lg font-medium mr-4">
                                    {index + 1}.
                                </span>
                                <img
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                    src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
                                    alt={`${user.username}'s avatar`}
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-gray-800">
                                        {user.username}
                                    </h3>
                                    {/* <p className="text-gray-600 text-base">{`${user.points} points`}</p> */}
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className=" rounded-md overflow-hidden max-w-lg mx-auto">
                <Link
                    to="/welcome"
                    className="text-purple-700 border border-purple-600 py-4 px-6 rounded inline-flex items-center mt-5 "
                >
                    Back to Welcome
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

            </>
        );
    } else if (isError) {
        content = <p>Error: {JSON.stringify(error)}</p>;
    }

    return content;
};

export default TopUsersList;
