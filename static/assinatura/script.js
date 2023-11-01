const nome = document.getElementById('nome')
const cargo = document.getElementById('cargo')
const telefone = document.getElementById('telefone')
const ddd = document.getElementById('ddd')
const btnCriarAssinatura = document.getElementById('criarAssinatura')
const copyButton = document.getElementById('copyBtn')

let nomeEl = '<div style="color: #102DB6; font-weight: bold; font-size: 24px;">Seu nome</div>'
let cargoETelefoneEl = '<div style="font-weight: bold; font-size: 16px;">Cargo</div>'
nome.addEventListener('input', ({ target }) => {
  console.log(target.value)
  if (target.value !== '' && typeof target.value === 'string')
    nomeEl = `<div style="color: #102DB6; font-weight: bold; font-size: 24px;">${target.value}</div>`
})

cargo.addEventListener('input', ({ target }) => {
  console.log(target.value)
  if (target.value !== '' && typeof target.value === 'string')
    cargoETelefoneEl = `<div style="font-weight: bold; font-size: 16px;">${target.value}</div>`
})


telefone.addEventListener('input', () => {
  if (ddd.textContent.length >= 2 && target.value !== '') {
    cargoETelefoneEl += `<span style="font-weight: normal; font-size: 15px">| (${ddd.textContent}) ${target.value}</span>`
  }
})

btnCriarAssinatura.addEventListener('click', (event) => {
  event.preventDefault()
  document.getElementById('signPlayground').innerHTML = `
  <table width="500" cellpadding="0" cellspacing="0" style="max-width: 500px;" id="unifavelaAssinatura">
      <tr>
        <td width="100"
          style="vertical-align: middle; background-color: #102DB6; border-top-right-radius: 50%; border-bottom-right-radius: 50%; height:140px; margin-right: 16px;">
            <img src="./unifavela.png" width="120px" style="margin-left: -16px;">
        </td>
        <td width="400" style="vertical-align: middle; padding-left: 16px;">
          <div style="color: #102DB6; font-weight: bold; font-size: 24px;">${nomeEl}</div>
          <div style="font-style: italic; font-size: 16px;">Unifavela Semeando o Ensino Popular</div>
          <div style="font-weight: bold; font-size: 16px;">${cargo.value} <span style="font-weight: normal; font-size: 15px">|
              (${ddd.value}) ${telefone.value}</span></div>
          <div></div>
          <!-- links -->
          <table>
            <tr>
              <td style="vertical-align: center;">
                <a href="https://unifavela.com.br" target="_blank" rel="noopener noreferrer"
                  style="text-decoration: none; color: #000;">
                  <img src="./pointer.png" width="16">
                </a>
              </td>
              <td style="vertical-align: center;">
                <a href="https://unifavela.com.br" target="_blank" rel="noopener noreferrer"
                  style="text-decoration: none; color: #000;">unifavela.com.br</a>
              </td>
              <td style="vertical-align: center;">
                &nbsp;
                <a href="https://www.instagram.com/unifavela" target="_blank" rel="noopener noreferrer"
                  style="text-decoration: none; color: #000;">
                  <img src="./brand-instagram.png" width="16">
                </a>
                <a href="https://twitter.com/unifavela" target="_blank" rel="noopener noreferrer"
                  style="text-decoration: none; color: #000;">
                  <!-- <img src="path/to/twitter-icon.png" alt="Twitter" style="display: inline-block; width: 20px; height: 20px; margin-left: 5px;"> -->
                  <img src="./brand-twitter.png" width="16px">
                </a>
                <!-- <span style="display: inline-block; margin: auto 0;">@unifavela</span> -->
              </td>
              <td style="vertical-align: center;">
                <span style="display: inline-block; margin: auto 0;">@unifavela</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `

  document.getElementById('form').reset()
  copyButton.disabled = false
})

copyButton.addEventListener('click', () => {
  const table = document.querySelector('#unifavelaAssinatura')
  const range = document.createRange()
  range.selectNode(table)
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)

  try {
    const successful = document.execCommand('copy')
    const message = successful ? 'Table copied to clipboard' : 'Table copying failed';
    console.log(message)
  } catch (err) {
    console.error('Unable to copy table:', err);
  }

  window.getSelection().removeAllRanges();
})

