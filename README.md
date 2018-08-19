## Profundizar React
“React in Patterns” Krasimir Tsonev.

## ¿Que es un Component?

Los Component (Componente) son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y retornan los elementos que describen lo que debería aparecer en la pantalla.
Documentacion Oficial.

## ¿Tipos de Components?

Funcional: Este tipo de componentes se definen como funciones y no tiene ni trabajan con estados.

Puro: También se implementan como clases, pero en este caso van a extender de React.PureComponent.

Normal o de Estado: Las principales características de este tipo de componentes es que utilizan la encapsulación en clases, tienen un estado que definen, y actualizan.

Nota: Los componentes Funcionales se utilizan para codear la UI mientras que el Normal o el Puro se utiliza para codear la “logica”.

##PropTypes
$ npm install prop-types --save
```

Hay que validar los datos (Objetos, Arreglos, Numeros, Strings o Funciones) en nuestras aplicaciones, ya que podríamos recibir datos inesperados que pueden afectar (o incluso a romper) nuestra aplicación.

Para eso React nos provee de PropTypes.

$ npm install prop-types -S
Diferencia de propTypes y PropTypes:

PropTypes es el componente que importamos e instalamos por npm, el cual nos ayuda a validar los tipos de dato:

import PropTypes from'prop-types';
Y propTypes es un atributo de la clase Component de react:

Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}
```