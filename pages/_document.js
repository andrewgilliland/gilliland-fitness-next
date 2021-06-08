import * as React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
// import {extractCritical} from 'emotion-server'

export default class MyDocument extends Document {
  //   static async getInitialProps(ctx: DocumentContext) {
  //     const initialProps = await Document.getInitialProps(ctx)
  //     const styles = extractCritical(initialProps.html)
  //     return {
  //       ...initialProps,
  //       styles: (
  //         <>
  //           {initialProps.styles}
  //           <style
  //             data-emotion-css={styles.ids.join(' ')}
  //             dangerouslySetInnerHTML={{__html: styles.css}}
  //           />
  //         </>
  //       ),
  //     }
  //   }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon-1.ico" />
        </Head>
        <body className="dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
