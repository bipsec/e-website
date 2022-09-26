import React from 'react';
import Head from "next/head";
import Link from "next/link";

const Layout = ({title, children}) => {
    return (
        <>
            <Head>
                <title>{title ? title + '- Karukuthi' : 'Karukuthi'}</title>
                <meta name="description" content="Ecommerce Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="flex min-h-screen flex-col justify-between ">
                <header>
                    <nav className="flex h-12 items-center px-4 justify-between shadow-md">
                        <Link href="/">
                            <a className="text-lg font-bold">Karukuthi</a>
                        </Link>
                        <div>
                            <Link href="/cart"><a className="p-2">Cart</a></Link>
                            <Link href="/login"><a className="p-2">Login</a></Link>
                        </div>
                    </nav>
                </header>
                <main className="container m-auto m-auto mt-4">{children}</main>
                <footer className="flex h-10 justify-center items-center shadow-inner">
                    <p>Copyright &copy; 2022 Katukuthi</p>
                </footer>
            </div>
        </>
    );
}

export default Layout;