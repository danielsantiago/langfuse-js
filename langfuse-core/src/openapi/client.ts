/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/public/scores": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** @description Add a score to the database, upserts on id */
    post: operations["score_create"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /** CreateScoreRequest */
    CreateScoreRequest: {
      id?: string;
      traceId: string;
      name: string;
      /** Format: double */
      value: number;
      observationId?: string;
      comment?: string;
    };
    /** Score */
    Score: {
      id: string;
      traceId: string;
      name: string;
      /** Format: double */
      value: number;
      observationId?: string;
      /** Format: date-time */
      timestamp: string;
      comment?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  score_create: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateScoreRequest"];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Score"];
        };
      };
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": string;
        };
      };
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": string;
        };
      };
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": string;
        };
      };
      405: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": string;
        };
      };
    };
  };
}
