// class Computer {
//     constructor(brand, proc) {
//       this.compBrand = brand;
//       this.compProc = proc;
//     }
//   }
  
//   myPc = new Computer("Lenovo", "octocore amd ryzen");
//   document.getElementById("demo").innerHTML = "My computer is a " + "<strong>" + myPc.compBrand + "</strong>" + " <p><em>"+ myPc.compProc + " is her processor</em></p>"

  class Console {
      constructor(brand, proc){
          this.compBrand = brand;
          this.compProc = proc;
      }
  
  noel(){
    return "j'ai eu une" + this.compBrand + this.compProc;
  }
}
  // myConsole = new Console("Nintendo","switch edition collector");
  // document.getElementById("demo2").innerHTML = "Ma nouvelle console est une " + "<strong>" + myConsole.compBrand + "</strong>" +" "+ myConsole.compProc

  class model extends Console {
    constructor(brand,proc,mod){
      super(brand,proc);
      this.model = mod;
    }
  
  show() {
    return this.noel() + "c'est un modele" + this.model;

  }
}
myConsole = new model(" Nintendo "," switch edition collector "," lite ");
document.getElementById("demo2").innerHTML = myConsole.show();