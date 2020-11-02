import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return ( 
      <Html>
        <Head>
        <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Saifur Rahman, SaifurPro, Saifur703" />

    
    <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />
   

  
    <title>BINDAAS </title>
    
    <link type="text/css" rel="stylesheet" href="assets/css/bootstrap.min.css" />
   
    <link rel="stylesheet" href="assets/css/owl.carousel.css" />
    
    <link rel="stylesheet" href="assets/css/lightbox.min.css" />
    
    <link rel="stylesheet" href="assets/css/jquery-ui-1.12.1.css" />
    
    <link rel="stylesheet" href="assets/css/slicknav.css" />
    
    <link rel="stylesheet" href="assets/css/magnific-popup.css" />
    
    <link rel="stylesheet" href="assets/css/all.css" />
   
    <link type="text/css" rel="stylesheet" href="assets/css/common.css" />
   
    <link type="text/css" rel="stylesheet" href="assets/css/style.css" />
   
    <link type="text/css" rel="stylesheet" href="assets/css/responsive.css" />
        </Head>
        <body> 
          <Main />
          <NextScript />
          <script src="assets/js/jquery-1.12.4.min.js"></script>
   
    <script src="assets/js/jquery-ui-1.12.1.js"></script>
    
    <script src="assets/js/bootstrap.min.js"></script>
  
    <script src="assets/js/owl.carousel.min.js"></script>
    
    <script src="assets/js/jquery.owl-filter.js"></script>
   
    <script src="assets/js/masonry-v4-2-2-min.js"></script>
    
    <script src="assets/js/lightbox.min.js"></script>
   
    <script src="assets/js/jquery.slicknav.js"></script>
   
    <script src="assets/js/scrollIt.js"></script>
   
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
   
    <script src="assets/js/active.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument