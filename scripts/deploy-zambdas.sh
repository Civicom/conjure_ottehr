#!/bin/bash

cd /opt/conjure_ottehr/packages/telemed-ehr/zambdas
npm run deploy-zambdas dev

cd /opt/conjure_ottehr/packages/telemed-intake/zambdas
npm run deploy-zambdas dev