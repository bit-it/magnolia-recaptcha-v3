<script src="https://www.google.com/recaptcha/api.js?render=${content.captchaSiteKey}"></script>

<input type="hidden" name="${content.controlName!}" id="${content.controlName!}" />

<script>
    grecaptcha.ready(function() {
        grecaptcha.execute('${content.captchaSiteKey}', {action: 'homepage'}).then(function(token) {
            document.getElementById('${content.controlName!}').value = token;
        });
    });
</script>