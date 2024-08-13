export default function CourseRankTemplate() {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 md:mb-0">
                        We Rank the Best Courses on the Web
                    </h1>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            type="text"
                            placeholder="Search Courses"
                            className="py-2 px-4 border border-gray-300 rounded-md"
                        />
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-md">
                            Search
                        </button>
                    </div>
                </div>
                <p className="mt-4 text-gray-600">
                    In the history of modern astronomy,
                    there is probably no greater leap
                    forward than the building and launch of
                    the space telescope known as the Hubble.
                </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-center">
                <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-6 rounded-lg text-white w-full sm:w-80">
                    <h2 className="text-2xl font-semibold">
                        New Classes
                    </h2>
                    <p className="mt-2">
                        In the history of modern astronomy,
                        there is probably no greater leap
                        forward in building and launch.
                    </p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-indigo-400 p-6 rounded-lg text-white w-full sm:w-80">
                    <h2 className="text-2xl font-semibold">
                        Top Courses
                    </h2>
                    <p className="mt-2">
                        In the history of modern astronomy,
                        there is probably no greater leap
                        forward in building and launch.
                    </p>
                </div>
                <div className="bg-gradient-to-r from-teal-500 to-cyan-400 p-6 rounded-lg text-white w-full sm:w-80">
                    <h2 className="text-2xl font-semibold">
                        Full E-Books
                    </h2>
                    <p className="mt-2">
                        In the history of modern astronomy,
                        there is probably no greater leap
                        forward in building and launch.
                    </p>
                </div>
            </div>
        </div>
    );
}
