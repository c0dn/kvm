const toBoolean = (value: string | undefined) => {
  if (!value) return false;
  return ["1", "true", "yes", "y"].includes(value.toLowerCase().trim());
};
export const CLOUD_API = import.meta.env.VITE_CLOUD_API;

// Self-hosted cloud APIs may use any OIDC provider. Defaults keep the
// upstream Google sign-in endpoint and button.
export const CLOUD_OIDC_PATH = import.meta.env.VITE_CLOUD_OIDC_PATH || "/oidc/google";
export const CLOUD_OIDC_IS_GOOGLE = (import.meta.env.VITE_CLOUD_OIDC_PROVIDER || "google") === "google";

export const CLOUD_BACKWARDS_COMPATIBLE_VERSION =
  import.meta.env.VITE_CLOUD_BACKWARDS_COMPATIBLE_VERSION || "0.5.0";

export const CLOUD_ENABLE_VERSIONED_UI = toBoolean(import.meta.env.VITE_CLOUD_ENABLE_VERSIONED_UI);

export const DOWNGRADE_VERSION = import.meta.env.VITE_DOWNGRADE_VERSION || "0.4.8";

// In device mode, an empty string uses the current hostname (the JetKVM device's IP) as the API endpoint
export const DEVICE_API = "";
