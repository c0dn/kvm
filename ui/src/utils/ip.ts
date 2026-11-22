export const netMaskFromCidr4 = (cidr: number) => {
  const mask = [];
  let bitCount = cidr;
  for (let i = 0; i < 4; i++) {
    const n = Math.min(bitCount, 8);
    mask.push(256 - Math.pow(2, 8 - n));
    bitCount -= n;
  }
  return mask.join(".");
};

// Tailscale addresses: 100.64.0.0/10 (IPv4) and fd7a:115c:a1e0::/48 (IPv6).
export const isTailnetAddress = (address: string) => {
  const a = address.toLowerCase();
  if (a.startsWith("fd7a:115c:a1e0:")) return true;
  const m = /^100\.(\d{1,3})\.\d{1,3}\.\d{1,3}$/.exec(a);
  return m !== null && Number(m[1]) >= 64 && Number(m[1]) <= 127;
};

// Address field of an ICE candidate attribute:
// "candidate:<foundation> <component> <transport> <priority> <address> <port> typ <type> ..."
export const iceCandidateAddress = (candidate: string) =>
  candidate.replace(/^a=/, "").split(" ")[4] ?? "";
