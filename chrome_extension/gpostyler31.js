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
},

redirect : function() {
window.location = "http://gpo.iitb.ac.in/src/right_main.php";
},

composePageHandler: function() {
document.body.innerHTML = "<html> <head> <title>Compose</title> <link href='style1.css' rel='stylesheet' type='text/css'/> </head> <body> <h2>IIT Bombay</h2> <h3>SquirrelMail</h3> <div id='left'> <table align='center'> <br /> <tr><td class='button'><a href='http://gpo.iitb.ac.in/src/compose.php?mailbox=INBOX&startMessage=1\'>COMPOSE</a> </td></tr> <tr><td><a href='http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX\'>Inbox</a></td></tr> <tr><td><a href='http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Sent\'>Sent</a></td></tr> <tr><td><a href='http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Drafts\'>Drafts</a></td></tr> <tr><td><a href='http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Spam\'>Spam</a></td></tr> <tr><td><a href='http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Trash\'>Trash</a></td></tr> <tr><td><a href='#\'>Folders</a></td></tr> </table> </div> <div id='right'> <form name='compose' method='post' action='compose.php' enctype='multipart/form-data'> <input type='hidden' name='startMessage' value='1'>  <input type='hidden' name='session' value='2'>  <input type='hidden' name='passed_id' value=''> <table border='0'> <tr> <td> To:</td><td> <input type='text' name='send_to' size='70' name='reciever'/></td> </tr><tr> <td> Cc:</td><td> <input type='text' name='send_to_cc' size='70' name='other-cpy'/></td> </tr><tr> <td> Bcc:</td><td> <input type='text' name='send_to_bcc' size='70' name='other-bcpy'/></td> </tr><tr> <td> Subject:</td><td> <input type='text' name='subject' size='70' name='subject'/></td> </tr> </table> <br /> <table border='0'> <tr> <td> Priority:</td><td colspan='6'> <select name='priority'> <option>Normal</option> <option>Urgent</option> </select> Receipt: <input type='checkbox' name='when-to' id='p1'> <label for='p1'>On Read</label> <input type='checkbox' name='when-to' id='p2'> <label for='p2'>On Delivery</label></td> </tr> </table> <br /> <table> <tr> <td> <input type='submit' class='submit' name='sigappend'value='Signature'>  <input type='submit' class='submit' name='html_addr_search' value='Addresses'> </td></tr></table> <table border='0'> <tr> <td> <textarea name='message' rows='15' cols='145'></textarea></td> </tr></table> <center> <input type='submit' value='Send' name='send' class='submit'> <input type='submit' value='Save in Drafts' class='submit'> </center> <table> <tr> <td valign='middle' bgcolor='silver'> <input type='hidden' name='MAX_FILE_SIZE' value='8388608'> <input name='attachfile' size='48' type='file'>    &nbsp;&nbsp; <input type='submit' name='attach' value='Add'>   (max.&nbsp;8<small>&nbsp;M</small>)   </td>  </tr> </table>  </form> </div> </body> </html>";
},

