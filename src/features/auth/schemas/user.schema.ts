import { z } from "zod/v4";

export const userProfileSchema = z.object({
  roles: z.array(z.string()),
  userType: z.enum(["natural", "legal"]),
  status: z.number(),
  trustLevel: z.array(z.unknown()),

  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  nationalCode: z.string(),
  birthDate: z.string().datetime(),

  latestUpdateExcel: z.unknown().nullable(),
  userUpdateExcelId: z.number().nullable(),
  latestUpdateProducts: z.unknown().nullable(),

  lastVisit: z.string().datetime(),
  affiliateCode: z.string().nullable(),

  phone: z.string(),
  email: z.string().email(),

  gender: z.enum(["male", "female"]),

  reasonChangeStatus: z.string().nullable(),

  iranianAuthStatus: z.boolean(),
  verifiedEmail: z.boolean(),

  statusStore: z.string(),

  subscriptionExpiresAt: z.string().datetime(),

  defaultRole: z.string(),

  faceValidationStatus: z.unknown().nullable(),
  nationalIdCardStatus: z.unknown().nullable(),

  coins: z.string(),
  scores: z.string(),

  defaultLangId: z.number(),
  defaultCurrencyId: z.number(),

  fileId: z.number().nullable(),
  file: z.unknown().nullable(),

  city: z.object({
    id: z.number(),
    name: z.string(),
    locationType: z.string(),
  }),

  country: z.object({
    id: z.number(),
    name: z.string(),
    currency: z.object({
      id: z.number(),
      unit: z.string(),
      name: z.string(),
      symbol: z.string(),
      currencyPrecision: z.number(),
      priority: z.number(),
      status: z.string(),
      countryId: z.number(),
    }),
  }),

  faceValidationPicture: z.unknown().nullable(),
  nationalIdCardPicture: z.unknown().nullable(),

  level: z.object({
    id: z.number(),
    name: z.string(),
    scores: z.string(),
    status: z.boolean(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    deletedAt: z.string().datetime().nullable(),
    file: z.object({
      id: z.number(),
      key: z.string(),
      mimeType: z.string(),
      size: z.string(),
      link: z.string(),
      type: z.string(),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
      deletedAt: z.string().datetime().nullable(),
    }),
  }),

  defaultLang: z.object({
    status: z.boolean(),
    isDefault: z.boolean(),
    id: z.number(),
    name: z.string(),
    code: z.string(),
    flag: z.string(),
    direction: z.enum(["ltr", "rtl"]),
    calendar: z.string(),
    semaphore: z.unknown().nullable(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    deletedAt: z.string().datetime().nullable(),
  }),

  defaultCurrency: z.object({
    id: z.number(),
    unit: z.string(),
    name: z.string(),
    symbol: z.string(),
    slug: z.string(),
    currencyPrecision: z.number(),
    priority: z.number(),
    status: z.string(),
    countryId: z.number().nullable(),
    logoId: z.number().nullable(),
    show: z.boolean(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime().nullable(),
    deletedAt: z.string().datetime().nullable(),
  }),
});

export type UserProfileSchema = z.infer<typeof userProfileSchema>;
