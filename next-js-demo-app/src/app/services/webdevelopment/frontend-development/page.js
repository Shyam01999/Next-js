import { redirect } from "next/navigation";

function FrontendDevelopment() {

    const user = null;

    if(user == null) redirect("/services/webdevelopment")
    return (
        <h1>This is FrontendDevelopment page.</h1>
    )
}

export default FrontendDevelopment; 