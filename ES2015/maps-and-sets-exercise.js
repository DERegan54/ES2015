// Quick Question #1
{1,2,3,4}


// Quick question #2
'ref'


//Quick Question #3
//0 : {Array(3) => true}
//1 : {Array(3)} => false}

//hasDuplicate
const hasDuplicate = array => array.length !== new Set(array).size ? true : false

//vowelCount
function vowelCount(string) {
    function isVowel(char){
        return "aeiou".includes(char)
    }
    const vowelMap = new Map();
    for(let char of string){
        if(isVowel(char)){
            if(vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char) + 1);
            } else {
                vowelMap.set(char, 1);
            }    
        }
    }
    return vowelMap;
}

