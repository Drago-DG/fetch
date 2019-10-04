
/**
 * @param {MessageEvent} evt mensaje recibido de la interfaz gráfica. La
 * property data tiene los datos enviados con hilo.postMessage(modelo). */
onmessage = evt => {
  var division=parseInt(evt.data.numero1) / parseInt(evt.data.numero2);
  postMessage(`El resultado de la division de  ${evt.data.numero1} / ${evt.data.numero2} es ` +  division);
};


