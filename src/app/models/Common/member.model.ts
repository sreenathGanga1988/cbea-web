import { AuditEntity } from "./audit-entity.model";

export interface Member extends AuditEntity {
    id: number;
    staffno: number|null;
    name: string;
    gender:string;
    dob:string|null;
    doj:string|null;
    dojtoscheme:string|null;
    nominee:string;
    status:string;
    branchname:string;
    designation:string;
    
//audit entity
   isActive: boolean;
    createdByUserId: number | null;
    addedUser: string;
    createdDate: string | null;
    modifiedByUserId: number | null;
    modifiedUser: string;
    modifiedDate: string | null;
    isDeleted: boolean;
    deletedByByUserId: number | null;
    deletedUser: string;
    deletedDate: string | null;  
}