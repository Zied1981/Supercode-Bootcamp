function spiel() {
  //meine wahl in den windowprompt schreiben

  let mychoice = Number(window.prompt("bitte zahl schätzen"));
  console.log(mychoice);
  // pc sucht eine zahl zwischen 1-10 aus.

  let pcThinking = Math.ceil(Math.random() * 10);
  console.log(pcThinking);

  if (mychoice === pcThinking) {
    console.log(`du hast die richtige zahl ${pcThinking} `);
  } else {
    console.log(`verloren ${pcThinking}`);
  }
}

//immer  function aufrufen nicht vergessen !!!!!!!!!!!!!!!!!
spiel();
