export type VenueType = 'club' | 'lounge'
export type LoungeRegion = '청담' | '압구정 로데오'

export interface Venue {
  id: string
  type: VenueType
  name: string
  nameEn: string
  location: string
  region?: LoungeRegion
  thumbnail: string
  heroImage: string
  description: string
  features: string[]
  minAge: number
  dressCode: string
  tablePrice: string
  guestFee: string
  operatingHours: string
  instagram?: string
  gallery?: string[]
  faqs: FAQ[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface BookingFormData {
  type: 'table' | 'guest'
  date: string
  venue: string
  name: string
  phone: string
  partySize: number
  message?: string
}
