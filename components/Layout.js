import Head from 'next/head';
const Layout = props => {
    return(
        <div>
            <Head>
                <meta charset="utf-8" key='meta_utf8' />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" key="meta_viewport" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" href="/static/vendor/bootstrap/css/bootstrap.min.css"/>
                <link rel="stylesheet" type="text/css" href="/static/fonts/font-awesome-4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" type="text/css" href="/static/vendor/select2/select2.min.css"></link>
                <link rel="stylesheet" type="text/css" href="/static/css/util.css" />
	            <link rel="stylesheet" type="text/css" href="/static/css/main.css"></link>


                <script src="/static/vendor/jquery/jquery-3.2.1.min.js"></script>
                <script src="/static/vendor/bootstrap/js/popper.js"></script>
	            <script src="/static/vendor/bootstrap/js/bootstrap.min.js"></script>
	            <script src="/static/vendor/select2/select2.min.js"></script>
	            <script src="/static/vendor/tilt/tilt.jquery.min.js"></script>
                <script dangerouslySetInnerHTML={{ __html: `
                    $('.js-tilt').tilt({
                        scale: 1.1
                    })
                ` }} />
	            <script src="/static/js/main.js"></script>
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
