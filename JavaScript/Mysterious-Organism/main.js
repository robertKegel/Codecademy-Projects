// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// pAequor Factory function
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,

    //.mutate() - change random DNA base, then returns dna
    mutate() {
      let randomIndex = Math.floor(Math.random() * dna.length)
      let match = true;
      do {
        mutated = returnRandBase();
        match = (this.dna[randomIndex] === mutated);
        if (!match) {
          this.dna[randomIndex] = mutated;
        }
      } while (match);
      return this.dna;
    },

    //.compareDNA(pAequor) - returns percent of matching DNA of this and argument DNA.
    compareDNA(pAequor) {
      let numMatchBases = 0;
      let thisSpecimen = this.specimenNum;
      let thatSpecimen = pAequor.specimenNum;
      let thisDNA = this.dna;
      let thatDNA = pAequor.dna;
      if (thisDNA.length !== thatDNA.length){
        console.log("Error. DNA Length mismatch");
        return
      }
      for(let i=0; i < thisDNA.length; i++){
        if (thisDNA[i] === thatDNA[i]){
          numMatchBases++;
        }
      }
      let percentMatch = Math.floor((numMatchBases / thisDNA.length) * 100)
      //console.log("Specimen " + thisSpecimen + " and Specimen " + thatSpecimen + " have " + percentMatch + "% DNA in common.");
      return [percentMatch, thisSpecimen, thatSpecimen];
    },

    //.willLikelySurvive() - returns true if DNA consists of 60% or more of C or G bases, otherwise returns false
    willLikelySurvive() {
      let numCandGbases = 0;
      for(let i=0; i < this.dna.length; i++) {
        if ( this.dna[i] === 'C' || this.dna[i] === 'G' ) {
          numCandGbases++;
        };
      }
      let survivalPercent = (numCandGbases / this.dna.length);
      if ( survivalPercent >= 0.6 ){
        return true;
      }
      return false;
    },

    //.complementStrand() - returns a complement strand of DNA. 'A' <-> 'T' and 'C' <-> 'G'
    complementStrand() {
      let complementStrandArray = [];
      for (let i=0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case 'A':
            complementStrandArray.push('T');
            break;
          case 'T':
            complementStrandArray.push('A');
            break;
          case 'C':
            complementStrandArray.push('G');
            break;
          case 'G':
            complementStrandArray.push('C');
            break;
          default:
            complementStrandArray.push('-');
        }
      }
      return complementStrandArray
    }

  }
}

let test = pAequorFactory(1, mockUpStrand());

let pAequorArray = [];
for (let i=1; i < 31; i++) {
  pAequorArray.push(pAequorFactory(i, mockUpStrand()));
}

// topMatch() - returns the highest percent match DNA within an array or pAequor
const topMatch = (array) => {
  let retTopMatch = [0, 0, 0]; // [percent, specimen1, specimen2]
  for (let i=0; i < array.length - 1; i++) {
    for (let j=i+1; j < array.length; j++) {
      let current = array[i].compareDNA(array[j]);
      if (current[0] > retTopMatch[0]) {
        retTopMatch = current;
      }
    }
  }
  console.log("The top percent is " + retTopMatch[0] + "% - Specimen " + retTopMatch[1] + " and Specimen " + retTopMatch[2]);
  return retTopMatch;
}

topMatch(pAequorArray);
