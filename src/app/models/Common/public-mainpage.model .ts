export interface PublicmainPage{
  newsModels: NewsModel[];
  managingComiteeDTOs: ManagingComitees[];
  corouselImage1: string;
  corouselImage2: string;
  corouselImage3: string;
  mainText: string;
  slogan: string;
  rulesRegulation: string | null;
  dayQuote: string;
  logoImage1: string;
  logoImage2: string;
  contactDesc1: string | null;
  contactDesc2: string | null;
  contactLine1: string | null;
  contactLine2: string | null;
  contactLine3: string | null;
  phonenum: string | null;
  faxnum: string | null;
  website: string | null;
  email: string | null;

}
interface NewsModel {
  newsID: number;
  dateofAction: string; // ISO 8601 date string
  newsText: string;
  newsLink: string | null; // Can be null if no link is provided
}
interface ManagingComitees {
  id: number;
  name: string;
  position: string;
  description1: string;
  description2: string;
  imageLocation: string;
  order: number;
  isActive: boolean;
  createdByUserId: number | null;
  addedUser: string | null;
  createdDate: Date | null;
  modifiedByUserId: number | null;
  modifiedUser: string | null;
  modifiedDate: Date | null;
  isDeleted: boolean;
  deletedByUserId: number | null;
  deletedUser: string | null;
  deletedDate: Date | null;
}
