const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
export const WEB3FORMS_ACCESS_KEY = "39b4cff3-84ca-4f45-a602-cd75eb608919" as const;

interface Web3FormsResponse {
  success: boolean;
  message?: string;
  code?: number;
  data?: unknown;
}

export const submitViaWeb3Forms = async (
  payload: Record<string, unknown>
): Promise<Web3FormsResponse> => {
  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data: Web3FormsResponse = await response
      .json()
      .catch(() => ({ success: response.ok }));

    if (!response.ok || data.success === false) {
      const errorMessage =
        typeof data.message === "string"
          ? data.message
          : "Failed to submit form";
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("Failed to submit form");
  }
};
