async function fetchUserData() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/users');

        const result = await apiResponse.json();

        return result.users
    }
    catch (error) {
        console.log("Error while fetching data", error)
    }
}

export default async function ServerSideDataFetch() {
    const listOfUsers = await fetchUserData();
    
    return (
        <div className="h-10">
            <h1>Server side data fetching: User List page</h1>
            {
                listOfUsers && listOfUsers.map((item, index) => {
                    return (
                        <div>
                            <img src={item.image} alt="Image not available" />
                            Name : {item.firstName} {item.lastName}
                        </div>
                    )
                })
            }
        </div>
    )
}