import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Typography, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#9c27b0',
        },
    },
    typography: {
        h4: {
            fontWeight: 700,
        },
    },
});

const StyledContainer = styled(Container)`
  margin-top: 2rem;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
`;

const StyledDataGrid = styled(DataGrid)`
  & .MuiDataGrid-row:hover {
    background-color: #e3f2fd;
  }
  & .MuiDataGrid-columnHeaders {
    background-color: #ddd;
    // color: #ffffff;
    font-weight: bold;
  }
  & .MuiDataGrid-cell {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }
  & .MuiDataGrid-row:nth-of-type(odd) {
    background-color: #fafafa;
  }
`;

const orderHistoryData = [
    {
        "id": "in_1PjuMdHOF4wrSf37OnxQ9OvZ",
        "object": "invoice",
        "account_country": "CA",
        "account_name": "PawCare",
        "account_tax_ids": null,
        "amount_due": 0,
        "amount_paid": 44985,
        "amount_remaining": 0,
        "amount_shipping": 0,
        "application": null,
        "application_fee_amount": null,
        "attempt_count": 1,
        "attempted": true,
        "auto_advance": false,
        "automatic_tax": {
            "enabled": false,
            "liability": null,
            "status": null
        },
        "automatically_finalizes_at": null,
        "billing_reason": "manual",
        "charge": "ch_3PjuWRHOF4wrSf370nqozHzo",
        "collection_method": "charge_automatically",
        "created": 1722739207,
        "currency": "cad",
        "custom_fields": null,
        "customer": "cus_Qb4u7eUy816Oge",
        "customer_address": null,
        "customer_email": "dishaanand2299@gmail.com",
        "customer_name": "dishaanand2299@gmail.com",
        "customer_phone": null,
        "customer_shipping": null,
        "customer_tax_exempt": "none",
        "customer_tax_ids": [],
        "default_payment_method": null,
        "default_source": null,
        "default_tax_rates": [],
        "description": null,
        "discount": null,
        "discounts": [],
        "due_date": null,
        "effective_at": 1722739815,
        "ending_balance": 0,
        "footer": null,
        "from_invoice": null,
        "hosted_invoice_url": "https://invoice.stripe.com/i/acct_1PjsF9HOF4wrSf37/test_YWNjdF8xUGpzRjlIT0Y0d3JTZjM3LF9RYjZaNTREUFA4RHZPUjF2bExSRTZ0RE9xTEdoQjVrLDExMzI4MTMxMA0200hKoqbZfI?s=ap",
        "invoice_pdf": "https://pay.stripe.com/invoice/acct_1PjsF9HOF4wrSf37/test_YWNjdF8xUGpzRjlIT0Y0d3JTZjM3LF9RYjZaNTREUFA4RHZPUjF2bExSRTZ0RE9xTEdoQjVrLDExMzI4MTMxMA0200hKoqbZfI/pdf?s=ap",
        "issuer": {
            "type": "self"
        },
        "last_finalization_error": null,
        "latest_revision": null,
        "lines": {
            "object": "list",
            "data": [
                {
                    "id": "il_1PjuLkHOF4wrSf376paoQEyL",
                    "object": "line_item",
                    "amount": 5998,
                    "amount_excluding_tax": 5998,
                    "currency": "cad",
                    "description": "Goughnuts Tug Interactive Dog Toy: Interactive tug toy for playing with your dog.",
                    "discount_amounts": [],
                    "discountable": true,
                    "discounts": [],
                    "invoice": "in_1PjuMdHOF4wrSf37OnxQ9OvZ",
                    "invoice_item": "ii_1PjuLkHOF4wrSf37ppDJXb4U",
                    "livemode": false,
                    "metadata": {},
                    "period": {
                        "end": 1722739152,
                        "start": 1722739152
                    },
                    "plan": null,
                    "price": {
                        "id": "price_1PjuLkHOF4wrSf37xmpCab5y",
                        "object": "price",
                        "active": true,
                        "billing_scheme": "per_unit",
                        "created": 1722739151,
                        "currency": "cad",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {},
                        "nickname": null,
                        "product": "prod_Qb6YUFgds33QuR",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 5998,
                        "unit_amount_decimal": "5998"
                    },
                    "proration": false,
                    "proration_details": {
                        "credited_items": null
                    },
                    "quantity": 1,
                    "subscription": null,
                    "tax_amounts": [],
                    "tax_rates": [],
                    "type": "invoiceitem",
                    "unit_amount_excluding_tax": "5998"
                },
                {
                    "id": "il_1PjuIIHOF4wrSf37xcTJqRiD",
                    "object": "line_item",
                    "amount": 5998,
                    "amount_excluding_tax": 5998,
                    "currency": "cad",
                    "description": "Goughnuts Tug Interactive Dog Toy",
                    "discount_amounts": [],
                    "discountable": true,
                    "discounts": [],
                    "invoice": "in_1PjuMdHOF4wrSf37OnxQ9OvZ",
                    "invoice_item": "ii_1PjuIHHOF4wrSf37B76dgUlx",
                    "livemode": false,
                    "metadata": {},
                    "period": {
                        "end": 1722738937,
                        "start": 1722738937
                    },
                    "plan": null,
                    "price": {
                        "id": "price_1Pju6kHOF4wrSf37ErO0IVI1",
                        "object": "price",
                        "active": true,
                        "billing_scheme": "per_unit",
                        "created": 1722738222,
                        "currency": "cad",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {},
                        "nickname": null,
                        "product": "prod_Qb6J1qtNK8W0UZ",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 5998,
                        "unit_amount_decimal": "5998"
                    },
                    "proration": false,
                    "proration_details": {
                        "credited_items": null
                    },
                    "quantity": 1,
                    "subscription": null,
                    "tax_amounts": [],
                    "tax_rates": [],
                    "type": "invoiceitem",
                    "unit_amount_excluding_tax": "5998"
                },
                {
                    "id": "il_1Pju6mHOF4wrSf378E7Vh5AE",
                    "object": "line_item",
                    "amount": 5998,
                    "amount_excluding_tax": 5998,
                    "currency": "cad",
                    "description": "Goughnuts Tug Interactive Dog Toy: Interactive tug toy for playing with your dog.",
                    "discount_amounts": [],
                    "discountable": true,
                    "discounts": [],
                    "invoice": "in_1PjuMdHOF4wrSf37OnxQ9OvZ",
                    "invoice_item": "ii_1Pju6kHOF4wrSf370n3gafww",
                    "livemode": false,
                    "metadata": {},
                    "period": {
                        "end": 1722738222,
                        "start": 1722738222
                    },
                    "plan": null,
                    "price": {
                        "id": "price_1Pju6kHOF4wrSf37ErO0IVI1",
                        "object": "price",
                        "active": true,
                        "billing_scheme": "per_unit",
                        "created": 1722738222,
                        "currency": "cad",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {},
                        "nickname": null,
                        "product": "prod_Qb6J1qtNK8W0UZ",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 5998,
                        "unit_amount_decimal": "5998"
                    },
                    "proration": false,
                    "proration_details": {
                        "credited_items": null
                    },
                    "quantity": 1,
                    "subscription": null,
                    "tax_amounts": [],
                    "tax_rates": [],
                    "type": "invoiceitem",
                    "unit_amount_excluding_tax": "5998"
                },
                {
                    "id": "il_1Pju4KHOF4wrSf37e1mVlAE7",
                    "object": "line_item",
                    "amount": 5998,
                    "amount_excluding_tax": 5998,
                    "currency": "cad",
                    "description": "Goughnuts Tug Interactive Dog Toy: Interactive tug toy for playing with your dog.",
                    "discount_amounts": [],
                    "discountable": true,
                    "discounts": [],
                    "invoice": "in_1PjuMdHOF4wrSf37OnxQ9OvZ",
                    "invoice_item": "ii_1Pju4HHOF4wrSf37ru58Kt7D",
                    "livemode": false,
                    "metadata": {},
                    "period": {
                        "end": 1722738069,
                        "start": 1722738069
                    },
                    "plan": null,
                    "price": {
                        "id": "price_1Pju4GHOF4wrSf37jElCOpIV",
                        "object": "price",
                        "active": true,
                        "billing_scheme": "per_unit",
                        "created": 1722738068,
                        "currency": "cad",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {},
                        "nickname": null,
                        "product": "prod_Qb6Gli8GUPEwac",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 5998,
                        "unit_amount_decimal": "5998"
                    },
                    "proration": false,
                    "proration_details": {
                        "credited_items": null
                    },
                    "quantity": 1,
                    "subscription": null,
                    "tax_amounts": [],
                    "tax_rates": [],
                    "type": "invoiceitem",
                    "unit_amount_excluding_tax": "5998"
                },
                {
                    "id": "il_1Pju2uHOF4wrSf375twh3mh9",
                    "object": "line_item",
                    "amount": 5998,
                    "amount_excluding_tax": 5998,
                    "currency": "cad",
                    "description": "Goughnuts Tug Interactive Dog Toy: Interactive tug toy for playing with your dog.",
                    "discount_amounts": [],
                    "discountable": true,
                    "discounts": [],
                    "invoice": "in_1PjuMdHOF4wrSf37OnxQ9OvZ",
                    "invoice_item": "ii_1Pju2qHOF4wrSf37YcGRvS1D",
                    "livemode": false,
                    "metadata": {},
                    "period": {
                        "end": 1722737980,
                        "start": 1722737980
                    },
                    "plan": null,
                    "price": {
                        "id": "price_1Pju2pHOF4wrSf37lCx8soMp",
                        "object": "price",
                        "active": true,
                        "billing_scheme": "per_unit",
                        "created": 1722737979,
                        "currency": "cad",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {},
                        "nickname": null,
                        "product": "prod_Qb6FYURdIeiYej",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 5998,
                        "unit_amount_decimal": "5998"
                    },
                    "proration": false,
                    "proration_details": {
                        "credited_items": null
                    },
                    "quantity": 1,
                    "subscription": null,
                    "tax_amounts": [],
                    "tax_rates": [],
                    "type": "invoiceitem",
                    "unit_amount_excluding_tax": "5998"
                },
                {
                    "id": "il_1Pjto6HOF4wrSf37Kx97NM36",
                    "object": "line_item",
                    "amount": 2999,
                    "amount_excluding_tax": 2999,
                    "currency": "cad",
                    "description": "Goughnuts Tug Interactive Dog Toy: Interactive tug toy for playing with your dog.",
                    "discount_amounts": [],
                    "discountable": true,
                    "discounts": [],
                    "invoice": "in_1PjuMdHOF4wrSf37OnxQ9OvZ",
                    "invoice_item": "ii_1Pjto1HOF4wrSf37cKKMIIIf",
                    "livemode": false,
                    "metadata": {},
                    "period": {
                        "end": 1722737061,
                        "start": 1722737061
                    },
                    "plan": null,
                    "price": {
                        "id": "price_1PjtdVHOF4wrSf37FMbekwxt",
                        "object": "price",
                        "active": false,
                        "billing_scheme": "per_unit",
                        "created": 1722736409,
                        "currency": "cad",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {},
                        "nickname": null,
                        "product": "prod_Qb5pEhmy1e5w5R",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 2999,
                        "unit_amount_decimal": "2999"
                    },
                    "proration": false,
                    "proration_details": {
                        "credited_items": null
                    },
                    "quantity": 1,
                    "subscription": null,
                    "tax_amounts": [],
                    "tax_rates": [],
                    "type": "invoiceitem",
                    "unit_amount_excluding_tax": "2999"
                },
                {
                    "id": "il_1PjtldHOF4wrSf37L7uhGZxM",
                    "object": "line_item",
                    "amount": 2999,
                    "amount_excluding_tax": 2999,
                    "currency": "cad",
                    "description": "Goughnuts Tug Interactive Dog Toy: Interactive tug toy for playing with your dog.",
                    "discount_amounts": [],
                    "discountable": true,
                    "discounts": [],
                    "invoice": "in_1PjuMdHOF4wrSf37OnxQ9OvZ",
                    "invoice_item": "ii_1PjtlXHOF4wrSf37BemBYQc9",
                    "livemode": false,
                    "metadata": {},
                    "period": {
                        "end": 1722736907,
                        "start": 1722736907
                    },
                    "plan": null,
                    "price": {
                        "id": "price_1PjtdVHOF4wrSf37FMbekwxt",
                        "object": "price",
                        "active": false,
                        "billing_scheme": "per_unit",
                        "created": 1722736409,
                        "currency": "cad",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {},
                        "nickname": null,
                        "product": "prod_Qb5pEhmy1e5w5R",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 2999,
                        "unit_amount_decimal": "2999"
                    },
                    "proration": false,
                    "proration_details": {
                        "credited_items": null
                    },
                    "quantity": 1,
                    "subscription": null,
                    "tax_amounts": [],
                    "tax_rates": [],
                    "type": "invoiceitem",
                    "unit_amount_excluding_tax": "2999"
                },
                {
                    "id": "il_1PjtlHHOF4wrSf37dd41na2p",
                    "object": "line_item",
                    "amount": 2999,
                    "amount_excluding_tax": 2999,
                    "currency": "cad",
                    "description": "Goughnuts Tug Interactive Dog Toy: Interactive tug toy for playing with your dog.",
                    "discount_amounts": [],
                    "discountable": true,
                    "discounts": [],
                    "invoice": "in_1PjuMdHOF4wrSf37OnxQ9OvZ",
                    "invoice_item": "ii_1PjtlAHOF4wrSf37rOLskDEt",
                    "livemode": false,
                    "metadata": {},
                    "period": {
                        "end": 1722736884,
                        "start": 1722736884
                    },
                    "plan": null,
                    "price": {
                        "id": "price_1PjtdVHOF4wrSf37FMbekwxt",
                        "object": "price",
                        "active": false,
                        "billing_scheme": "per_unit",
                        "created": 1722736409,
                        "currency": "cad",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {},
                        "nickname": null,
                        "product": "prod_Qb5pEhmy1e5w5R",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 2999,
                        "unit_amount_decimal": "2999"
                    },
                    "proration": false,
                    "proration_details": {
                        "credited_items": null
                    },
                    "quantity": 1,
                    "subscription": null,
                    "tax_amounts": [],
                    "tax_rates": [],
                    "type": "invoiceitem",
                    "unit_amount_excluding_tax": "2999"
                },
                {
                    "id": "il_1Pjtl5HOF4wrSf37dzkZgRJM",
                    "object": "line_item",
                    "amount": 2999,
                    "amount_excluding_tax": 2999,
                    "currency": "cad",
                    "description": "Goughnuts Tug Interactive Dog Toy: Interactive tug toy for playing with your dog.",
                    "discount_amounts": [],
                    "discountable": true,
                    "discounts": [],
                    "invoice": "in_1PjuMdHOF4wrSf37OnxQ9OvZ",
                    "invoice_item": "ii_1PjtkxHOF4wrSf37iMqLPq3G",
                    "livemode": false,
                    "metadata": {},
                    "period": {
                        "end": 1722736871,
                        "start": 1722736871
                    },
                    "plan": null,
                    "price": {
                        "id": "price_1PjtdVHOF4wrSf37FMbekwxt",
                        "object": "price",
                        "active": false,
                        "billing_scheme": "per_unit",
                        "created": 1722736409,
                        "currency": "cad",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {},
                        "nickname": null,
                        "product": "prod_Qb5pEhmy1e5w5R",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 2999,
                        "unit_amount_decimal": "2999"
                    },
                    "proration": false,
                    "proration_details": {
                        "credited_items": null
                    },
                    "quantity": 1,
                    "subscription": null,
                    "tax_amounts": [],
                    "tax_rates": [],
                    "type": "invoiceitem",
                    "unit_amount_excluding_tax": "2999"
                },
                {
                    "id": "il_1PjtdeHOF4wrSf37S5HoZ5iI",
                    "object": "line_item",
                    "amount": 2999,
                    "amount_excluding_tax": 2999,
                    "currency": "cad",
                    "description": "Goughnuts Tug Interactive Dog Toy: Interactive tug toy for playing with your dog.",
                    "discount_amounts": [],
                    "discountable": true,
                    "discounts": [],
                    "invoice": "in_1PjuMdHOF4wrSf37OnxQ9OvZ",
                    "invoice_item": "ii_1PjtdVHOF4wrSf37KvepOr7Z",
                    "livemode": false,
                    "metadata": {},
                    "period": {
                        "end": 1722736409,
                        "start": 1722736409
                    },
                    "plan": null,
                    "price": {
                        "id": "price_1PjtdVHOF4wrSf37FMbekwxt",
                        "object": "price",
                        "active": false,
                        "billing_scheme": "per_unit",
                        "created": 1722736409,
                        "currency": "cad",
                        "custom_unit_amount": null,
                        "livemode": false,
                        "lookup_key": null,
                        "metadata": {},
                        "nickname": null,
                        "product": "prod_Qb5pEhmy1e5w5R",
                        "recurring": null,
                        "tax_behavior": "unspecified",
                        "tiers_mode": null,
                        "transform_quantity": null,
                        "type": "one_time",
                        "unit_amount": 2999,
                        "unit_amount_decimal": "2999"
                    },
                    "proration": false,
                    "proration_details": {
                        "credited_items": null
                    },
                    "quantity": 1,
                    "subscription": null,
                    "tax_amounts": [],
                    "tax_rates": [],
                    "type": "invoiceitem",
                    "unit_amount_excluding_tax": "2999"
                }
            ],
            "has_more": false,
            "total_count": 10,
            "url": "/v1/invoices/in_1PjuMdHOF4wrSf37OnxQ9OvZ/lines"
        },
        "livemode": false,
        "metadata": {},
        "next_payment_attempt": null,
        "number": "9B8DE6E6-0011",
        "on_behalf_of": null,
        "paid": true,
        "paid_out_of_band": false,
        "payment_intent": "pi_3PjuWRHOF4wrSf370PPoxYOO",
        "payment_settings": {
            "default_mandate": null,
            "payment_method_options": null,
            "payment_method_types": null
        },
        "period_end": 1722739207,
        "period_start": 1722739207,
        "post_payment_credit_notes_amount": 0,
        "pre_payment_credit_notes_amount": 0,
        "quote": null,
        "receipt_number": null,
        "rendering": {
            "amount_tax_display": null,
            "pdf": {
                "page_size": "letter"
            }
        },
        "shipping_cost": null,
        "shipping_details": null,
        "starting_balance": 0,
        "statement_descriptor": null,
        "status": "paid",
        "status_transitions": {
            "finalized_at": 1722739815,
            "marked_uncollectible_at": null,
            "paid_at": 1722739815,
            "voided_at": null
        },
        "subscription": null,
        "subscription_details": {
            "metadata": null
        },
        "subtotal": 44985,
        "subtotal_excluding_tax": 44985,
        "tax": null,
        "test_clock": null,
        "total": 44985,
        "total_discount_amounts": [],
        "total_excluding_tax": 44985,
        "total_tax_amounts": [],
        "transfer_data": null,
        "webhooks_delivered_at": 1722739207
    }
];