mainPageHandler : function() {
 
		var mail_table=document.getElementsByTagName("table")[7].getElementsByTagName("tr");
		var mail_data=new Array();
		for(i in mail_table)
		{
			if(i==0)
			{
				var cols=new Array();
				for(j in mail_table[i].getElementsByTagName("td"))
				{
					cols[j]=mail_table[i].getElementsByTagName("td")[j];
				}
				mail_data[i]=cols;
			}
			else if ((i%2)==1)
			{
				var c=i;c++;c=c/2;
				var cols=new Array();
				for(j in mail_table[i].getElementsByTagName("td"))
				{
					cols[j]=mail_table[i].getElementsByTagName("td")[j];
				}
				mail_data[c]=cols;
			}
		}

		for(i in mail_data)
		{
			if(i==0){}
			else
			{
				if(mail_data[i][1].getElementsByTagName("b").length==0)
					mail_data[i-1][0]="R";
				else
					mail_data[i-1][0]="U";

				mail_data[i-1][1]=mail_data[i][1].innerText;//sender
				mail_data[i-1][2]=mail_data[i][2].innerText;//time
				mail_data[i-1][3]=mail_data[i][4].innerHTML;//Subject
				mail_data[i-1][4]=mail_data[i][0].innerHTML;//Checkbox
			}
		}

		console.log(mail_data);

		
document.body.innerHTML = "<html> <head> <title>Compose</title> <link href='style1.css' rel='stylesheet' type='text/css'/> </head> <body> <h2>IIT Bombay</h2> <h3>SquirrelMail</h3> <div id='left'> <table align='center'> <br /> <tr><td class='button'><a href='http://gpo.iitb.ac.in/src/compose.php?mailbox=INBOX&startMessage=1\'>COMPOSE</a> </td></tr> <tr><td><a href='http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX\'>Inbox</a></td></tr> <tr><td><a href='http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Sent\'>Sent</a></td></tr> <tr><td><a href='http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Drafts\'>Drafts</a></td></tr> <tr><td><a href='http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Spam\'>Spam</a></td></tr> <tr><td><a href='http://gpo.iitb.ac.in/src/right_main.php?PG_SHOWALL=0&sort=0&startMessage=1&mailbox=INBOX.Trash\'>Trash</a></td></tr> <tr><td><a href='#\'>Folders</a></td></tr> </table> </div> <div id='right'> <table border='0' width='100%' cellpadding='0' cellspacing='0'><tbody><tr><td><table border='0' width='100%' cellpadding='1' cellspacing='0'><tbody><tr bgcolor='#dcdcdc'><td align='left'><table bgcolor='#ffffff' border='0' width='100%' cellpadding='1' cellspacing='0'><tbody><tr><td align='left'><font color='#ababab'>Previous</font>&nbsp;|&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=16&amp;mailbox=INBOX'>Next</a>&nbsp;|&nbsp;1&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=16&amp;mailbox=INBOX'>2</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=31&amp;mailbox=INBOX'>3</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=46&amp;mailbox=INBOX'>4</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=61&amp;mailbox=INBOX'>5</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=76&amp;mailbox=INBOX'>6</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=91&amp;mailbox=INBOX'>7</a>&nbsp;...&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=451&amp;mailbox=INBOX'>31</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=466&amp;mailbox=INBOX'>32</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=481&amp;mailbox=INBOX'>33</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=496&amp;mailbox=INBOX'>34</a>&nbsp;|&nbsp;<a href='right_main.php?PG_SHOWALL=1&amp;use_mailbox_cache=1&amp;startMessage=1&amp;mailbox=INBOX'>Show All</a>&nbsp;|&nbsp;<script language='JavaScript' type='text/javascript'> <\!--  function CheckAllINBOX() {   for (var i = 0; i < document.FormMsgsINBOX.elements.length; i++) {     if(document.FormMsgsINBOX.elements[i].type == 'checkbox'){       document.FormMsgsINBOX.elements[i].checked =         !(document.FormMsgsINBOX.elements[i].checked);     }   } } //--\> <\/script><a href='javascript:void(0)' onclick='CheckAllINBOX();'>Toggle All</a> </td> <td align='right'>Viewing Messages: <b>1</b> to <b>15</b> (501 total)</td> </tr> </tbody></table> </td> </tr> </tbody></table> </td></tr><tr><td height='5' bgcolor='#ffffff'></td></tr><tr>  <td align='left'> <table bgcolor='#ababab' border='0' width='100%' cellpadding='1' cellspacing='0'> <tbody><tr><td><table bgcolor='#dcdcdc' border='0' width='100%' cellpadding='1' cellspacing='0'> <tbody><tr><td align='left' nowrap=''><small>Move Selected To:&nbsp; </small></td> <td align='right' nowrap=''><small>Transform Selected Messages:&nbsp; </small></td> </tr> <tr>  <td align='left' valign='middle' nowrap=''>          <small>&nbsp;<tt><select name='targetMailbox'><option value='INBOX'>INBOX</option> <option value='INBOX.Drafts'>&nbsp;&nbsp;Drafts</option> <option value='INBOX.Drafts.2011.08'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;08</option> <option value='INBOX.Drafts.2011.10'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</option> <option value='INBOX.Drafts.2011.11'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11</option> <option value='INBOX.Drafts.2011.12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12</option> <option value='INBOX.Drafts.2012.02'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;02</option> <option value='INBOX.Drafts.2012.03'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03</option> <option value='INBOX.msgs-seen'>&nbsp;&nbsp;msgs-seen</option> <option value='INBOX.Spam'>&nbsp;&nbsp;Spam</option> <option value='INBOX.Trash'>&nbsp;&nbsp;Trash</option> <option value='INBOX.Sent'>&nbsp;&nbsp;Sent</option>          </select></tt>&nbsp;<input type='submit' name='moveButton' value='Move'> <input type='SUBMIT' name='attache' value='Forward'>       </small></td> <td align='right' nowrap=''> <input type='SUBMIT' name='markRead' value='Read'> <input type='SUBMIT' name='markUnread' value='Unread'> <input type='SUBMIT' name='delete' value='Delete'>&nbsp; <input type='hidden' name='location' value='/src/right_main.php?PG_SHOWALL=0&amp;sort=0&amp;startMessage=1&amp;mailbox=INBOX'></td>    </tr> </tbody></table></td></tr></tbody></table></td></tr> <tr><td height='5' bgcolor='#ffffff'></td></tr><tr><td>"+mail_data+(c+"</tbody></table></details></div>")+"</td></tr></tbody></table></td></tr><tr><td height='5' bgcolor='#ffffff' colspan='1'></td></tr> <tr><td><table bgcolor='#ababab' width='100%' border='0' cellpadding='1' cellspacing='0'><tbody><tr><td><table bgcolor='#ffffff' width='100%' border='0' cellpadding='1' cellspacing='0'><tbody><tr><td><font color='#ababab'>Previous</font>&nbsp;|&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=16&amp;mailbox=INBOX'>Next</a>&nbsp;|&nbsp;1&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=16&amp;mailbox=INBOX'>2</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=31&amp;mailbox=INBOX'>3</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=46&amp;mailbox=INBOX'>4</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=61&amp;mailbox=INBOX'>5</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=76&amp;mailbox=INBOX'>6</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=91&amp;mailbox=INBOX'>7</a>&nbsp;...&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=451&amp;mailbox=INBOX'>31</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=466&amp;mailbox=INBOX'>32</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=481&amp;mailbox=INBOX'>33</a>&nbsp;<a href='right_main.php?use_mailbox_cache=1&amp;startMessage=496&amp;mailbox=INBOX'>34</a>&nbsp;|&nbsp;<a href='right_main.php?PG_SHOWALL=1&amp;use_mailbox_cache=1&amp;startMessage=1&amp;mailbox=INBOX'>Show All</a>&nbsp;|&nbsp;<script language='JavaScript' type='text/javascript'> <\!--  function CheckAllINBOX() {   for (var i = 0; i < document.FormMsgsINBOX.elements.length; i++) {     if(document.FormMsgsINBOX.elements[i].type == 'checkbox'){       document.FormMsgsINBOX.elements[i].checked =         !(document.FormMsgsINBOX.elements[i].checked);     }   } } //--\> <\/script><a href='javascript:void(0)' onclick='CheckAllINBOX();'>Toggle All</a> </td> <td align='right'>Viewing Messages: <b>1</b> to <b>15</b> (501 total)</td> </tr> </tbody></table> </td> </tr> </tbody></table> </td></tr> <tr width='100%'><td><p align='right'><input type='submit' name='archiveButton' value='Archive'></p></td></tr></tbody></table></div> </body> </html>" ; },

unknownHandler : function() {
var content = document.body.innerHTML;
document.body.innerHTML = header + content + footer;
}
}

var gpostyler3 = new GPOStyler3();
gpostyler3.actionSelector();
