declare module 'swagger-ui-express' {
  import { RequestHandler } from 'express';

  export const serve: RequestHandler[];
  export function setup(document?: unknown, customOptions?: unknown): RequestHandler;

  const swaggerUi: {
    serve: typeof serve;
    setup: typeof setup;
  };

  export default swaggerUi;
}

declare module 'swagger-jsdoc' {
  interface SwaggerDefinitionOptions {
    definition: Record<string, unknown>;
    apis: string[];
  }

  function swaggerJsdoc(options: SwaggerDefinitionOptions): Record<string, unknown>;

  export default swaggerJsdoc;
}

declare module 'nodemailer' {
  interface TransportOptions {
    host: string;
    port: number;
    secure?: boolean;
    auth?: {
      user: string;
      pass: string;
    };
  }

  interface MailOptions {
    from?: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
  }

  interface Transporter {
    sendMail(mailOptions: MailOptions): Promise<unknown>;
  }

  function createTransport(options: TransportOptions): Transporter;

  const nodemailer: {
    createTransport: typeof createTransport;
  };

  export { TransportOptions, MailOptions, Transporter, createTransport };
  export default nodemailer;
}
