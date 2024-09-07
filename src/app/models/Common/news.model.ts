
import { AuditEntity } from "./audit-entity.model";

export class news implements AuditEntity{
    isActive!: boolean;
     id!: number;
     dateofaction!:number|null;
     newstext!:string;
     newslink!: string;
     MainPageId!: number|null;
     
     
     addedUser!:string;
     createdByUserId!: number|null;
     createdDate!:string|null;
     deletedByByUserId!: number|null;
     deletedDate!:string|null;
     deletedUser!:string;
     isDeleted!: boolean;
     modifiedByUserId!: null|number;
     modifiedDate!:string|null;
     modifiedUser!: string;

}
