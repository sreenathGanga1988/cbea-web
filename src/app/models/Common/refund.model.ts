import { AuditEntity } from "./audit-entity.model";

export interface Refund extends AuditEntity {
    id: number;
    name:string;
    StaffNoNavigationStaffNo:number|null;
    Nominee:string;
    RefundDate:string|null;
    LastContribution:number|null;
    Amount:number|null;
}
