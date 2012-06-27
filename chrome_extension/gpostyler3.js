function GPOStyler3(){
console.log("GPO Styler 3 inited");
this.path = window.location.pathname;
}

GPOStyler3.prototype = {
actionSelector : function() {
switch (this.path) {
case "/src/login.php":
this.loginPageHandler();
break;

case "/src/webmail.php":
case "/src/left_main.php":
this.redirect();
break;

case "/src/compose.php":
this.composePageHandler();
break;

case "/src/right_main.php":
this.mainPageHandler();
break;

default:
this.unknownPageHandler();
break;
}
},

loginPageHandler : function() {
document.body.innerHTML = "<html> <head> <style type='text/css'>
.submit {width: 95px;height:29px;background-color: mediumblue;
background-image: -webkit-linear-gradient(top,mediumblue,mediumblue); background-image: -moz-linear-gradient(top,mediumblue,mediumblue); background-image: -ms-linear-gradient(top,mediumblue,mediumblue); background-image: -o-linear-gradient(top,mediumblue,mediumblue); background-image: linear-gradient(top,mediumblue,mediumblue); color: white;border: 1px solid transparent; border: 1px solid transparent;border-image: initial;-webkit-border-radius: 2px; -moz-border-radius: 2px;border-radius: 2px;cursor: default; font-size: 11px;font-weight: bold;text-align: center; margin-right: 16px;height: 27px;line-height: 27px; min-width: 54px;outline: 0;padding: 0 8px;} </style> <title>IIT Bombay Webmail Login</title> <link href='style.css' rel='stylesheet' type='text/css'/> </head> <body bgcolor='lightsteelblue'> <h1> <img src='iitb_logo.png' width='100' height='100' alt='IITB logo'  />Indian Institute of Technology, Bombay - Webmail</h1> <h2>Login</h2> <br /> <form method='get' action='http://www.gpo.iitb.ac.in/src/login.php'><label> <span>Name</span><input id='name' type='text' name='name' /> </label> <br/> <label> <span>Password</span><input id='password' type='password' name='password' /> </label> <br/><center> <div class='submit'> <a href='http://gpo.iitb.ac.in
/src/webmail.php/'>Login</a></div> </center> </form> </body><body> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><div class='my_wrapper'> <div class='my_left_box'> <font face='Cambria' size='4' color='red' class='allcaps'> <b> Phishing Warning </b><br> 	</font> <font face='Cambria' size='3' color='black'>	<b>-</b>  Do not give your <b>LDAP USERID & PASSWORD</b> to anyone.<br> 	<b>-</b> Computer Center never asks you for such information.<br> <b>-</b> To learn more about <a href=http://www.cc.iitb.ac.in/home/31-articles/8-is-someone-demanding-your-passwords-pishing-mails.html><b><font class='allcaps' color='red'>Phishing</a></font></b> </font>	 <br><br>	<font face='Cambria' size='4' color='red' class='allcaps'><b> Online IT Agreement/Policy </b><br> </font> 	<font face='Cambria' size='3' color='black'> 	<b>-</b> All new students, staff & faculty members must read and accept the online IT agreement/policy.<br> <b>-</b> IT services are made available to users only upon acceptance of the IT undertaking.<br> <b>-</b> It is the individual user's responsibility to read and understand the policy. <br> 	<b>-</b> The IT policy applies uniformly to all users of the Institute and violations will be dealt with strictly. <br>	<b>-</b> To learn more about the <a href=http://www.cc.iitb.ac.in/cgi-bin/policy.cgi><font color='red' class='allcaps'><b>Policy</b></a></font> 	</font></div> <div class='my_right_box'> <font face='Cambria' size='4' color='Black' class='allcaps'>Alternate interfaces for webmail<br> </font>	<font face='Cambria' size='3' color='Black' class='allcaps'> 	<b>- <font color='#517494'><a href=http://imp.iitb.ac.in>IMP</a></font><br> - <font color='#517494'><a href=http://iloha.iitb.ac.in>Ilohamail</a></font><br>     - <font color='#517494'><a href=http://hasty.iitb.ac.in>Hastymail</a></b></font><br> </font>	 <br>	<font face='Cambria' size='4' color='Black' class='allcaps'> Basic documentation about IIT Bombay Webmail <br> </font> 	<font face='Cambria' size='3' color='Black' class='allcaps'>	<b>- <font color='#517494'><a href=http://docs.iitb.ac.in/webmail.tutorial/webmail.tips.html>General FAQs.</a></font><br> - <font color='#517494'><a href=http://docs.iitb.ac.in/webmail.tutorial/squirrelmail.html>information about SquirrelMail.</a></font><br> - <font color='#517494'><a href=http://docs.iitb.ac.in/webmail.tutorial/imp/>Information about IMP Webmail.</a></b></font><br> </font>	<br><font face='Cambria' size='4' color='Black' class='allcaps'>POP & IMAP Access Details <br> </font> 	<font face='Cambria' size='3' color='Black'> <b>- POP Server:</b>   pop.iitb.ac.in Port: 110<br>  <b>- POPS Server:</b>  pop.iitb.ac.in Port: 995<br> <b>- IMAP Server:</b>  imap.iitb.ac.in          Port: 143<br>	<b>- IMAPS Server:</b> imap.iitb.ac.in          Port: 993 <br> <b>- SMTP Server:</b>  smtp-auth.iitb.ac.in    Port: 25</font> <br><br> </div> </div> </body> </html>";
},

redirect : function() {
window.location = "http://gpo.iitb.ac.in/src/right_main.php";
},

composePageHandler: function() {
document.body.innerHTML = "<html> <head> <title>SquirrelMail 1.4.19</title> <frameset rows="95,*"> <frame src="iit.htm" frameborder="0"/> <frameset cols="10%,*"> <frame src="top.htm" frameborder="0"/> <frame src="gpo-compose-rudimentary.htm" frameborder="0"/> </frameset> </frameset> </html>";
},

mainPageHandler : () {

    },

unknownHandler : function() {
var content = document.body.innerHTML;
document.body.innerHTML = header + content + footer;
}
}

var gpostyler3 = new GPOStyler3();
gpostyler3.actionSelector();