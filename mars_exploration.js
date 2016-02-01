function main() {
    var S = readLine();
    var changes = 0

    for(var idx = 0; idx < S.length; idx ++){
        if(idx % 3 == 0 || idx % 3 == 2){
            if(S[idx]!="S"){
                changes ++
            }
        } else {
            if(S[idx] != "O"){
                changes ++
            }
        }
    }

    console.log(changes)

}
