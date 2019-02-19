# magnolia-recaptcha-v3
#### Magnolia with Recaptcha v3 based on javascript models.

Use this if you need Recaptcha v3 for Magnolia it's easy to use cause of javascript models. No deployment needed only insert them in to your light-module and modify the file paths and follow the instructions.


##### Instructions:
1. Add the files in the right directories of your light module.
2. Go to /templates/js/formProcessors/addRecaptcha.js change there "ADD YOUR RECAPTCHA V3 KEY HERE" to your secret key.
3. Extend the "formGroupFields" of the form configuration and add the google recaptcha field.
4. Add the public key to the recaptcha component
