let beam = document.querySelector(".beam");
document.addEventListener("mousemove", handleLightMove);

function handleLightMove(e) {
  let mouseY = e.clientY;
  let rotationRange = 8;
  let rotationAngle = (mouseY / window.innerHeight) * rotationRange - rotationRange / 2;
  beam.style.transform = `translate(0%, -50%) rotate(${-rotationAngle}deg)`
}

function toggleShowPassword(btn) {
  let password = document.getElementById('password');
  if(btn.innerText === 'visibility_off') {
    password.setAttribute('type', 'text');
    password.style.color = 'black';
    btn.innerText = 'visibility';
  }else {
    btn.innerText = 'visibility_off';
    password.setAttribute('type', 'password');
    password.style.color = 'white';
  }
  beam.classList.toggle("on");
}