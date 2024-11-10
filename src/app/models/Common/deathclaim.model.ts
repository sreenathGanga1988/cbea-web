
import { AuditEntity } from "./audit-entity.model";

export interface Deathclaim extends AuditEntity {
    id: number;
    staffno:number|null;
    name: string;
    nominee: string;
    StateId:number|null;
    nomineeRelation:string;
    nomineeidentity:string;
    deathdate: string | null;
    amount:number|null;
    lastcontribution:number|null;
    ddno:number|null;
    dddate:number|null;
    expr1:number|null;
    yearof:number|null;
    designationid:number|null;

    isActive: boolean;
    createdDate:string|null;
    modifiedByUserId: number | null;
    modifiedUser: string;
    modifiedDate: string | null;
    isDeleted: boolean;
    addedUser: string;

}
