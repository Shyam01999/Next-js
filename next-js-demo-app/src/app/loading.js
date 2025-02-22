import Link from "next/link";

export default function Loading() {
    return (
        <>
            <h1>Please wait page loading...</h1>
            <Link href={"home"}>Go to home page</Link>
        </>
    )
}