unset AWS_SESSION_TOKEN

temp_role=$(aws sts assume-role \
		--role-arn "arn:aws:iam::076923833809:role/circleci_role" \
		--role-session-name "circleci-prod")

export AWS_ACCESS_KEY_ID=$(echo $temp_role | jq .Credentials.AccessKeyId | xargs)
export AWS_SECRET_ACCESS_KEY=$(echo $temp_role | jq .Credentials.SecretAccessKey | xargs)
export AWS_SESSION_TOKEN=$(echo $temp_role | jq .Credentials.SessionToken | xargs)

