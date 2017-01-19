# html-template

span hereda el color del padre

Un elemento inline hereda las propiedades de color del elemento padre block

Text align se aplica a los elementos display block 
------------------------
#Container:
    display: flex
    flex-direction: row (default) | column | row-reverse | column-reverse

Alinear elementos en el eje principal
    justify-content: flex-start (default) | space-between | space-around | center | flex-end

Alinear elementos en el eje secundario, solo funciona para single line 
    align-items: stretch (default) | flex-start | flex-end | center | baseline
    
Funciona para multiline:
    align-content: stretch (default) | flex-start | flex-end | center | baseline
    
Multiline controling
    flex-wrap:  (auto) | wrap | wrap-reverse | 

Flujo - shorthand for flex-direction, flex-wrap
    flex-flow: flex-direction flex-wrap

-------------------------

Child (items)
    Reescribe align-items solo al item (un unico elemento)
    align-self: stretch | flex-start | flex-end | center | baseline
    
    size relativo al eje principal, ignora cuando width/height esta presente
    main size (width/height) base del item, (base but not final)
    flex-basis: auto (default, fit to the content) | Xpx/em/% |
    
    flex-grow: 1 (grow factor), flex-grow: 0 never grow
    
    flex-shrink: 1 (shrink factor), flex-shrink: 0 never shrink
    
    flex: flex-grow flex-shrink flex-basis
    flex: 1 1 100px = 
    
    flex-grow: 1
    flex-shrink: 1
    flex-basis: 100px
    
    flex default value
    flex: 0 1 auto
    
    flex: none; = (flex: 0 0 auto)
    flex: auto; = (flex: 1 1 auto)
    flex: N; = (flex: N 0 0) /* One value, width/height: flex-basis */
    
    /* 0 0 auto */
    flex: none;
    
    /* One value, unitless number: flex-grow (flex-basis changes to 0) */
    flex: 2;
    
    /* One value, width/height: flex-basis */
    flex: 10em;
    flex: 30px;
    flex: auto;
    flex: content;
    
    /* Two values: flex-grow | flex-basis */
    flex: 1 30px;
    
    /* Two values: flex-grow | flex-shrink (flex-basis changes to 0) */
    flex: 2 2;
    
    /* Three values: flex-grow | flex-shrink | flex-basis */
    flex: 2 2 10%;
    
    order: 