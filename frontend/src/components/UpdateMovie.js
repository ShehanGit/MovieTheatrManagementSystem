import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UpdateMovie() {

    const { userId } = useParams();

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [director, setDirector] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [languages, setLanguages] = useState('');
    const [runtime, setRuntime] = useState("");
    const [Rating, setRating] = useState('');


    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8086/Movie/getOne/${userId}`);
                const movieData = response.data;

                setTitle(movieData.title);
                setGenre(movieData.genre);
                setDirector(movieData.director);
                setReleaseDate(movieData.releaseDate);
                setLanguages(movieData.languages);
                setRuntime(movieData.runtime);
                setRating(movieData.Rating);
            } catch (error) {
                alert('Data Load Unsuccessful: ' + error.message);
                console.log(error);
            }
        };

        fetchMovieDetails();
    }, [userId]);

    /*
    // This will exicute after click submit button
    function SendData(e) {
        e.preventDefault();

        const newMovie = {
            title,
            genre,
            director,
            releaseDate,
            languages,
            runtime,
            Rating,
        }

        axios.post("http://localhost:8086/Movie/addMovie", newMovie).then(() => {
            alert("Movie added");
        }).catch((err) => {
            alert(err)
        })
    }

    */



    const handleSubmit = async () => {
        try {
            const response = await axios.put(`http://localhost:8086/Movie/update`, {
                userId,
                title,
                genre,
                director,
                releaseDate,
                languages,
                runtime,
                Rating,
            });

            alert('Update success');
            // You can also update the local state with the updated data if needed.
            // For example:
            // setTitle(response.data.updatedMovie.title);
        } catch (error) {
            alert('Update unsuccessful: ' + error.message);
            console.log(error);
        }
    };

    const cancel = () => {
        //navigate(`/getUsers`);

    }



    return (
        <div className="container" >
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                    <h1 className="text-3xl font-bold text-center text-primary mb-6">Update User Details</h1>
                    <form className="space-y-4" onSubmit={handleSubmit} >
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="mt-1 block w-full py-2 px-3 rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400"
                                    placeholder="First Name"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}

                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="mt-1 block w-full py-2 px-3 rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400"
                                    placeholder="Last Name"
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}

                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="mt-1 block w-full py-2 px-3 rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400"
                                placeholder="Email"
                                value={director}
                                onChange={(e) => setDirector(e.target.value)}

                            />
                        </div>
                        <div>
                            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                                Age
                            </label>
                            <input
                                type="text"
                                id="age"
                                className="mt-1 block w-full py-2 px-3 rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400"
                                placeholder="Age"
                                value={releaseDate}
                                onChange={(e) => setReleaseDate(e.target.value)}

                            />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                                Date of Birth
                            </label>
                            <input
                                type="text"
                                id="dob"
                                className="mt-1 block w-full py-2 px-3 rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400"
                                value={languages}
                                onChange={(e) => setLanguages(e.target.value)}

                            />
                        </div>
                        <div>
                            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <input
                                type="text"
                                id="role"
                                className="mt-1 block w-full py-2 px-3 rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400"
                                placeholder="Role"
                                value={runtime}
                                onChange={(e) => setRuntime(e.target.value)}

                            />
                        </div>
                        <div>
                            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <input
                                type="text"
                                id="role"
                                className="mt-1 block w-full py-2 px-3 rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400"
                                placeholder="Role"
                                value={Rating}
                                onChange={(e) => setRating(e.target.value)}

                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white rounded-md py-2 px-3 focus:ring focus:ring-opacity-50 focus:ring-blue-400 hover:bg-blue-600"
                            >
                                Update
                            </button>
                        </div>
                        <div>
                            <button


                                type="button"
                                className="w-full bg-blue-500 text-white rounded-md py-2 px-3 focus:ring focus:ring-opacity-50 focus:ring-blue-400 hover:bg-blue-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


