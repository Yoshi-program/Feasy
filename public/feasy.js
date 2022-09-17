const feasy = {
  buttonAppend: (buttonPosition) => {
    $(buttonPosition).append(
      '<input style="width: 10em; height:3em;" type="button" value="feasyから入力" width=500 height=100 id="modalBtn">'
    )
    $('#modalBtn').click(function () {
      $('#contents').append(
        '<section style="display: none; position: fixed; top:0;left:0;width:100%;height:100%;"id="modalArea" class="modalArea">\
        <iframe style="position: absolute; top: 50%; left: 50%; transform:translate(-50%,-50%); border:none; width:100%; height:100vh;" height="360" id="childIframe" src="https://yoshi-program.github.io/Feasy"></iframe>\
        </section>'
      )
    })
  },
  on: (func) => {
    window.addEventListener('message', (e) => {
      func(e.data)
    })
  },
  sendData: (demandData) => {
    $('#childIframe')[0].contentWindow.postMessage(
      demandData,
      'https://yoshi-program.github.io/Feasy'
    )
    $('#modalArea').fadeIn()
  },
}
window.feasy = feasy