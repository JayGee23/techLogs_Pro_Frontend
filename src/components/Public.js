import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Maynard JK. Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Arizona Bay, Maynard JK. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Maynard JK. Repairs<br />
                    462  Hofman Drive<br />
                    Arizona Bay, CA 01123<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Maynard JK</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    )
    return (
        content
    )
}

export default Public