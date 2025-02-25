import Link from "next/link";

export default function NotFoundPage() {
    return (
        <>
            <h1>This is a Not Found page</h1>
            <Link href={'/'}>Go to home page</Link>
        </>
    )
}