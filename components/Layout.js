import Head from 'next/head';
const Layout = props => {
    return(
        <div>
            <Head>
                <meta charset="utf-8" key='meta_utf8' />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" key="meta_viewport" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
                <title key="title">Ciao</title>
            </Head>
            <body style={styles.body}>
                {props.children}
            </body>
        </div>
    )
}

export default Layout;

const styles = {
    body: {
        margin: '0px',
        padding: '0px'
    }
}