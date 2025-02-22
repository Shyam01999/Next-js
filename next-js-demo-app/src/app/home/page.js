"use client"
import { usePathname, useSearchParams } from "next/navigation";

function Home() {
    const pathName = usePathname(); //to get the url
    console.log("pathName", pathName);

    const searchParam = useSearchParams();
    console.log("searchParam", searchParam);

    return (
        <h1>This is home page.</h1>
    )
}

export default Home;