const columns = [
    { field: 'customer_name', headerName: 'Customer', width: 220 },
    { field: 'amount_due', headerName: 'Amount Due', width: 130, valueFormatter: (value) => `CAD$ ${(value ? value / 100 : 0).toFixed(2)}` },
    { field: 'amount_paid', headerName: 'Amount Paid', width: 130, valueFormatter: (value) => `CAD$ ${(value ? value / 100 : 0).toFixed(2)}` },
    { field: 'currency', headerName: 'Currency', width: 100, valueFormatter: (value) => `${(value || '').toUpperCase()}`},
    { field: 'status', headerName: 'Status', width: 100, valueFormatter: (value) => `${(value || '').toUpperCase()}`},
    { field: 'created', headerName: 'Created', width: 150, valueFormatter: (value) => new Date(value * 1000).toLocaleString() },
    {
        field: 'hosted_invoice_url',
        headerName: 'Invoice URL',
        width: 150,
        renderCell: (params) => (
            <a
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
                href={params.value}
                target="_blank"
                rel="noopener noreferrer"
            >
                <VisibilityIcon color="primary" />
            </a>
        ),
    },
    {
        field: 'invoice_pdf',
        headerName: 'PDF URL',
        width: 150,
        renderCell: (params) => (
            <a
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
                href={params.value}
                target="_blank"
                rel="noopener noreferrer"
            >
                <DownloadIcon color="secondary" />
            </a>
        ),
    },
];

const OrderHistoryTable = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <StyledContainer maxWidth="lg">
                <Typography variant="h4" gutterBottom>
                    Order History
                </Typography>
                <div style={{ height: 500, width: '100%' }}>
                    <StyledDataGrid
                        rows={orderHistoryData}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
            </StyledContainer>
        </ThemeProvider>
    );
};

export default OrderHistoryTable;
