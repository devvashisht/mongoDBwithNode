const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  "SG.5E-pbHBKSIy6_-PaaZKB1w.6wQrDr15PYGI1r9GbzAnJh6t4A9iwVjJ5SENX";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "andrew@mead.io",
  from: "andrew@mead.io",
  subject: "This is my first creation!",
  text: "I hope this one actually get to you.",
});
