import Head from 'next/head';
const Layout = props => {
    return(
        <div>
            <Head>
                <meta charset="utf-8" key='meta_utf8' />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" key="meta_viewport" />
                <title key="title">Ciao</title>
            </Head>
            {props.children}
        </div>
    )
}

export default Layout;