async function AJDSscore(user) {
	if (user.bot) return 50;
	let score = 0;
	if (user.verified) score += 5;
	if (user.avatar != null) score += 5;
	//TODO: Non-simple
	if (user.avatar != null) score += 4;
	if (user.premium_type != 0) score += 8;
	if (user.premium_type == 2) score += 5;
	if (user.flags != 0) score += 4;
	if (user.mfa_enabled) score += 4;
	score += Math.max(0, 4 - Math.floor(user.username.length / 4));
	//Todo: Either a proper score for profanity or we just lose all points for it.
	let scorecard = swearjar.scorecard(user.username);
	let words = 0;
	console.log(scorecard);
	Object.keys(scorecard).forEach(e => {
		console.log(e);
		words += scorecard[e];
	});
	let response = await fetch("https://www.purgomalum.com/service/containsprofanity?text="+encodeURIComponent(user.username));
	isCurse = await response.json();
	if(isCurse && words == 0) words += 4; 
	else if(isCurse) words += 2;
	score += Math.max(0, 6 - words * 2);
	return score;
}