function memo(num){

	memo.answers = memo.answers || {};
	
	if(!memo.answers[num]){
		memo.answers[num] = 'processed';
	}

	return memo.answers[num];
	
}