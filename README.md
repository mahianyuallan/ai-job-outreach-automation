# AI-Powered Job Outreach Automation

## Overview
This project automates the process of sourcing job postings, validating them,
generating AI-powered outreach messages, and saving results to Google Sheets.

The solution is built using n8n (low-code automation) and Google Gemini.

---

## Architecture
1. Scrape job postings from RemoteOK
2. Filter and validate job descriptions
3. Generate personalized outreach messages using an LLM
4. Save results to Google Sheets
5. Run automatically on a schedule

---

## Installation & Setup

### Requirements
- n8n (cloud or self-hosted)
- Google Sheets account
- Google Gemini API key

### Steps
1. Import `automation/nExecutive Assistant Job Outreach Automation.json` into n8n
2. Configure Google Sheets credentials
3. Configure Gemini API credentials
4. Activate the workflow

---

## Customization

### Update Job Search Parameters
- Modify the HTTP Request node (keywords, filters)

### Update LLM Prompt
- Edit the “Message a model” node prompt text

---

## Scheduling
The workflow is scheduled using n8n’s Cron trigger.
See `automation/scheduling.md` for details.

---

## Troubleshooting
- Ensure jobUrl values are unique
- Verify Google Sheets column names match workflow fields
- Check n8n execution logs for failed nodes
