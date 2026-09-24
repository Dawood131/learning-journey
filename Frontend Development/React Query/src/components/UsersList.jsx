import React from 'react'
import { useUser, useDeleteUser } from '../hooks/useUsers'
import { Link } from 'react-router-dom';

const UsersList = () => {
    const {
        data,
        isPending,
        isError,
        error,
        isFetching,
    } = useUser();

    const { mutate: deleteUser, isPending: isDeletePending, variables: deletingId } = useDeleteUser()

    if (isPending) {
        return <div>Loading...</div>;
    }
    if (isError) return (
        <div>Error:{error.message}</div>
    )
    return (
        <div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Users</h1>

                    <Link to="/users/create">
                        <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            + Create User
                        </button>
                    </Link>
                </div>

                <div className="grid gap-4">
                    {data.map((user) => (
                        <div
                            key={user.id}
                            className="border rounded-lg p-4 shadow-sm flex justify-between items-center"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={user.image}
                                    alt={`${user.firstName} ${user.lastName}`}
                                    className="w-16 h-16 rounded-full object-cover border"
                                />

                                <div>
                                    <h2 className="text-lg font-semibold">
                                        {user.firstName} {user.lastName}
                                    </h2>

                                    <p className="text-gray-600">{user.email}</p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Link to={`/users/${user.id}`}>
                                    <button type="button" className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                                        View
                                    </button>
                                </Link>
                                <button
                                    type="button"
                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                    onClick={() => deleteUser(user.id)}
                                    disabled={isDeletePending && deletingId === user.id}
                                >
                                    {isDeletePending && deletingId === user.id ? 'Deleting...' : 'Delete'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UsersList