function resizing()
{
    let width = window.outerWidth;
    let height = window.outerHeight;
    if(isPhone())
    {
        document.getElementById("img").style.visibility = "hidden";
    }
    else
    {
        document.getElementById("img").style.visibility = "visible";
    }

}


function isPhone()
{
   return /Android|iPhone/i.test(navigator.userAgent);
}