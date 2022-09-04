
function group1(abc) {
    document.getElementById('group1').innerHTML =abc;

}

function group2(abc){
    document.getElementById('group2').innerHTML = abc
}

function group3(abc){
    document.getElementById('group3').innerHTML = abc
}

function showWord(){
    let word1 = document.getElementById('group1').innerHTML;
    let word2 = document.getElementById('group2').innerHTML;
    let word3 = document.getElementById('group3').innerHTML;
    if(word1=='A'  & word2=='D' & word3=='G'){
        document.getElementById('result').innerHTML = 'Additional Director General';
    }
    else if(word1=='B' & word2=='D' & word3=='G'){
        document.getElementById('result').innerHTML = 'Batten\'s Disease Gene'
    }
    else if(word1=='C' & word2=='D' & word3=='G'){
        document.getElementById('result').innerHTML = 'Congenital disorders of glycosylation'
    }
    else if(word1=='A' & word2=='E' & word3=='G'){
        document.getElementById('result').innerHTML = 'Advanced Entertainment Game.'
    }
    else if(word1=='C' & word2=='F' & word3=='I'){
        document.getElementById('result').innerHTML = 'cost, freight, and insurance'
    }
    else if(word1=='B' & word2=='E' & word3=='H'){
        document.getElementById('result').innerHTML = ' Bulgarian Energy Holding'
    }
    else if(word1=='B' & word2=='F' & word3=='I'){
        document.getElementById('result').innerHTML = 'Federal Bureau of Investigation'
    }
    else{
        document.getElementById('result').innerHTML = 'Word not Found'
    }

}