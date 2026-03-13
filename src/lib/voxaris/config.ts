// Voxaris integration feature flags
// Set to true when Voxaris components are ready to deploy

export const voxarisConfig = {
  enabled: false,
  vface: {
    enabled: false,
    pages: ["consultation", "services"] as const,
  },
  vteams: {
    enabled: false,
    phone: process.env.NEXT_PUBLIC_PHONE,
  },
  afterHoursMode: false,
} as const;
