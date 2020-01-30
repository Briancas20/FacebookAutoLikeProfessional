//post Reaction On facebook first post
function ttstamp(c) {
	var w = '',
		ttstp, fb_dtsg = c;
	for (var x = 0; x < fb_dtsg.length; x++) {
		w += fb_dtsg.charCodeAt(x);
	}
	ttstp = '2' + w;
	return ttstp;
}

function ufiReaction(comUID, comFBdtsg, pstID, recType, sessID, jazoest) {
	try {
		if (comFBdtsg == undefined) {
			comFBdtsg = document.querySelectorAll("[name='fb_dtsg']")[0].value;
		}
		var xhr = new XMLHttpRequest();
		var timestamp = new Date().getTime();
		var ran = Math.round(Math.random() * (3643990248));
		var t = ttstamp(comFBdtsg);
		var params = "client_id=" + timestamp + ":" + ran;
		params += "&ft_ent_identifier=" + pstID;
		params += "&reaction_type=" + recType;
		params += "&root_id=u_fetchstream_3_a";
		params += "&session_id=" + sessID;
		params += "&source=1";
		params += "&feedback_referrer=/";
		params += "&instance_id=u_fetchstream_3_9";
		params += "&av=" + comUID;


		params += "&ft[tn]=]-R-R";
		params += "&ft[top_level_post_id]=" + pstID;
		params += "&ft[tl_objid]=" + pstID;
		params += "&ft[qid]=";
		params += "&ft[fbfeed_location]=1";
		params += "&ft[insertion_position]=0";
		params += "&__user=" + comUID;
		params += "&__a=1";
		params += "&__dyn=" + sessID + "yBmaomgDxyIGzG85oWq2WiWF3oyeqrWo8ponUKewWhEyfyUnwgUb8aUgDyUJi28cZ4zHz9XDG4XzFEkDWx" + sessID + "SVEiGqexi5-cyXUG49El" + sessID + "9Voybx24o9Esx-um";
		params += "&__req=50";
		params += "&__be=-1";
		params += "&__pc=PHASED:DEFAULT";
		params += "&__rev=4773497";
		params += "&fb_dtsg=" + comFBdtsg;
		params += "&jazoest=" + jazoest;
		params += "&__spin_r=4773497";
		params += "&__spin_b=trunk";
		params += "&__spin_t=" + Math.floor(new Date().getTime() / 1000)

		xhr.open("POST", "/ufi/reaction/?dpr=1", true);

		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


		xhr.send(params);
	} catch (err) {
		console.log("ufiReaction:" + err);
	}
}

function makeSession() {
        var text = "";
        var possible = "0123456789abcdef";

        for (var i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

var sessID = makeSession();

var FBuserID = document.cookie.match(/c_user=(\d+)/)[1];


var fb_dtsg = document.querySelectorAll("[name='fb_dtsg']")[0].value;

var postID = document.querySelectorAll("[name='ft_ent_identifier']")[0].value; // First post ID


var reactionID = "2";// for love, 1 for like, 4 for haha, 3 for wow, 7 for sad, 8 for angry

var jazoest = document.querySelectorAll("[name='jazoest']")[0].value; // First post jazoest value

//Call function to post reaction on first post.
ufiReaction(FBuserID, fb_dtsg, postID, reactionID, sessID, jazoest);
