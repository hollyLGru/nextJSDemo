import Link from "next/link"

const PageNotFound = () => {
    return(
        <div>
            <h1>PAGE NOT FOUND</h1>
            <h3>Link is incorrect.</h3>
            <Link href="/">return home</Link>
        </div>
    )
}

export default PageNotFound