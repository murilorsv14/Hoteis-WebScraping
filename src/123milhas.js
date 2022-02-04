const puppeteer = require('puppeteer');
const readline = require('readline-sync');

const botaoAdicionaAdulto = document.getElementsByClassName('jyrmBK')[1];
const botaoConfirmaPassageiros = document.getElementsByClassName('iSAFWr')[0];

const botaoFromCity = document.getElementsByTagName('input')[1];
const botaoToCity = document.getElementsByTagName('input')[3];

const dataIda = document.getElementsByClassName('DateInput_input_1')[0];
const dataVolta = document.getElementsByClassName('DateInput_input_1')[1];

// Login Function Logic
(async function main() {
  try {
    // Configures puppeteer
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    );

    //Navigates to 123milhas
    await page.goto("https://123milhas.com/");

    // Perguntas()

    const fromCity = readline.question('De onde você está saindo? ');
    const toCity= readline.question('Para onde você vai? ');
    const onlyVai= readline.question('só ida? Sim ou Nao') || null;
    const diaViagemIda = readline.question('Qual o dia da Sua viagem? DD/MM/AA');
    const diaViagemVolta = readline.question('Qual o dia da Sua viagem? DD/MM/AA');
    const numeroDePassageiros = readline.question('Qual o numero de passageiros Adultos?');

    // Clicar os respectivos elementos

    await editor.focus();


    // esperar as respostas




    // guardar as respostas em uma tabela no servidor




    // servir as respostas no front ou em algum console.list

    // await page.waitForSelector("header._1G3Wr");
    // await page.waitForTimeout(5000);

    //Change to contact you want to send messages to
    //Algumas perguntas//
    // const contactName = readline.question('Qual o contanto? ');
    // const contactName = readline.question('Qual o contanto? ');
    await page.click(`button[text='${onlyVai !== null ? 'somente ida': 'Ida e Volta'}']`);
    await page.click(`input[placeholder=Busque por aeroporto'${fromCity}`);
    await page.click(`input[placeholder=Busque por aeroporto'${toCity}`);
    // await page.waitForSelector(".y8WcF");

    //Finds the message bar and focuses on it
    // const editor = await page.$("div[tabindex='-1']");
    // await editor.focus();

    //Amount of messages you want to send
    // const amountOfMessages = readline.question('Qual a quantidade de mensagens? 1 default ') || 1;

    //Loops through cycle of sending message
    // const message = readline.question('Qual a mensagem que deve ser enviada?: ');
    // for (var i = 0; i < amountOfMessages; i++) {
    //   await page.type("div[title='Digite uma mensagem']", message, {delay: 30});
      
    //   await page.click("span[data-testid='send']");
    //   await page.waitForTimeout(100);
    // }
    // await browser.close();
  } catch (e) {
    console.error("error mine", e);
  }
})();

// const puppeteer = require('puppeteer');
// const readline = require('readline-sync');

// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   const url = `https://web.whatsapp.com/`;
//   await page.goto(url);
//   await page.waitForTimeout(2000);

//   console.log('Awaiting/Checking peering with WhatsApp phone');

//   await page.waitForSelector('#side', { timeout: 60000 }).then(() => { // Scan the QR code within the next minute.
//       console.log('Connected !');
//   }).catch((res) => {
//       console.log('Not connected !', res);
//       return -1;
//   });

//   await page.waitForTimeout(2000);
//   await page.screenshot({path:'print.jpg'})
//   const allPage = [];

//   try {
//     await page.evaluate(() =>{
//       allPage = document.getElementsByClassName('_3m_Xw');
//     });5000
//   } catch (err) {
//     console.log(err);
//   }
  
//   const ContactList = {}
//   allPage.map((elem, index) => {
//     return ContactList[index] = elem.children[0].children[0].children[1].children[0].children[0].children[0].title
//   });
//   const string = Object.values(ContactList);
//   console.log(string);
//   const questionCLI = await readline.question(`Para qual destes contatos voce deseja enviar uma msg? ${ContactList}`);
  
//   // await browser.close();
// })();