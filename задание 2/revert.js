export function revertString(str)
{
	
	let result;
	if(typeof(str) == "number"){
		str = String(str)
		result = str.split('').reverse().join('');
		result = Number(result);		
	}
	else if(typeof(str) == "string")
		result = str.split('').reverse().join('');
	else
		return flase;


	return result;
}
