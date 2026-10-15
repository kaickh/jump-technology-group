data "archive_file" "contact" {
  type        = "zip"
  source_file = "${path.module}/dist/contact/index.mjs"
  output_path = "${path.module}/dist/contact.zip"
}

resource "aws_iam_role" "contact" {
  name = "${var.project_name}-contact"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "contact_logs" {
  role       = aws_iam_role.contact.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy" "contact_ses" {
  name = "ses-send"
  role = aws_iam_role.contact.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect   = "Allow"
      Action   = ["ses:SendEmail"]
      Resource = "arn:aws:ses:${var.aws_region}:${data.aws_caller_identity.current.account_id}:identity/${var.ses_from_email}"
    }]
  })
}

resource "aws_lambda_function" "contact" {
  function_name    = "${var.project_name}-contact"
  role             = aws_iam_role.contact.arn
  runtime          = "nodejs20.x"
  handler          = "index.handler"
  filename         = data.archive_file.contact.output_path
  source_code_hash = data.archive_file.contact.output_base64sha256
  timeout          = 10
  memory_size      = 256

  environment {
    variables = {
      CONTACT_TO   = var.contact_to_email
      CONTACT_FROM = var.ses_from_email
    }
  }
}

resource "aws_apigatewayv2_api" "contact" {
  name          = "${var.project_name}-contact"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = [var.allowed_origin]
    allow_methods = ["POST", "OPTIONS"]
    allow_headers = ["content-type"]
    max_age       = 600
  }
}

resource "aws_apigatewayv2_integration" "contact" {
  api_id                 = aws_apigatewayv2_api.contact.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.contact.invoke_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "contact" {
  api_id    = aws_apigatewayv2_api.contact.id
  route_key = "POST /api/contact"
  target    = "integrations/${aws_apigatewayv2_integration.contact.id}"
}

resource "aws_apigatewayv2_stage" "contact" {
  api_id      = aws_apigatewayv2_api.contact.id
  name        = "$default"
  auto_deploy = true

  default_route_settings {
    throttling_burst_limit = 5
    throttling_rate_limit  = 2
  }
}

resource "aws_lambda_permission" "contact" {
  statement_id  = "AllowApiGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.contact.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.contact.execution_arn}/*/*"
}

resource "aws_ses_email_identity" "from" {
  email = var.ses_from_email
}
