import Document, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from "next/document";

type Props = DocumentInitialProps & {
  locale?: string;
};

export default class AppDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext): Promise<Props> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx.locale };
  }

  render() {
    return (
      <Html lang={this.props.locale ?? "uk"}>
        <Head />
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
