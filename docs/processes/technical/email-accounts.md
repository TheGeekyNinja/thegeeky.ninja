---
icon: ":envelope_with_arrow:"
label: Email Accounts 
---
Process to set up email accounts with MXRoute

## Hosting Settings
1. Log into MXRoute admin panel
2. Click the Domain dropdown near the top right and select the domain name you want to manage accounts for
3. In the left menu, expand "E-Mail Manager" and select "E-Mail Accounts"
4. Modify an existing account or click "Create Account" button on the right
5. Enter username (make sure correct domain name is selected)
6. Generate random password for user
7. For E-mail Quota enter "10000"
8. Click "Create Account"

## Email Client Settings
Username/Login: newusername@chosendomain.tld  
Password: Selected password (if you forgot to write it down, edit and generate a new password)  

IMAP Mail Server: 
`mail.chosendomain.tld`  
Connection Security: `STARTTLS`  
Port: `143`
Authentication Type: Normal Password  

SMTP Server: `mail.chosendomain.tld`  
Connection Security: `STARTTLS`  
Port: `587`  
Authentication Type: Normal Password  

Note: Tested and working on Mozilla Thunderbird (Free/Open source) - can test/add more detailed instructions for other clients

(todo)
Webmail Instructions