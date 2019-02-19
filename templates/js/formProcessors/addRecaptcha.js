/**
 * Form processor that checks the captcha.
 * @constructor
 */
var Processor = function () {
    var JSONObject = Java.type("org.json.JSONObject");
    var HttpClients = Java.type("org.apache.http.impl.client.HttpClients");
    var HttpPost = Java.type("org.apache.http.client.methods.HttpPost");
    var EntityUtils = Java.type("org.apache.http.util.EntityUtils");
    this.process = function (content, parameters) {
        this._submit(parameters, ctx.getPostedForm())
    };
    this._submit = function (parameters) {
        this.getCaptcha = function (parameters) {
            var httpClient = HttpClients.createDefault();
            var secret = 'ADD YOUR RECAPTCHA V3 KEY HERE';
            var httpPost = new HttpPost('https://www.google.com/recaptcha/api/siteverify?secret=' + secret + '&response=' + parameters["recaptcha-v3"]);
            var response = httpClient.execute(httpPost);
            var entity = response.getEntity();
            var returned_entity = EntityUtils.toString(entity, "utf-8");
            var obj = new JSONObject(returned_entity);
            if (obj.getString("success") && obj.getString("score") > 0.5) {
                return true;
            } else {
                throw new Error("Vermutlich ist dieser User ein Bot!");
            }
        };
        this.getCaptcha(parameters);
    };
};
new Processor();


