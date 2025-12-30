// src/utils/api.ts
export interface ApiResponse<T> {
  data: T | null;
  success: boolean;
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
    const json = await response.json().catch(() => ({}));

    return {
      data: json?.data ?? null,
      success: json?.success ?? false,
      status,
    };
  } catch (error) {
    console.error('API POST error:', error);
    return {
      data: null,
      success: false,
      status: 500,
    };
  }
};
