
// Returns a date string of the form: Day, Month DD,YYYY
// (e.g. Sunday, September 27, 1998)
// method defined on class Date.

//----- getLongDateString ---------------------------------------------

function getLongDateString()
{
	monthNames = new Array(
	  "January",  "February", "March",    "April",
	  "May",       "June",    "July",     "August",
	  "September", "October", "November", "December"
	);
	dayNames   = new Array(
	  "Sunday",   "Monday", "Tuesday", "Wednesday",
	  "Thursday", "Friday", "Saturday"
	);

	dayOfWeek   = this.getDay();
	day         = dayNames[dayOfWeek];
	dateOfMonth = this.getDate();
	monthNo     = this.getMonth();
	month       = monthNames[monthNo];
	year        = this.getYear();

	if( year < 2000 ){
	  year = year + 1900;
	}

	dateStr = day + ", " + month + " "+ dateOfMonth + ", " + year;

	return dateStr;
} // getLongDateString

// register the method in the class Date

Date.prototype.getLongDateString=getLongDateString;

//----- DocDate -------------------------------------------------------

//return the document modification date as a string

function DocDate()
{
	DateTimeStr = document.lastModified;
	secOffset   = Date.parse( DateTimeStr );

	if( secOffset == 0 || secOffset == null ){ // Opera3.2
	  dateStr = "Unknown";
	} else {
	  aDate = new Date();
	  aDate.setTime( secOffset );
	  datestr = aDate.getLongDateString();
	}

	return dateStr;
} // DocDate

//-- functions to provide a UTC Clock
//-- add to webpage via:
//--   <body onload="UTCTime()"><div id="clockutc"></div></body>
//-- chris KB3CS  22-Jun-2011

function UTCTime()
{
    var today = new Date();
    var d  = today.getUTCDate();
    var mn = today.getUTCMonth();
    var y = today.getUTCFullYear();
    var h = today.getUTCHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var month = new Array(
			  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
			  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			  );

    // add a zero in front of digit<10
    d = padDigit(d);
    h = padDigit(h);
    m = padDigit(m);
    s = padDigit(s);

    var clockstr = y+"-"+month[mn]+"-"+d+"&nbsp;&nbsp;&nbsp;<br>"
    clockstr = clockstr+h+":"+m+":"+s+"&nbsp;UTC&nbsp;&nbsp;&nbsp;";

    document.getElementById('clockutc').innerHTML = clockstr;

    t = setTimeout('UTCTime()',500); // update every 500msec
}

function padDigit(i)
{
    if (i < 10)	{
	i = "0" + i;
    }
    return i;
}

//-- function to provide email address obfuscation
//-- to confound address-scraping spambots
//-- chris KB3CS  22-Jun-2011

function eaddr ( name, acct, server, dotname, subject )
{
    var prefix = "ma" + "il" + "to";
    var target = "ta" + "rget" + String.fromCharCode(61) + '"_blank"';
    var hr = "hr" + "ef" + String.fromCharCode(61);
    var e = acct + String.fromCharCode(64) + server + String.fromCharCode(46) + dotname;
    if (subject.length > 0) {
	var s = "?" + "subject" + String.fromCharCode(61) + escape( subject );
    }
    else {
	var s = "";
    }
    var elink = prefix + ":" + e + s;
    var ltext = "<a " + target + hr + '"' + elink + '">' + name + "</a>";

    document.write( ltext );
}

//-- function to provide phone number obfuscation
//-- to confound those damn data-scrounging spambots
//-- chris KB3CS  26-Apr-2012

function pnumb ( acode, exchn, pndigits )
{
    var ntext = acode + "-" + exchn + "-" + pndigits;

    document.write( ntext );
}
