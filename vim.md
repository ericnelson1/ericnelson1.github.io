### Links
    http://vimcasts.org/
    https://thoughtbot.com/upcase/vim

### Books
    Practical Vim, Edit at Speed of Thought, Drew Neil
    vim script   tim loche  learning vim script the hard way
    :set is for setting options, :let for assigning a value to a variable.
    if vi freezes, try ctrl q

### Emmet commands
    http://docs.emmet.io/
    http://docs.emmet.io/cheat-sheet/
    ctrl shift g  wrap selected html
    ctrl ,  balance outward
    ctrl shift 0  balance inward
    ctrl alt j  goto matching tag
    vim trigger sequence: space ctrl y , 
    check out the “surround” plugin for surrounding content with html tags, tim pope
    html:5 (html5)    html:xt (transitional)    html:xs (strict)
    link:favicon
    div#page>div.logo+ul#navigation>li*5>a{Item $}   
    ul>li{Item $}*5
    lorem,  lorem1000
    @font

### Movement
    h j k l       move left down up right 
    w/W b/B e/E   move forward, back, end of word 
    0 ^ $         move to beginning, first text, end of line  
    H M L         top/middle/bottom of window   
    G gg          move to beginning, end of file  
    f/F char      find next/prev letter on current line  
    t/T char      find next/prev letter and put cursor before it  
    ctrl f b      scroll down/up 1 page (vim only, conflict in sublime)
    ctrl e y      scroll down/up 1 line
    zt/zz         move window so current line is on top/middle  
    : set number  adds line numbers in vim  
    :14           go to line 14 (vim)
    ctrl g        go to line (sublime)
    {  }          move up/down paragraph

### Repeater
    repeater  type number before command  
    5k  goes five lines up  
    .  repeat the previous command
    u  undo previous action  
    ctrl r   redo an undo
    p  paste after cursor   
    P  paste before cursor (use this one)  
    : set paste -> paste from clipboard -> : set nopaste to restore autoindenting
    3fk find the 3rd k on the current line

### Lines
    dd   cut line  
    cc   cut line and put in insert mode  
    o    insert new line below   O new line above
    yy   copy line  
    I    insert mode at beginning of line
    A    append at end of line (append)
    D    delete under cursor to end of line  
    ct"  cuts all text up to the next quote char   
    ctrl m        go to matching bracket
    ctrl shift ,  select text in quotes

### Combining Lines
    J    combine line to next line
    4J   combine 4 lines together (or use visual mode J)
    gJ   same as J but doesnt add spaces

### Words and Characters
    dw  delete next word  
    cw  cut word and put in insert mode
    db  delete prev word  
    yw  copy word  
    x/X delete a char after/before cursor (delete/backspace keys)  
    a   append char after cursor
    s   delete char at cursor and go to insert mode (quick replace of char)  
    bksp/del use these during insert mode to delete
    r   replace single char

###Changing
    c         start change command
    C or c$   change to end of line
    ce        change to end of word
    ci = change inside       ct = change ‘til (doesnt include char)   cf = change find (does include char)
    ci’ change the text inside first quotes found after cursor (even if cusor is at beginning of line)
    ci( same (but may need to move inside parens if you are in nested paren)
    ct" - cuts all text up to the next quote char 
    ci{ - cut inside curly braces (or brackets, quotes, etc)
    ca{ - cut inside including curly braces
    ci>   cut inside html/xml tags 

###Cut and Paste Registers
    select what you want in visual mode
    “kyy           yank into the k register (any letter you want)
    “kp            paste from the k register
    :reg (isters)  show registers  
    special register ‘.’ contains the last text you typed, so if you want to paste it again:
    (in insert mode) ctrl-r .   OR better, just hit ctrl-a



