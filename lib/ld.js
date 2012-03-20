exports.computeDistance = function(str1, str2) {
	var i, j, 
		len1 = str1.length,
		len2 = str2.length,
	    matrix = new Array(len1+1);

	for (i = 0; i <= len1; i++) {
		matrix[i] = new Array(len2+1);
		matrix[i][0] = i;
	}
	for (j = 0; j <= len2; j++) {
		matrix[0][j] = j;
	}

	for (j = 1; j <= len2; j++) {
		for(i = 1; i <= len1; i++) {
			if (str1.charAt(i-1) === str2.charAt(j-1)) {
				matrix[i][j] = matrix[i-1][j-1];
			} else {
				matrix[i][j] = Math.min(
					matrix[i-1][j] + 1,
					matrix[i][j-1] + 1,
					matrix[i-1][j-1] + 1
				);
			}
		}
	}
	
	return matrix[len1][len2];	
};