import { TursoRequest } from '@/business-logic';
import { createClient } from '@libsql/client/web';

export const turso = createClient({
  url: import.meta.env.VITE_TURSO_DATABASE_URL,
  authToken: import.meta.env.VITE_TURSO_AUTH_TOKEN,
});

export function tursoV2(requests:TursoRequest[]):Promise<Response> {
  return fetch(`${import.meta.env.VITE_TURSO_DATABASE_URL_V2}/v2/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TURSO_AUTH_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({requests})
  });
}