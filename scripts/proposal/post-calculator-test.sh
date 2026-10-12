#!/usr/bin/env bash
# Posts a sample calculator entry to /api/proposal and prints the answer.
# Usage: scripts/proposal/post-calculator-test.sh [base-url]
set -euo pipefail
BASE="${1:-https://ardncloudsolutions.com}"
echo "Preflight:"
curl -s -o /dev/null -w '  OPTIONS %{http_code}\n' -X OPTIONS "$BASE/api/proposal" \
  -H 'Origin: https://claude.ai' -H 'Access-Control-Request-Method: POST' -H 'Access-Control-Request-Headers: content-type'
echo "Post:"
curl -s -w '\n  POST %{http_code}\n' -X POST "$BASE/api/proposal" -H 'content-type: application/json' -H 'Origin: https://claude.ai' --data @- <<'JSON'
{"reason":"calculator","page":"test: scripts/proposal/post-calculator-test.sh","website":"",
 "calculator":{"client":"Invited","person":"test@invitedclubs.com","scenario":"base","discount":25,"supportPerDollar":1.5,"clubs":140,"fee":4500,
  "systems":[{"name":"Oracle tee-time","group":"Golf","retire":true,"qty":140,"unit":"courses","license":1200000,"support":800000},
             {"name":"Microsoft 365","group":"Office","retire":false,"qty":3000,"unit":"seats","license":400000,"support":0}],
  "totals":{"takenOut":12000000,"kept":400000,"todayPerClub":120000,"afterPerClub":74000,"net":4440000}}}
JSON
echo "Expected: OPTIONS 204, POST 200 with {\"ok\":true,\"stored\":true}. A row for test@invitedclubs.com then exists in proposal_calculator_submissions."
