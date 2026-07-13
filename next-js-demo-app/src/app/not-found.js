import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>This page not found </h1>
            <Link href={"home"}>Go to home page</Link>
        </>
    )
}