import { AuditEntity } from "./audit-entity.model";

export class Managingcomitee implements AuditEntity {
    id!: number;
    name!: string;
    position!: string;
    Description1!: string;
    Description2!: string;

    isActive!: boolean;
    createdByUserId!: number | null;
    addedUser!: string;
    createdDate!: string | null;
    modifiedByUserId!: number | null;
    modifiedUser!: string;
    modifiedDate!: string | null;
    isDeleted!: boolean;
    deletedByByUserId!: number | null;
    deletedUser!: string;
    deletedDate!: string | null;

    btnString:string=" ";
}
