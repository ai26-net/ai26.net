# AI26 seller intake

Published Tally form: https://tally.so/r/Qo2J7G
Workspace: wzj2g1. Embedded on `/sell-your-data` using the official Tally embed script.

The form collects the business fields from the supplied manifest schema without pre-filling either company’s records.

## Manifest mapping

- Company: legal name, point-of-contact first/last name, work email, role, website/domain, LinkedIn URL and no-LinkedIn checkbox, headquarters country, status, industry, product description.
- Operating history: employee count, years active, peak headcount, languages and historical data date range.
- Services: named multi-select options plus multiline custom service names. Delivery methods are deferred to follow-up and are not collected in this form. Normalize option labels to manifest keys when exporting.
- `schemaVersion`: hidden `manifestSchemaVersion=1` supplied through the form URL.
- `exportedAt`: generate when exporting a manifest; Tally also records submission time.

Tally stores flat answers, not a nested manifest JSON. A manifest exporter is not implemented. No company record uploads or credentials are requested.

## Validation

Required fields, numeric ranges, and multiple service selections were checked in Tally preview using fictional data, without submitting a response. Workforce and customer geographic percentages are deferred to a later call and are not collected in the intake form.

Desk-based employee count is intentionally omitted from intake at the user’s request; only current and peak headcount are collected.
