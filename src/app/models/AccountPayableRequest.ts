export class AP_RequestData {
    account_payables_request: AccountPayablesRequests;
    ap_order_details_header?: AP_OrderDetailsHeader;
    ap_order_details_items_list?: AP_OrderDetailsItems[];
    ap_request_details?: APRequestDetails;
    beneficiary_details?: BeneficiaryDetails;
    beneficiary_invoice_details?: BeneficiaryInvoiceDetails;
    supporting_documents?: SupportingDocuments;
}
export class AccountPayablesRequests {
    ap_request_id?: number;
    company_id?: string;
    beneficiary_details_id?: number;
    beneficiary_invoice_details_id?: number;
    supporting_documents_id?: number;
    ap_order_details_header_id?: number;
    ap_request_details_id?: number;
}
export class AP_OrderDetailsHeader {
    ap_order_details_header_id?: number;
    ap_request_id?: number;
    delivery_due_date?: string | null;
    po_id?: string;
    project_instructions?: string;
    project_implementation_duration?: string;
    project_site_address?: string;
    warranty_included?: boolean;
    warranty_duration?: string;
    quality_certifications?: string;
    safety_requirements?: string;
    other_conditions?: string;
    product_specification_documents?: string;
    other_documents?: string;
}
export class AP_OrderDetailsItems {
    ap_order_details_item_id?: number;
    ap_order_details_header_id?: number;
    item_name?: string;
    item_part_number?: string;
    item_description?: string;
    unit_of_measurement?: string;
    quantity?: number;
    commodity_type?: string;
    item_specs?: string;
    preferred_brand?: string;
    preferred_country_of_origin?: string;
    notes?: string;
}
export class APRequestDetails {
    ap_request_details_id?: number;
    ap_request_id?: number;
    ap_request_status?: string;
    ap_settelment_date?: string;
    mediation_fees?: number;
    sourcing_fees?: number;
    settlement_value?: number;
    chosen_payment_option?: number;
}
export class BeneficiaryDetails {
    beneficiary_details_id?: number;
    ap_request_id?: number;
    is_ots?: boolean;
    beneficiary_name?: string;
    beneficiary_address?: string;
    beneficiary_tax_id?: string;
    beneficiary_commercial_register?: number;
    beneficiary_contact_name?: string;
    beneficiary_contact_number?: string;
    beneficiary_contact_email?: string;
    beneficiary_bank?: number | null;
    beneficiary_bank_iban?: string;
}
export class BeneficiaryInvoiceDetails {
    beneficiary_invoice_details_id?: number;
    ap_request_id?: number;
    customer_invoice_number?: string;
    total_invoice_value?: number;
    total_invoice_value_includes_vat?: boolean;
    pay_to_beneficiary_due_date?: string;
    total_value_to_be_paid_to_beneficiary?: number;
}
export class SupportingDocuments {
    supporting_documents_id?: number;

    ap_request_id?: number;
    po_file_Data?: string;
    po_file_name?: string;
    po_file_type?: string;

    invoice_file_data?: string;
    invoice_file_name?: string;
    invoice_file_type?:string;

    email_confirmation_file_data?: string;
    email_confirmation_file_name?: string;
    email_confirmation_file_type?: string;
}