import React, { useState } from "react";
 
export default function Test() {
    const [currentstate, setCurrentState] = useState("");
    const [response, getResponse] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        const data = { currstate: currentstate };
        console.log(data);
        fetch("/api/getcoviddata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) =>
                res.json().then((data) => {
                    let data2 = data.covidcases;
                    getResponse(data2);
                })
            )
 
    }
 
    return (
        <React.Fragment>
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Covid Tracker</h3>
                        <p class="mt-1 text-sm text-gray-600">
                            cases:
                            {response}
                        </p>
                    </div>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit}>
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
 
                                <div>
                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                        Please enter your state:
                                    </label>
                                    <div class="mt-1">
                                        <input type="text" name="state" id="state" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="NC" value={currentstate}
                                            onChange={(e) => setCurrentState(e.target.value)}></input>
                                    </div>
 
                                </div>
 
 
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
