const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");
  const inputNome=e.target.querySelector("#nome")
  const inputIdade=e.target.querySelector("#idade")
  const nome=String(inputNome.value)
  const idade=String(inputIdade.value)
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  
  console.log(nome);
  console.log(idade);
  if (!peso) {
    setResultado("por favor, preencha os campos obrigatórios.", false);
    return;
  }
  if (!altura) {
    setResultado("por favor, preencha os campos obrigatórios.", false);
    return;
  }
  const imc = getIMC(peso, altura);
  const nivelImc = getNivelImc(imc);
  console.log(nivelImc);

  const sms = `${nome}, seu IMC é ${imc}  (${nivelImc})`;
  setResultado(sms, true);
});
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso", "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}
function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
function criaParagrafu() {
  const p = document.createElement("p");
  return p;
}
function setResultado(sms, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ``;
  const p = criaParagrafu();
  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }
  p.innerHTML = sms;
  resultado.appendChild(p);
}
