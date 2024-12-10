let os=document.getElementById('os');
function Clear() 
{
    os.value="";
}
function del() 
{
    os.value=os.value.slice(0,-1);
}
function display(txt) 
{
    os.value=os.value+txt;
}
function calculate() 
{
    os.value=eval(os.value);
}
function cube() {
    os.value=os.value*os.value*os.value;
}
function square() 
{
 
 os.value=os.value*os.value; 
}