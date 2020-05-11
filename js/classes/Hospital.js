"use strict"

class Hospital {
  constructor(nom, maximPacients, maximMetges) {
    var nomHospital = nom;
    var maximPacients = maximPacients;
    var pacientsIngressats = [];
    var ingressarPacient = ingressarPacient;
    var donarDaltaPacient = donarDaltaPacient;
    var morirPacient = morirPacient;
  }
  
    ingressarPacient(pacient) {
      if (pacient != null && (this.pacientsIngressats.length < this.maximPacients))
        this.pacientsIngressats.push(pacient);
    }

    donarDaltaPacient(llitPacient) {
      alert("S'ha donat d'alta el pacient " + this.pacientsIngressats[llitPacient].nomHospital + " de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
      this.pacientsIngressats[llitPacient] = {};
    }

    morirPacient(llitPacient) {
      alert("Encara que s'ha fet tot el que s'ha pogut, el pacient " + this.pacientsIngressats[llitPacient].nomHospital + " ha mort de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
      this.pacientsIngressats[llitPacient] = {};
    }

}
