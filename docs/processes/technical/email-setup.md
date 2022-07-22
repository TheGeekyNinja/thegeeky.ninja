---
icon: ":email:"
label: Email Setup 
order: 50
---
Process to set up email hosting with MXRoute

## Hosting Settings
1. Log into MXRoute admin panel
(todo: insert picture)
2. Expand "Account Manager" on the left
3. Click "Domain Setup"
4. Click "Add New" button on the right
5. Enter Domain name and press "Create" button
6. Click "DKIM Keys (ONLY USE THE DKIM KEY HERE)" in the left menu
7. Copy the value for the "x._domainkey" record at the bottom without quote (") marks. Save this for below.

## DNS Settings
6. Log into Cloudflare (or other DNS) and manage DNS settings
7. Add the following DNS Records

#### TXT Records
Name:
```
x._domainkey
```
Value: (Insert DKIM key without quotes here)
Name: `@`
Value:
```
v=spf1 include:mxlogin.com -all
```

#### MX Record 1
Name: @
```
monday.mxrouting.net
```
Priority: 10
#### MX Record 2
Name: @
```
monday-relay.mxrouting.net
```
Priority 20
#### CNAME
Name: mail
```
monday.mxrouting.net
```