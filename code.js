const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')
const alertPlaceholder3 = document.getElementById('liveAlertPlaceholder3')

const alert = (alertx,message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    '<div class="col-md-5 mt-2 mx-sm-3">',
    `<div class="alert alert-${type} alert-dismissible mt-2" role="alert">`,
    `   <p>${message}</p>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
    '</div>'
  ].join('')

  alertx.append(wrapper)
}


const alertTrigger = document.getElementById('liveAlertBtn')
const alertTrigger2 = document.getElementById('liveAlertBtn2')
const alertTrigger3 = document.getElementById('liveAlertBtn3')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert(alertPlaceholder,'Messaggio inviato!', 'success')
  })
}

if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    alert(alertPlaceholder2,'Messaggio inviato!', 'success')
  })
}
if (alertTrigger3) {
    alertTrigger3.addEventListener('click', () => {
      alert(alertPlaceholder3,'Messaggio inviato!', 'success')
    })
  }
