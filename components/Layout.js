import Head from 'next/head';
const Layout = props => {
    return(
        <div>
            <Head>
                <meta charSet="utf-8" key='meta_utf8' />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" key="meta_viewport" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" href="/static/vendor/animate/animate.css"></link>
                <link rel="stylesheet" type="text/css" href="/static/vendor/css-hamburgers/hamburgers.min.css"></link>
                <link rel="stylesheet" type="text/css" href="/static/vendor/select2/select2.min.css"></link>
                <link rel="stylesheet" type="text/css" href="/static/css/util.css" />
	            <link rel="stylesheet" type="text/css" href="/static/css/main.css"></link>


                <script src="/static/vendor/jquery/jquery-3.2.1.min.js"></script>
	            <script src="/static/vendor/bootstrap/js/popper.js"></script>
	            <script src="/static/vendor/select2/select2.min.js"></script>
	            <script src="/static/vendor/tilt/tilt.jquery.min.js"></script>
                <script >
                    $('.js-tilt').tilt({{
                        scale: 1.1
                    }})
                </script>
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