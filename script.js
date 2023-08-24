let b=document.getElementById('ibold');
let i=document.getElementById('italic');
let u=document.getElementById('underline');
let s=document.getElementById('strike');
let sup=document.getElementById('super');
let sub=document.getElementById('sub');
let del=document.getElementById('erase');
let lef=document.getElementById('l');
let right=document.getElementById('r');
let center=document.getElementById('cen');
let justify=document.getElementById('jus');
let unorder=document.getElementById('un');
let order=document.getElementById('o');
let iundo=document.getElementById('und');
let iredo=document.getElementById('red');
let outden=document.getElementById('out');
let co=document.getElementById('cop');
let c=document.getElementById('cu');

b.addEventListener("click", () => {
    document.execCommand('bold');
})

i.addEventListener("click", () => {
    document.execCommand('italic');
})

u.addEventListener("click", () => {
    document.execCommand('underline');
})

s.addEventListener("click", () => {
    document.execCommand('strikeThrough');
})

sup.addEventListener("click", () => {
    document.execCommand('superscript');
})

sub.addEventListener("click", () => {
    document.execCommand('subscript');
})
function modify(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} 
}
del.addEventListener("click", () => {
    document.execCommand('delete');
})

lef.addEventListener("click", () => {
    document.execCommand('justifyLeft');
})

right.addEventListener("click", () => {
    document.execCommand('justifyRight');
})

center.addEventListener("click", () => {
    document.execCommand('justifyCenter');
})

justify.addEventListener("click", () => {
    document.execCommand('justifyFull');
})

unorder.addEventListener("click", () => {
    document.execCommand('insertUnorderedList');
})

order.addEventListener("click", () => {
    document.execCommand('insertOrderedList');
})

iundo.addEventListener("click", () => {
    document.execCommand('undo');
})

iredo.addEventListener("click", () => {
    document.execCommand('redo');
})

outden.addEventListener("click", () => {
    document.execCommand('outdent');
})

co.addEventListener("click", () => {
    document.execCommand('copy');
})

c.addEventListener("click", () => {
    document.execCommand('cut');
})