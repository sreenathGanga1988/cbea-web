
import { AuditEntity } from "./audit-entity.model";

export interface Quotes extends AuditEntity {
    id: number;
    Day:number;
    MonthCode:number;
    monthname:string;
    ToDayQuote:string;
   

    
    isActive: boolean;
    isDeleted: boolean;
    createdByUserId: number | null;
    addedUser: string;
    createdDate: string | null;
    modifiedByUserId: number | null;
    modifiedUser: string;
    modifiedDate: string | null;
    
    deletedByByUserId: number | null;
    deletedUser: string;
    deletedDate: string | null;

    
    
}
