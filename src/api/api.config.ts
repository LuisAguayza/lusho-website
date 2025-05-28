// src/utils/api.ts
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

export const post = async <T, B = unknown>(
  url: string,
  body: B,
  headers: HeadersInit = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });

    const status = response.status;
    const contentType = response.headers.get('Content-Type') || '';

    if (!response.ok) {
      const errorText =
        contentType.includes('application/json')
          ? (await response.json())?.message || 'Unknown error'
          : await response.text();
      return { data: null, error: errorText, status };
    }

    const data: T =
      contentType.includes('application/json')
        ? await response.json()
        : (await response.text()) as unknown as T;

    return { data, error: null, status };
  } catch (error) {
    console.error('API POST error:', error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 0,
    };
  }
};
