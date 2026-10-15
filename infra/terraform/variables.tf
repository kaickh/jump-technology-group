variable "aws_region" {
  type        = string
  description = "Region for the bucket, CloudFront origin, API, and SES. ACM for CloudFront is still created in us-east-1."
  default     = "us-east-1"
}

variable "project_name" {
  type    = string
  default = "jump-tech"
}

variable "site_bucket_name" {
  type        = string
  description = "Globally unique name for the private site bucket."
}

variable "contact_to_email" {
  type    = string
  default = "support@jumptechgroup.com"
}

variable "ses_from_email" {
  type        = string
  description = "Verified SES identity used as the sender. Reply-To is the person who wrote in."
  default     = "support@jumptechgroup.com"
}

variable "allowed_origin" {
  type        = string
  description = "Browser origin allowed to POST to the contact API. No trailing slash."
  default     = "http://localhost:3000"
}

variable "domain_name" {
  type        = string
  description = "Apex domain. Leave empty to serve only from the CloudFront domain."
  default     = ""
}

variable "hosted_zone_id" {
  type        = string
  description = "Route 53 zone for domain_name. Required when domain_name is set."
  default     = ""

  validation {
    condition     = var.domain_name == "" || var.hosted_zone_id != ""
    error_message = "hosted_zone_id is required when domain_name is set."
  }
}

variable "price_class" {
  type    = string
  default = "PriceClass_100"
}
