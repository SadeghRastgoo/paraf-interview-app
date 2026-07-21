import { z } from "zod/v4";

export const userVitrinsSchema = z.array(
  z.object({
    id: z.number(),
    role: z.enum([
      "user",
      "retailer",
      "wholesaler",
      "marketer",
      "producer",
      "importer",
      "merchant",
      "distributor",
      "bank",
      "government",
      "institute",
    ]),
    status: z.enum(["active", "inactive"]),
    companyPhones: z.array(z.string()).nullable(),
    companyName: z.string().nullable(),
  }),
);

export const userVitrinSchema = z.object({
  id: z.number(),
  userId: z.number(),
  role: z.enum([
    "user",
    "retailer",
    "wholesaler",
    "marketer",
    "producer",
    "importer",
    "merchant",
    "distributor",
    "bank",
    "government",
    "institute",
  ]),
  typeGuild: z.unknown().nullable(),
  status: z.enum(["active", "inactive"]),
  unionApprovalStatus: z
    .enum(["PENDING", "APPROVED", "REJECTED"])
    .or(z.string())
    .transform((val) => {
      // Transform to uppercase if it's a string
      if (typeof val === "string") {
        return val.toUpperCase() as "PENDING" | "APPROVED" | "REJECTED";
      }
      return val;
    }),
  parafApprovalStatus: z.unknown().nullable(),
  categories: z.unknown().nullable(),
  groupCategories: z.unknown().nullable(),
  groupCategoryChildrens: z.unknown().nullable(),
  businessActivityId: z.number().nullable(),
  cities: z.unknown().nullable(),
  companyPhones: z.array(z.string()).nullable(),
  companyName: z.string().nullable(),
  companyAddress: z.string().nullable(),
  companyEmail: z.string().email().nullable(),
  aboutUs: z.string().nullable(),
  keywords: z.string().nullable(),
  lat: z
    .union([z.number(), z.string()])
    .nullable()
    .transform((val) => (val !== null ? Number(val) : null)),
  long: z
    .union([z.number(), z.string()])
    .nullable()
    .transform((val) => (val !== null ? Number(val) : null)),
  logoId: z.number().nullable(),
  guildId: z.number().nullable(),
  guildName: z.string().nullable(),
  businessLicenseId: z.number().nullable(),
  businessLicenseStatus: z.unknown().nullable(),
  authenticatedVitrin: z.boolean(),
  latestUpdateProducts: z.unknown().nullable(),
  showData: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime().nullable(),
  coverId: z.number().nullable(),
  daysOfWeek: z.record(z.string(), z.unknown()),
  startWorkTime: z.string(),
  endWorkTime: z.string(),
  postalCode: z.string().nullable(),
  trademarkId: z.number().nullable(),
  trademarkStatus: z.unknown().nullable(),
  isGoldenVerified: z.boolean(),
  scores: z.string(),
  logo: z.object({ link: z.string() }).nullable(),
  businessLicense: z.unknown().nullable(),
  guild: z.unknown().nullable(),
  user: z.object({
    roles: z.array(z.string()),
    userType: z.enum(["natural", "legal"]),
    status: z.number(),
    trustLevel: z.array(z.unknown()),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    cityId: z.number(),
    countryId: z.number(),
    scores: z.string(),
    file: z.unknown().nullable(),
    city: z.object({
      id: z.number(),
      name: z.string(),
      locationType: z.string(),
    }),
    country: z.object({
      id: z.number(),
      name: z.string(),
      locationType: z.string(),
    }),
    citiesRow: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        locationType: z.string(),
      }),
    ),
  }),
  cover: z.unknown().nullable(),
  level: z
    .union([z.number(), z.string()])
    .nullable()
    .transform((val) => (val !== null ? Number(val) : null)),
  coins: z
    .union([z.number(), z.string()])
    .nullable()
    .transform((val) => (val !== null ? Number(val) : 0)),
  coinsReceived: z
    .union([z.number(), z.string()])
    .nullable()
    .transform((val) => (val !== null ? Number(val) : 0)),
  coinsEquivalent: z
    .union([z.number(), z.string()])
    .nullable()
    .transform((val) => (val !== null ? Number(val) : 0)),
  hasPendingMission: z.boolean().optional().default(false),
  pendingMissionMessage: z.string().nullable().optional(),
  missionLink: z.string().nullable().optional(),
  businessActivity: z
    .object({
      name: z.string().nullable(),
    })
    .nullable(),
  categoriesRow: z.array(z.unknown()),
  citiesRow: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      locationType: z.string(),
    }),
  ),
});

export type UserVitrinSchema = z.infer<typeof userVitrinSchema>;
export type UserVitrinsSchema = z.infer<typeof userVitrinsSchema>;
